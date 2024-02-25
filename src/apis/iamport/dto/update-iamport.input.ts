import { CreateIamportInput } from './create-iamport.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateIamportInput extends PartialType(CreateIamportInput) {
  @Field(() => Int)
  id: number
}
