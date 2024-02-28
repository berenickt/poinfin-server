import { ObjectType, Field } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class SeriesCategory {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: '시리즈 카테고리 ID' })
  categoryId: string

  @Column()
  @Field(() => String, { description: '시리즈 카테고리 이름' })
  name: string
}
