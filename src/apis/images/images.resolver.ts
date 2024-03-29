import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { ImagesService } from './images.service'
import { FileUpload, GraphQLUpload } from 'graphql-upload'

@Resolver(() => Image)
export class ImagesResolver {
  constructor(private readonly imagesService: ImagesService) {}

  @Mutation(() => String)
  async uploadImage(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload, //
  ) {
    return await this.imagesService.uploadFile({ file })
  }
}
