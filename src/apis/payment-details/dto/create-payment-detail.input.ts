import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreatePaymentDetailInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
