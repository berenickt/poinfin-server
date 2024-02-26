import { InputType, Field, Float } from '@nestjs/graphql'

@InputType()
export class CreateSeriesReviewInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  content: string

  @Field(() => Float, { description: 'Example field (placeholder)' })
  rating: number

  @Field(() => String, { description: 'Example field (placeholder)' })
  seriesId: string
}
