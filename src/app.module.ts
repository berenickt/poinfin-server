import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PostsModule } from './posts/posts.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { SeriesModule } from './series/series.module'
import { PostsCommentsModule } from './posts-comments/posts-comments.module'
import { PostsAnswersModule } from './posts-answers/posts-answers.module'
import { PostsCommentsModule } from './posts-comments/posts-comments.module'
import { SeriesReviewModule } from './series-review/series-review.module'
import { SeriesReviewsModule } from './series-reviews/series-reviews.module'
import { PostsAnswersModule } from './posts-answers/posts-answers.module'
import { MemosModule } from './memos/memos.module'
import { PaymentsModule } from './payments/payments.module'
import { PostsCommentsModule } from './posts-comments/posts-comments.module'

@Module({
  imports: [
    PostsModule,
    UsersModule,
    AuthModule,
    SeriesModule,
    PostsCommentsModule,
    SeriesReviewsModule,
    PostsAnswersModule,
    MemosModule,
    PaymentsModule,
    SeriesReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
