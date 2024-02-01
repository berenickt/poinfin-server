import { Module } from '@nestjs/common'
import { PostsCommentsService } from './posts-comments.service'
import { PostsCommentsController } from './posts-comments.controller'

@Module({
  controllers: [PostsCommentsController],
  providers: [PostsCommentsService],
})
export class PostsCommentsModule {}
