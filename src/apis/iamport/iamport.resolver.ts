import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { IamportService } from './iamport.service'
import { Iamport } from './entities/iamport.entity'
import { CreateIamportInput } from './dto/create-iamport.input'
import { UpdateIamportInput } from './dto/update-iamport.input'

@Resolver(() => Iamport)
export class IamportResolver {
  constructor(private readonly iamportService: IamportService) {}

  @Mutation(() => Iamport)
  createIamport(@Args('createIamportInput') createIamportInput: CreateIamportInput) {
    return this.iamportService.create(createIamportInput)
  }

  @Query(() => [Iamport], { name: 'iamport' })
  findAll() {
    return this.iamportService.findAll()
  }

  @Query(() => Iamport, { name: 'iamport' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.iamportService.findOne(id)
  }

  @Mutation(() => Iamport)
  updateIamport(@Args('updateIamportInput') updateIamportInput: UpdateIamportInput) {
    return this.iamportService.update(updateIamportInput.id, updateIamportInput)
  }

  @Mutation(() => Iamport)
  removeIamport(@Args('id', { type: () => Int }) id: number) {
    return this.iamportService.remove(id)
  }
}
