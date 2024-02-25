import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@ObjectType()
export class Comment {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number

  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  commentId: string

  @Column()
  @Field(() => String)
  content: string

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date
}
