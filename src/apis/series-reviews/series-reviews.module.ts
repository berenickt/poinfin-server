import { Module } from '@nestjs/common'
import { SeriesReviewsService } from './series-reviews.service'
import { SeriesReviewsResolver } from './series-reviews.resolver'

@Module({
  providers: [SeriesReviewsResolver, SeriesReviewsService],
})
export class SeriesReviewsModule {}
