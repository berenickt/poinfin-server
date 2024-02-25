import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql'
import { User } from 'src/apis/users/entities/user.entity'

export enum PAYMENT_STATUS_ENUM {
  PAYMENT = 'PAYMENT',
}

registerEnumType(PAYMENT_STATUS_ENUM, {
  name: 'PAYMENT_STATUS_ENUM',
})

@Entity()
@ObjectType()
export class Payment {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number

  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  paymentId: string

  @Column()
  @Field(() => String)
  impUid: string

  @Column()
  @Field(() => Int)
  amount: number

  @Column({ type: 'enum', enum: PAYMENT_STATUS_ENUM })
  @Field(() => PAYMENT_STATUS_ENUM)
  status: PAYMENT_STATUS_ENUM

  @CreateDateColumn()
  @Field(() => Payment)
  createdAt: Date

  @ManyToOne(() => User)
  @Field(() => User)
  user: User
}
