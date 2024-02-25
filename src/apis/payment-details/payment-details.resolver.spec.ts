import { Test, TestingModule } from '@nestjs/testing'
import { PaymentDetailsResolver } from './payment-details.resolver'
import { PaymentDetailsService } from './payment-details.service'

describe('PaymentDetailsResolver', () => {
  let resolver: PaymentDetailsResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentDetailsResolver, PaymentDetailsService],
    }).compile()

    resolver = module.get<PaymentDetailsResolver>(PaymentDetailsResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
