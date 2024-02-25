import { ObjectType, Field } from '@nestjs/graphql'
import { Column, CreateDateColumn, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@ObjectType()
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: '답변 ID' })
  answerId: string

  @Column()
  @Field(() => String, { description: '답변 내용' })
  content: string

  @CreateDateColumn()
  @Field(() => Date, { description: '답변 생성일' })
  createdAt: Date

  @UpdateDateColumn()
  @Field(() => Date, { description: '답변 수정일' })
  updatedAt: Date

  @JoinColumn()
  @OneToOne(() => Comment, { onDelete: 'CASCADE', description: '댓글과 일대일 관계' })
  @Field(() => Comment)
  comment: Comment
}
