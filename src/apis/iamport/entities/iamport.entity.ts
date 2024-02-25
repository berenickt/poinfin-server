import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Iamport {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
