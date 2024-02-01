import { Test, TestingModule } from '@nestjs/testing'
import { PostsAnswersService } from './posts-answers.service'

describe('PostsAnswersService', () => {
  let service: PostsAnswersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsAnswersService],
    }).compile()

    service = module.get<PostsAnswersService>(PostsAnswersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
