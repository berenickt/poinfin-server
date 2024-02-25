import { Test, TestingModule } from '@nestjs/testing'
import { IamportResolver } from './iamport.resolver'
import { IamportService } from './iamport.service'

describe('IamportResolver', () => {
  let resolver: IamportResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IamportResolver, IamportService],
    }).compile()

    resolver = module.get<IamportResolver>(IamportResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
