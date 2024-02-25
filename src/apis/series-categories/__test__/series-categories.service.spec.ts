import { Test, TestingModule } from '@nestjs/testing'
import { SeriesCategoriesService } from '../series-categories.service'

describe('SeriesCategoriesService', () => {
  let service: SeriesCategoriesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesCategoriesService],
    }).compile()

    service = module.get<SeriesCategoriesService>(SeriesCategoriesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
