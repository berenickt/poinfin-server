import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ShopCartService } from './shop-cart.service'
import { ShopCart } from './entities/shop-cart.entity'
import { CreateShopCartInput } from './dto/create-shop-cart.input'
import { UpdateShopCartInput } from './dto/update-shop-cart.input'

@Resolver(() => ShopCart)
export class ShopCartResolver {
  constructor(private readonly shopCartService: ShopCartService) {}

  @Mutation(() => ShopCart)
  createShopCart(@Args('createShopCartInput') createShopCartInput: CreateShopCartInput) {
    return this.shopCartService.create(createShopCartInput)
  }

  @Query(() => [ShopCart], { name: 'shopCart' })
  findAll() {
    return this.shopCartService.findAll()
  }

  @Query(() => ShopCart, { name: 'shopCart' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.shopCartService.findOne(id)
  }

  @Mutation(() => ShopCart)
  updateShopCart(@Args('updateShopCartInput') updateShopCartInput: UpdateShopCartInput) {
    return this.shopCartService.update(updateShopCartInput.id, updateShopCartInput)
  }

  @Mutation(() => ShopCart)
  removeShopCart(@Args('id', { type: () => Int }) id: number) {
    return this.shopCartService.remove(id)
  }
}
