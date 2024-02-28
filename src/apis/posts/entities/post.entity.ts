import { ObjectType, Field } from '@nestjs/graphql'
import { Comment } from 'src/apis/comments/entities/comment.entity'
import { Like } from 'src/apis/like/entities/like.entity'
import { Series } from 'src/apis/series/entities/series.entity'
import { Tag } from 'src/apis/tags/entities/tag.entity'
import { User } from 'src/apis/users/entities/user.entity'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity() // 데이터베이스와 연결할 entity로, 해당 클래스가 데이터베이스 테이블과 매핑되도록 해주는 데코레이터
@ObjectType() // 객체 형태의 GraphQL 타입으로 바꿔주는 데코레이터
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: '포스트 ID' }) // GraphQL Field 데코레이터로, 해당 필드를 GraphQL 스키마로 등록
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
  @Field(() => Date, { description: '생성일' })
  createdAt: Date

  @UpdateDateColumn()
  @Field(() => Date, { description: '수정일' })
  updatedAt: Date

  @DeleteDateColumn()
  @Field(() => Date, { description: '삭제일' })
  deletedAt: Date

  @ManyToOne(() => User)
  @Field(() => User, { description: '포스트 작성자' })
  user: User

  @ManyToOne(() => Series, { nullable: true })
  @Field(() => Series, { nullable: true })
  series?: Series

  @JoinTable()
  @ManyToMany(() => Tag, tags => tags.posts)
  @Field(() => [Tag], { nullable: true })
  tags?: Tag[]

  @OneToMany(() => Like, like => like.post, { nullable: true })
  @Field(() => [Like], { nullable: true })
  likes?: Like[]

  @OneToMany(() => Comment, comment => comment.post, { nullable: true })
  @Field(() => [Comment], { nullable: true })
  comments?: Comment[]
}
