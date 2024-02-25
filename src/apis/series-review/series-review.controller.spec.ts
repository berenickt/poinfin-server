import { Test, TestingModule } from '@nestjs/testing'
import { SeriesReviewController } from './series-review.controller'
import { SeriesReviewService } from './series-review.service'

describe('SeriesReviewController', () => {
  let controller: SeriesReviewController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeriesReviewController],
      providers: [SeriesReviewService],
    }).compile()

    controller = module.get<SeriesReviewController>(SeriesReviewController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
