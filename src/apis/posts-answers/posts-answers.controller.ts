import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { PostsAnswersService } from './posts-answers.service'
import { CreatePostsAnswerDto } from './dto/create-posts-answer.dto'
import { UpdatePostsAnswerDto } from './dto/update-posts-answer.dto'

@Controller('posts-answers')
export class PostsAnswersController {
  constructor(private readonly postsAnswersService: PostsAnswersService) {}

  @Post()
  create(@Body() createPostsAnswerDto: CreatePostsAnswerDto) {
    return this.postsAnswersService.create(createPostsAnswerDto)
  }

  @Get()
  findAll() {
    return this.postsAnswersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsAnswersService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostsAnswerDto: UpdatePostsAnswerDto) {
    return this.postsAnswersService.update(+id, updatePostsAnswerDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsAnswersService.remove(+id)
  }
}
