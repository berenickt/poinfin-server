import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { SeriesCategoriesService } from './series-categories.service'
import { SeriesCategory } from './entities/series-category.entity'

@Resolver(() => SeriesCategory)
export class SeriesCategoriesResolver {
  constructor(
    private readonly seriesCategoriesService: SeriesCategoriesService, //
  ) {}

  @Query(() => [SeriesCategory])
  fetchSeriesCategories(): Promise<SeriesCategory[]> {
    return this.seriesCategoriesService.findAll()
  }

  @Query(() => SeriesCategory)
  fetchSeriesCategory(
    @Args('categoryId') categoryId: string, //
  ): Promise<SeriesCategory> {
    return this.seriesCategoriesService.findOne({ categoryId })
  }

  @Mutation(() => SeriesCategory)
  createSeriesCategory(
    @Args('name') name: string, //
  ): Promise<SeriesCategory> {
    return this.seriesCategoriesService.create({ name })
  }
}
