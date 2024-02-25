import { Test, TestingModule } from '@nestjs/testing'
import { SeriesReviewsResolver } from './series-reviews.resolver'
import { SeriesReviewsService } from './series-reviews.service'

describe('SeriesReviewsResolver', () => {
  let resolver: SeriesReviewsResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesReviewsResolver, SeriesReviewsService],
    }).compile()

    resolver = module.get<SeriesReviewsResolver>(SeriesReviewsResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
