import { Injectable } from '@nestjs/common'
import { CreateIamportInput } from './dto/create-iamport.input'
import { UpdateIamportInput } from './dto/update-iamport.input'

@Injectable()
export class IamportService {
  create(createIamportInput: CreateIamportInput) {
    return 'This action adds a new iamport'
  }

  findAll() {
    return `This action returns all iamport`
  }

  findOne(id: number) {
    return `This action returns a #${id} iamport`
  }

  update(id: number, updateIamportInput: UpdateIamportInput) {
    return `This action updates a #${id} iamport`
  }

  remove(id: number) {
    return `This action removes a #${id} iamport`
  }
}
