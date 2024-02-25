import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateSeriesInput {
  @Field(() => String, { description: '시리즈 제목' })
  title: string

  @Field(() => String, { description: '시리즈 소개' })
  introduction: string

  @Field(() => String, { description: '시리즈 썸네일' })
  image: string

  @Field(() => Int, { description: '시리즈 가격' })
  price: number

  @Field(() => Boolean, { description: '시리즈 유료 여부' })
  paid: boolean

  @Field(() => String, { description: '카테고리 ID' })
  categoryId: string

  @Field(() => [String], { nullable: true })
  posts?: string[]
}
