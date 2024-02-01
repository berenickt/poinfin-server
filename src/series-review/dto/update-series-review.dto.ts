import { PartialType } from '@nestjs/mapped-types'
import { CreateSeriesReviewDto } from './create-series-review.dto'

export class UpdateSeriesReviewDto extends PartialType(CreateSeriesReviewDto) {}
