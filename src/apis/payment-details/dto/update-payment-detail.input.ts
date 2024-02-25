import { CreatePaymentDetailInput } from './create-payment-detail.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdatePaymentDetailInput extends PartialType(CreatePaymentDetailInput) {
  @Field(() => Int)
  id: number
}
