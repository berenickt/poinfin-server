import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateSeriesReviewInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
