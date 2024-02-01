import { Test, TestingModule } from '@nestjs/testing'
import { PostsCommentsController } from './posts-comments.controller'
import { PostsCommentsService } from './posts-comments.service'

describe('PostsCommentsController', () => {
  let controller: PostsCommentsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsCommentsController],
      providers: [PostsCommentsService],
    }).compile()

    controller = module.get<PostsCommentsController>(PostsCommentsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
