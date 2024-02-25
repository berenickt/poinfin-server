import { Module } from '@nestjs/common'
import { MemosService } from './memos.service'
import { MemosResolver } from './memos.resolver'

@Module({
  providers: [
    MemosResolver, //
    MemosService,
  ],
})
export class MemosModule {}
