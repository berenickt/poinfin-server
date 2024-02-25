import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { SeriesCategoriesService } from './series-categories.service'
import { SeriesCategory } from './entities/series-category.entity'
import { CreateSeriesCategoryInput } from './dto/create-series-category.input'
import { UpdateSeriesCategoryInput } from './dto/update-series-category.input'

@Resolver(() => SeriesCategory)
export class SeriesCategoriesResolver {
  constructor(private readonly seriesCategoriesService: SeriesCategoriesService) {}

  @Mutation(() => SeriesCategory)
  createSeriesCategory(@Args('createSeriesCategoryInput') createSeriesCategoryInput: CreateSeriesCategoryInput) {
    return this.seriesCategoriesService.create(createSeriesCategoryInput)
  }

  @Query(() => [SeriesCategory], { name: 'seriesCategories' })
  findAll() {
    return this.seriesCategoriesService.findAll()
  }

  @Query(() => SeriesCategory, { name: 'seriesCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.seriesCategoriesService.findOne(id)
  }

  @Mutation(() => SeriesCategory)
  updateSeriesCategory(@Args('updateSeriesCategoryInput') updateSeriesCategoryInput: UpdateSeriesCategoryInput) {
    return this.seriesCategoriesService.update(updateSeriesCategoryInput.id, updateSeriesCategoryInput)
  }

  @Mutation(() => SeriesCategory)
  removeSeriesCategory(@Args('id', { type: () => Int }) id: number) {
    return this.seriesCategoriesService.remove(id)
  }
}
