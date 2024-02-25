import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { MemosService } from './memos.service'
import { Memo } from './entities/memo.entity'
import { CreateMemoInput } from './dto/create-memo.input'
import { UpdateMemoInput } from './dto/update-memo.input'

@Resolver(() => Memo)
export class MemosResolver {
  constructor(private readonly memosService: MemosService) {}

  @Mutation(() => Memo)
  createMemo(@Args('createMemoInput') createMemoInput: CreateMemoInput) {
    return this.memosService.create(createMemoInput)
  }

  @Query(() => [Memo], { name: 'memos' })
  findAll() {
    return this.memosService.findAll()
  }

  @Query(() => Memo, { name: 'memo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.memosService.findOne(id)
  }

  @Mutation(() => Memo)
  updateMemo(@Args('updateMemoInput') updateMemoInput: UpdateMemoInput) {
    return this.memosService.update(updateMemoInput.id, updateMemoInput)
  }

  @Mutation(() => Memo)
  removeMemo(@Args('id', { type: () => Int }) id: number) {
    return this.memosService.remove(id)
  }
}
