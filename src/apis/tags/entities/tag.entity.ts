import { ObjectType, Field } from '@nestjs/graphql'
import { Post } from 'src/apis/posts/entities/post.entity'
import { Column, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Example field (placeholder)' })
  tagId: string

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string

  @ManyToMany(() => Post, posts => posts.tags)
  @Field(() => Post, { description: 'Example field (placeholder)' })
  posts: Post[]
}
