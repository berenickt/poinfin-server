import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { PaymentDetailsService } from './payment-details.service'
import { PaymentDetail } from './entities/payment-detail.entity'
import { CreatePaymentDetailInput } from './dto/create-payment-detail.input'
import { UpdatePaymentDetailInput } from './dto/update-payment-detail.input'

@Resolver(() => PaymentDetail)
export class PaymentDetailsResolver {
  constructor(private readonly paymentDetailsService: PaymentDetailsService) {}

  @Mutation(() => PaymentDetail)
  createPaymentDetail(@Args('createPaymentDetailInput') createPaymentDetailInput: CreatePaymentDetailInput) {
    return this.paymentDetailsService.create(createPaymentDetailInput)
  }

  @Query(() => [PaymentDetail], { name: 'paymentDetails' })
  findAll() {
    return this.paymentDetailsService.findAll()
  }

  @Query(() => PaymentDetail, { name: 'paymentDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.paymentDetailsService.findOne(id)
  }

  @Mutation(() => PaymentDetail)
  updatePaymentDetail(@Args('updatePaymentDetailInput') updatePaymentDetailInput: UpdatePaymentDetailInput) {
    return this.paymentDetailsService.update(updatePaymentDetailInput.id, updatePaymentDetailInput)
  }

  @Mutation(() => PaymentDetail)
  removePaymentDetail(@Args('id', { type: () => Int }) id: number) {
    return this.paymentDetailsService.remove(id)
  }
}
