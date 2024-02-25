import { Module } from '@nestjs/common'
import { PaymentDetailsService } from './payment-details.service'
import { PaymentDetailsResolver } from './payment-details.resolver'

@Module({
  providers: [PaymentDetailsResolver, PaymentDetailsService],
})
export class PaymentDetailsModule {}
