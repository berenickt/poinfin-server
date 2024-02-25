import { CreateSeriesReviewInput } from './create-series-review.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateSeriesReviewInput extends PartialType(CreateSeriesReviewInput) {
  @Field(() => Int)
  id: number
}
