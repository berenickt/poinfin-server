import { ObjectType, Field, Float } from '@nestjs/graphql'

import { Series } from 'src/apis/series/entities/series.entity'
import { User } from 'src/apis/users/entities/user.entity'
import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@ObjectType()
export class SeriesReview {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Example field (placeholder)' })
  reviewId: string

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  content: string

  @Column({ type: 'decimal', precision: 2, scale: 1 })
  @Field(() => Float)
  rating: number

  @ManyToOne(() => Series)
  @Field(() => Series, { description: 'Example field (placeholder)' })
  series: Series

  @ManyToOne(() => User)
  @Field(() => User, { description: 'Example field (placeholder)' })
  user: User

  @CreateDateColumn()
  @Field(() => Date, { description: 'Example field (placeholder)' })
  createdAt: Date

  @UpdateDateColumn()
  @Field(() => Date, { description: 'Example field (placeholder)' })
  updatedAt: Date
}
