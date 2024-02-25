import { Injectable } from '@nestjs/common'
import { CreateSeriesReviewInput } from './dto/create-series-review.input'
import { UpdateSeriesReviewInput } from './dto/update-series-review.input'

@Injectable()
export class SeriesReviewsService {
  create(createSeriesReviewInput: CreateSeriesReviewInput) {
    return 'This action adds a new seriesReview'
  }

  findAll() {
    return `This action returns all seriesReviews`
  }

  findOne(id: number) {
    return `This action returns a #${id} seriesReview`
  }

  update(id: number, updateSeriesReviewInput: UpdateSeriesReviewInput) {
    return `This action updates a #${id} seriesReview`
  }

  remove(id: number) {
    return `This action removes a #${id} seriesReview`
  }
}
