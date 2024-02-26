import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number

  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Example field (placeholder)' })
  userId: string

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string

  @Column()
  password: string

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  nickname: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true, description: 'Example field (placeholder)' })
  image: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true, description: 'Example field (placeholder)' })
  introduction: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn()
  deletedAt: Date
}
