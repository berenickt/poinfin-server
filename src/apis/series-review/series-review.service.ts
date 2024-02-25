import { Injectable } from '@nestjs/common'
import { CreateSeriesReviewDto } from './dto/create-series-review.dto'
import { UpdateSeriesReviewDto } from './dto/update-series-review.dto'

@Injectable()
export class SeriesReviewService {
  create(createSeriesReviewDto: CreateSeriesReviewDto) {
    return 'This action adds a new seriesReview'
  }

  findAll() {
    return `This action returns all seriesReview`
  }

  findOne(id: number) {
    return `This action returns a #${id} seriesReview`
  }

  update(id: number, updateSeriesReviewDto: UpdateSeriesReviewDto) {
    return `This action updates a #${id} seriesReview`
  }

  remove(id: number) {
    return `This action removes a #${id} seriesReview`
  }
}
