import { ObjectType, Field, Int } from '@nestjs/graphql'
import { PaymentDetail } from 'src/apis/payment-details/entities/payment-detail.entity'
import { SeriesCategory } from 'src/apis/series-categories/entities/series-category.entity'
import { User } from 'src/apis/users/entities/user.entity'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
@ObjectType()
export class Series {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: '시리즈 ID' })
  seriesId: string

  @Column()
  @Field(() => String, { description: '시리즈 제목' })
  title: string

  @Column()
  @Field(() => String, { description: '시리즈 소개' })
  introduction: string

  @Column()
  @Field(() => String, { description: '시리즈 썸네일' })
  image: string

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true, description: '시리즈 가격' })
  price: number

  @Column({ default: false })
  @Field(() => Boolean, { description: '시리즈 결제여부' })
  paid: boolean

  @CreateDateColumn()
  @Field(() => Date, { description: '시리즈 생성일' })
  createdAt: Date

  @UpdateDateColumn()
  @Field(() => Date, { description: '시리즈 수정일' })
  updatedAt: Date

  @DeleteDateColumn()
  deletedAt: Date

  @ManyToOne(() => SeriesCategory)
  @Field(() => SeriesCategory, { description: '시리즈 카테고리' })
  category: SeriesCategory

  @ManyToOne(() => User)
  @Field(() => User, { description: '시리즈 작성자' })
  user: User

  @OneToMany(() => PaymentDetail, paymentDetail => paymentDetail.series, {
    nullable: true,
  })
  payments?: PaymentDetail[]
}
