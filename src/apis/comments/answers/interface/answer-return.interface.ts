import { Field, ObjectType } from '@nestjs/graphql'
import { User } from 'src/apis/users/entities/user.entity'
import { Answer } from '../entities/answer.entity'

@ObjectType()
export class IAnswerServiceReturn extends Answer {
  @Field(() => User)
  answerAuthor: User
}
