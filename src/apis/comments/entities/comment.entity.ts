import { ObjectType, Field } from '@nestjs/graphql'
import { Post } from 'src/apis/posts/entities/post.entity'
import { User } from 'src/apis/users/entities/user.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: '댓글 ID' })
  commentId: string

  @Column()
  @Field(() => String, { description: '댓글 내용' })
  content: string

  @CreateDateColumn()
  @Field(() => Date, { description: '댓글 생성일)' })
  createdAt: Date

  @UpdateDateColumn()
  @Field(() => Date, { description: '댓글 수정일' })
  updatedAt: Date

  @ManyToOne(() => User)
  @Field(() => User, { description: '댓글 작성자' })
  user: User

  @Index()
  @ManyToOne(() => Post, post => post.comments, { onDelete: 'CASCADE' })
  @Field(() => Post)
  @JoinColumn()
  post: Post
}
