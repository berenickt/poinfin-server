import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class SeriesReview {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
