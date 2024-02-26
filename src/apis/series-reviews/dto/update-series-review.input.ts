import { CreateSeriesReviewInput } from './create-series-review.input'
import { InputType, Field, PartialType, Float } from '@nestjs/graphql'

@InputType()
export class UpdateSeriesReviewInput extends PartialType(CreateSeriesReviewInput) {
  @Field(() => String, { nullable: true })
  content: string

  @Field(() => Float, { nullable: true })
  rating: number
}
