import { Test, TestingModule } from '@nestjs/testing'
import { SeriesReviewService } from './series-review.service'

describe('SeriesReviewService', () => {
  let service: SeriesReviewService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesReviewService],
    }).compile()

    service = module.get<SeriesReviewService>(SeriesReviewService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
