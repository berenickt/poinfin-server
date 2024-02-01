import { Module } from '@nestjs/common'
import { SeriesReviewService } from './series-review.service'
import { SeriesReviewController } from './series-review.controller'

@Module({
  controllers: [SeriesReviewController],
  providers: [SeriesReviewService],
})
export class SeriesReviewModule {}
