import { Resolver } from '@nestjs/graphql'
import { TagsService } from './tags.service'
import { Tag } from './entities/tag.entity'

@Resolver(() => Tag)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}
}
