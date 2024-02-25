import { PartialType } from '@nestjs/mapped-types'
import { CreatePostsAnswerDto } from './create-posts-answer.dto'

export class UpdatePostsAnswerDto extends PartialType(CreatePostsAnswerDto) {}
