import { Injectable } from '@nestjs/common'
import { CreatePaymentDetailInput } from './dto/create-payment-detail.input'
import { UpdatePaymentDetailInput } from './dto/update-payment-detail.input'

@Injectable()
export class PaymentDetailsService {
  create(createPaymentDetailInput: CreatePaymentDetailInput) {
    return 'This action adds a new paymentDetail'
  }

  findAll() {
    return `This action returns all paymentDetails`
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentDetail`
  }

  update(id: number, updatePaymentDetailInput: UpdatePaymentDetailInput) {
    return `This action updates a #${id} paymentDetail`
  }

  remove(id: number) {
    return `This action removes a #${id} paymentDetail`
  }
}
