import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class ShopCart {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
