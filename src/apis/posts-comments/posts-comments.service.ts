import { Injectable } from '@nestjs/common'
import { CreatePostsCommentDto } from './dto/create-posts-comment.dto'
import { UpdatePostsCommentDto } from './dto/update-posts-comment.dto'

@Injectable()
export class PostsCommentsService {
  create(createPostsCommentDto: CreatePostsCommentDto) {
    return 'This action adds a new postsComment'
  }

  findAll() {
    return `This action returns all postsComments`
  }

  findOne(id: number) {
    return `This action returns a #${id} postsComment`
  }

  update(id: number, updatePostsCommentDto: UpdatePostsCommentDto) {
    return `This action updates a #${id} postsComment`
  }

  remove(id: number) {
    return `This action removes a #${id} postsComment`
  }
}
