import { PartialType } from '@nestjs/mapped-types'
import { CreatePostsCommentDto } from './create-posts-comment.dto'

export class UpdatePostsCommentDto extends PartialType(CreatePostsCommentDto) {}
