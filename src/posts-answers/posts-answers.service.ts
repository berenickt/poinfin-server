import { Injectable } from '@nestjs/common'
import { CreatePostsAnswerDto } from './dto/create-posts-answer.dto'
import { UpdatePostsAnswerDto } from './dto/update-posts-answer.dto'

@Injectable()
export class PostsAnswersService {
  create(createPostsAnswerDto: CreatePostsAnswerDto) {
    return 'This action adds a new postsAnswer'
  }

  findAll() {
    return `This action returns all postsAnswers`
  }

  findOne(id: number) {
    return `This action returns a #${id} postsAnswer`
  }

  update(id: number, updatePostsAnswerDto: UpdatePostsAnswerDto) {
    return `This action updates a #${id} postsAnswer`
  }

  remove(id: number) {
    return `This action removes a #${id} postsAnswer`
  }
}
