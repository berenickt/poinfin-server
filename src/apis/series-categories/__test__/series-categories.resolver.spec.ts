import { Test, TestingModule } from '@nestjs/testing'
import { SeriesCategoriesResolver } from '../series-categories.resolver'
import { SeriesCategoriesService } from '../series-categories.service'

describe('SeriesCategoriesResolver', () => {
  let resolver: SeriesCategoriesResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesCategoriesResolver, SeriesCategoriesService],
    }).compile()

    resolver = module.get<SeriesCategoriesResolver>(SeriesCategoriesResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
