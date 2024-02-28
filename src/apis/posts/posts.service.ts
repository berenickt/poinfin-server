import { Inject, Injectable, NotFoundException, UnauthorizedException, forwardRef } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Post } from './entities/post.entity'
import { Repository } from 'typeorm'
import { UsersService } from '../users/users.service'
import { SeriesService } from '../series/series.service'
import { TagsService } from '../tags/tags.service'
import {
  IPostServiceCreate,
  IPostServiceDelete,
  IPostServiceFindBySeries,
  IPostServiceUpdate,
} from './interfaces/posts-service.interface'
import { StatisticsService } from '../statistics/statistics.service'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>, //
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => SeriesService))
    private readonly seriesService: SeriesService,
    private readonly tagsService: TagsService,
    private readonly statisticsService: StatisticsService,
  ) {}

  /**** (1)
   * @description 포스트 아이디로 포스트를 찾는다.
   * @param postId 포스트 아이디
   */
  findOne({ postId }): Promise<Post> {
    return this.postsRepository.findOne({
      where: { postId },
      relations: ['series', 'tags', 'user', 'likes', 'comments'],
    })
  }

  /**** (2)
   * @description 포스트 아이디로 포스트를 찾는다.
   * @param postId 포스트 아이디
   */
  async findOneWithUpdateView({ postId }): Promise<Post> {
    const result = await this.postsRepository.findOne({
      where: { postId },
      relations: ['series', 'tags', 'user', 'likes', 'comments'],
    })
    if (!result) throw new NotFoundException('존재하지 않는 포스트 아이디입니다.')
    this.statisticsService.updateView({ postId: result.postId }) // 조회수 증가
    return result
  }

  /**** (3)
   * @description 모든 포스트를 찾는다.
   * @returns 포스트 배열
   */
  findAll(): Promise<Post[]> {
    return this.postsRepository.find({
      order: { createdAt: 'DESC' },
      relations: ['series', 'tags', 'user', 'likes', 'comments'],
    })
  }

  /**** (4)
   * @description 시리즈 아이디로 포스트를 찾는다.
   * @param seriesId 시리즈 아이디
   */
  async findBySeries({ seriesId }: IPostServiceFindBySeries): Promise<Post[]> {
    return await this.postsRepository.find({
      where: { series: { seriesId } },
      order: { createdAt: 'DESC' },
      relations: ['series', 'tags', 'user', 'likes', 'comments'],
    })
  }

  /**** (5)
   * @description 유저 아이디로 포스트를 찾는다.
   * @param userId 유저 아이디
   */
  findAllOfMine({ userId }): Promise<Post[]> {
    return this.postsRepository.find({
      where: { user: { userId } },
      order: { createdAt: 'DESC' },
      relations: ['series', 'tags', 'user', 'likes', 'comments'],
    })
  }

  /**** (6)
   * @description 포스트를 생성한다.
   * @param createPostInput 생성할 포스트 정보
   */
  async create({ createPostInput, userId }: IPostServiceCreate): Promise<Post> {
    const { seriesId, tags } = createPostInput

    const user = await this.usersService.findOneById({ userId })
    if (!user) throw new NotFoundException('존재하지 않는 유저입니다.')
    const series = await this.seriesService.findOne({
      seriesId: seriesId ?? '',
    })

    const completeTags = await this.tagsService.tagGenerator({ tags })

    const result = await this.postsRepository.save({
      ...createPostInput,
      user,
      series,
      tags: completeTags,
    })

    return this.findOne({
      postId: result.postId,
    })
  }

  /**** (7)
   * @description 포스트를 수정한다.
   * @param postId 포스트 아이디
   * @param updatePostInput 수정할 포스트 정보
   */
  async update({ postId, userId, updatePostInput }: IPostServiceUpdate): Promise<Post> {
    const post = await this.findOne({
      postId,
    })
    const { tags, seriesId, ...restPostInput } = updatePostInput
    if (post.user.userId !== userId) throw new UnauthorizedException()

    const newTags = await this.tagsService.tagGenerator({ tags })
    const series = await this.seriesService.findOne({
      seriesId: seriesId ?? '',
    })

    await this.postsRepository.save({
      ...post,
      ...restPostInput,
      series,
      tags: newTags,
    })

    return await this.findOne({
      postId,
    })
  }

  /**** (8)
   * @description 시리즈를 수정한다.
   */
  updateSeries({ postArr }) {
    return this.postsRepository.save(postArr)
  }

  /**** (9)
   * @description 포스트를 삭제한다.
   * @param postId 포스트 아이디
   * @param userId 유저 아이디
   */
  async delete({ postId, userId }: IPostServiceDelete): Promise<boolean> {
    const post = await this.postsRepository.delete({
      postId,
      user: { userId },
    })

    return post.affected ? true : false
  }
}
