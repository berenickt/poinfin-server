import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PostsModule } from './apis/posts/posts.module'
import { UsersModule } from './apis/users/users.module'
import { AuthModule } from './apis/auth/auth.module'
import { SeriesModule } from './apis/series/series.module'

import { SeriesReviewModule } from './apis/series-review/series-review.module'
import { PostsAnswersModule } from './apis/posts-answers/posts-answers.module'
import { MemosModule } from './apis/memos/memos.module'
import { PaymentsModule } from './apis/payments/payments.module'
import { PostsCommentsModule } from './apis/posts-comments/posts-comments.module'

@Module({
  imports: [
    PostsModule,
    UsersModule,
    AuthModule,
    SeriesModule,
    PostsCommentsModule,
    PostsAnswersModule,
    MemosModule,
    PaymentsModule,
    SeriesReviewModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
