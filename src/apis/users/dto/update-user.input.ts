import { CreateUserInput } from './create-user.input'
import { InputType, Field, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { nullable: true })
  nickname: string

  @Field(() => String, { nullable: true })
  image: string

  @Field(() => String, { nullable: true })
  introduction: string
}
