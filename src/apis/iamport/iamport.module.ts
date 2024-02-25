import { Module } from '@nestjs/common'
import { IamportService } from './iamport.service'
import { IamportResolver } from './iamport.resolver'

@Module({
  providers: [IamportResolver, IamportService],
})
export class IamportModule {}
