import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { PostsCommentsService } from './posts-comments.service'
import { CreatePostsCommentDto } from './dto/create-posts-comment.dto'
import { UpdatePostsCommentDto } from './dto/update-posts-comment.dto'

@Controller('posts-comments')
export class PostsCommentsController {
  constructor(private readonly postsCommentsService: PostsCommentsService) {}

  @Post()
  create(@Body() createPostsCommentDto: CreatePostsCommentDto) {
    return this.postsCommentsService.create(createPostsCommentDto)
  }

  @Get()
  findAll() {
    return this.postsCommentsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsCommentsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostsCommentDto: UpdatePostsCommentDto) {
    return this.postsCommentsService.update(+id, updatePostsCommentDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsCommentsService.remove(+id)
  }
}
