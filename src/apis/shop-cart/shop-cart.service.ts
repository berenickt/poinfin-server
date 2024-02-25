import { Injectable } from '@nestjs/common'
import { CreateShopCartInput } from './dto/create-shop-cart.input'
import { UpdateShopCartInput } from './dto/update-shop-cart.input'

@Injectable()
export class ShopCartService {
  create(createShopCartInput: CreateShopCartInput) {
    return 'This action adds a new shopCart'
  }

  findAll() {
    return `This action returns all shopCart`
  }

  findOne(id: number) {
    return `This action returns a #${id} shopCart`
  }

  update(id: number, updateShopCartInput: UpdateShopCartInput) {
    return `This action updates a #${id} shopCart`
  }

  remove(id: number) {
    return `This action removes a #${id} shopCart`
  }
}
