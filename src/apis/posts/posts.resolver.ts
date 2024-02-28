import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { PostsService } from './posts.service'
import { Post } from './entities/post.entity'
import { CreatePostInput } from './dto/create-post.input'
import { UpdatePostInput } from './dto/update-post.input'
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard'
import { UseGuards } from '@nestjs/common'
import { IContext } from 'src/commons/interfaces/context'

/**** PostsResolver API
 * (1) 특정 포스트 조회
 * (2) 모든 포스트 조회
 * (3) 내 포스트 조회
 * (4) 새 포스트 생성
 * (5) 포스트 수정
 * (6) 포스트 삭제
 */
@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService, //
  ) {}

  /**** (1)
   * @description 특정 포스트 조회
   * @param postId
   */
  @Query(() => Post) // GraphQL에서 API Docs를 만들기 위한 type으로, 대문자로 시작
  fetchPost(
    @Args('postId') postId: string, // ts type 지정으로 해당 타입 지정은, 소문자로 시작
  ): Promise<Post> {
    return this.postsService.findOneWithUpdateView({ postId })
  }

  /**** (2)
   * @description 모든 포스트 조회
   * @returns 포스트 배열
   */
  @Query(() => [Post])
  fetchPosts(): Promise<Post[]> {
    return this.postsService.findAll()
  }

  /**** (3)
   * @description 내 포스트 조회
   * @returns 포스트 배열
   */
  @UseGuards(GqlAuthGuard('access'))
  @Query(() => [Post])
  fetchPostsOfMine(
    @Context() context: IContext, //
  ): Promise<Post[]> {
    const userId = context.req.user.userId
    return this.postsService.findAllOfMine({ userId })
  }

  /**** (4)
   * @description 새 포스트 생성
   * @returns 포스트 배열
   */
  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Post)
  async createPost(
    @Args('createPostInput') createPostInput: CreatePostInput, // GraphQL 스키마에서 createPostInput이라는 인자를 받아옴
    /** Context
     * Context는 일반적으로 인증, 권한 부여, 데이터베이스 연결 등과 같은 전역적인 정보를 포함하는 객체
     * 컨텍스트 객체는 GraphQL 리졸버 함수들 간에 공유되어 사용됨
     * @description GraphQL 요청의 컨텍스트 값을 받아옴
     */
    @Context() context: IContext,
  ): Promise<Post> {
    const userId = context.req.user.userId
    return await this.postsService.create({ createPostInput, userId })
  }

  /**** (5)
   * @description 포스트 수정
   * @returns 포스트 배열
   */
  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Post)
  updatePost(
    @Args('postId') postId: string,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
    @Context() context: IContext,
  ): Promise<Post> {
    const userId = context.req.user.userId
    return this.postsService.update({ userId, postId, updatePostInput })
  }

  /**** (6)
   * @description 포스트 삭제
   * @param postId
   */
  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Boolean)
  deletePost(
    @Args('postId') postId: string, //
    @Context() context: IContext,
  ): Promise<boolean> {
    const userId = context.req.user.userId
    return this.postsService.delete({ postId, userId })
  }
}
