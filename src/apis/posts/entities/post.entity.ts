import { ObjectType, Field } from '@nestjs/graphql'
import { Like } from 'src/apis/like/entities/like.entity'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@ObjectType()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: '포스트 ID' })
  postId: string

  @Column()
  @Field(() => String, { description: '포스트 제목' })
  title: string

  @Column({ type: 'text' })
  @Field(() => String, { description: '포스트 내용' })
  content: string

  @Column()
  @Field(() => String, { description: '포스트 내용의 이미지' })
  image: string

  @Column()
  @Field(() => String, { description: '포스트 설명' })
  description: string

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date

  @DeleteDateColumn()
  @Field(() => Date)
  deletedAt: Date

  @OneToMany(() => Like, like => like.post, { nullable: true })
  @Field(() => [Like], { nullable: true })
  likes?: Like[]
}
