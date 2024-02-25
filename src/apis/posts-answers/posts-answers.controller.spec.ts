import { Test, TestingModule } from '@nestjs/testing'
import { PostsAnswersController } from './posts-answers.controller'
import { PostsAnswersService } from './posts-answers.service'

describe('PostsAnswersController', () => {
  let controller: PostsAnswersController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsAnswersController],
      providers: [PostsAnswersService],
    }).compile()

    controller = module.get<PostsAnswersController>(PostsAnswersController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
