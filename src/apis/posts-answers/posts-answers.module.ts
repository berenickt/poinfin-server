import { Module } from '@nestjs/common'
import { PostsAnswersService } from './posts-answers.service'
import { PostsAnswersController } from './posts-answers.controller'

@Module({
  controllers: [PostsAnswersController],
  providers: [PostsAnswersService],
})
export class PostsAnswersModule {}
