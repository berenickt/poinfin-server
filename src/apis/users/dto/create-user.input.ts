import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  password: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  nickname: string
}
