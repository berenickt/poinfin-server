import { Module } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { CommentsResolver } from './comments.resolver'
import { AnswersModule } from './answers/answers.module'

@Module({
  providers: [
    CommentsResolver, //
    CommentsService,
  ],
  imports: [AnswersModule],
  exports: [CommentsService],
})
export class CommentsModule {}
