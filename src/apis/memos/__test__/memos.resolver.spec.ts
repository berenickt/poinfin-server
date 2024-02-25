import { Test, TestingModule } from '@nestjs/testing'
import { MemosResolver } from '../memos.resolver'
import { MemosService } from '../memos.service'

describe('MemosResolver', () => {
  let resolver: MemosResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemosResolver, MemosService],
    }).compile()

    resolver = module.get<MemosResolver>(MemosResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
