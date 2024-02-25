import { Test, TestingModule } from '@nestjs/testing'
import { ShopCartResolver } from '../shop-cart.resolver'
import { ShopCartService } from '../shop-cart.service'

describe('ShopCartResolver', () => {
  let resolver: ShopCartResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopCartResolver, ShopCartService],
    }).compile()

    resolver = module.get<ShopCartResolver>(ShopCartResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
