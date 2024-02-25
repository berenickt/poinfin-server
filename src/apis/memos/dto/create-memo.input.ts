import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateMemoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
