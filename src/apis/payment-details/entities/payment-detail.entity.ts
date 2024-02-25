import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class PaymentDetail {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
