import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateShopCartInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
