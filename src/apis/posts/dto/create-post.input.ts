import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreatePostInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number

  @Field(() => String, { description: '포스트 제목' })
  title: string

  @Field(() => String, { description: '포스트 내용' })
  content: string

  @Field(() => String, { description: '포스트 이미지' })
  image: string

  @Field(() => String, { description: '포스트 설명' })
  description: string

  @Field(() => String, { nullable: true, description: '시리즈 ID' })
  seriesId?: string

  @Field(() => [String], { nullable: true, description: '포스트 태그' })
  tags?: string[]
}
