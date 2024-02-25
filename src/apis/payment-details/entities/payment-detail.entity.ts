import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Payment } from 'src/apis/payments/entities/payment.entity'
import { Series } from 'src/apis/series/entities/series.entity'
import { User } from 'src/apis/users/entities/user.entity'
import { CreateDateColumn, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
export class PaymentDetail {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number

  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  paymentDetailId: string

  @ManyToOne(() => Payment)
  @Field(() => Payment)
  payment: Payment

  @Index()
  @ManyToOne(() => Series, series => series.payments)
  @Field(() => Series)
  series: Series

  @ManyToOne(() => User)
  @Field(() => User)
  user: User

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date
}
