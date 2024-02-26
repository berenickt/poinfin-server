import { ObjectType, Field } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class SeriesCategory {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Example field (placeholder)' })
  categoryId: string

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string
}
