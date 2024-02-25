import { Field, ObjectType } from '@nestjs/graphql'
import { User } from 'src/apis/users/entities/user.entity'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Memo {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: '메모 ID' })
  memoId: string

  @Column({ length: 100 })
  @Field(() => String, { description: '드래그 문구' })
  parse: string

  @Column()
  @Field(() => String, { description: '메모 제목' })
  title: string

  @Column()
  @Field(() => String, { description: '메모 작성자' })
  author: string

  @CreateDateColumn()
  @Field(() => Date, { description: '메모 생성일' })
  createdAt: Date

  @DeleteDateColumn()
  @Field(() => Date, { description: '메모 삭제일' })
  deletedAt: Date

  @ManyToOne(() => User)
  @Field(() => User, { description: '메모 사용자' })
  user: User
}
