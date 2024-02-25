import { CreateShopCartInput } from './create-shop-cart.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateShopCartInput extends PartialType(CreateShopCartInput) {
  @Field(() => Int)
  id: number
}
