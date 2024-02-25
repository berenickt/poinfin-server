import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateSeriesCategoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
