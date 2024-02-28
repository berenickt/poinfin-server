import { InputType, Field } from '@nestjs/graphql'

/**** DTO (data transfer object)
 * 데이터 전송 객체. 즉, 네트워크 간에 데이터를 어떤 식으로 보낼지를 정의한 객체
 * @description 포스트 생성 DTO
 */
@InputType() // GraphQL InputType 데코레이터로, 해당 클래스를 GraphQL InputType으로 등록
export class CreatePostInput {
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
