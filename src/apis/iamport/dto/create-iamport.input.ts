import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateIamportInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
