import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreatePaymentInput {
  @Field(() => String, { description: '아임포트 ID' })
  impUid: string

  @Field(() => Int, { description: '시리즈 가격' })
  amount: number

  @Field(() => [String], { description: '시리즈 리스트' })
  seriesList: string[]
}
