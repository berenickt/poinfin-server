import { Injectable } from '@nestjs/common'
import { CreateMemoInput } from './dto/create-memo.input'
import { UpdateMemoInput } from './dto/update-memo.input'

@Injectable()
export class MemosService {
  create(createMemoInput: CreateMemoInput) {
    return 'This action adds a new memo'
  }

  findAll() {
    return `This action returns all memos`
  }

  findOne(id: number) {
    return `This action returns a #${id} memo`
  }

  update(id: number, updateMemoInput: UpdateMemoInput) {
    return `This action updates a #${id} memo`
  }

  remove(id: number) {
    return `This action removes a #${id} memo`
  }
}
