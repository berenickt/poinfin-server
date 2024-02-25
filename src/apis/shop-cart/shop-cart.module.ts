import { Module } from '@nestjs/common'
import { ShopCartService } from './shop-cart.service'
import { ShopCartResolver } from './shop-cart.resolver'

@Module({
  providers: [ShopCartResolver, ShopCartService],
})
export class ShopCartModule {}
