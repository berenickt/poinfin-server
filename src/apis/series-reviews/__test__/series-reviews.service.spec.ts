import { Test, TestingModule } from '@nestjs/testing'
import { SeriesReviewsService } from '../series-reviews.service'

describe('SeriesReviewsService', () => {
  let service: SeriesReviewsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesReviewsService],
    }).compile()

    service = module.get<SeriesReviewsService>(SeriesReviewsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
