import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { SeriesReviewsService } from './series-reviews.service'
import { SeriesReview } from './entities/series-review.entity'
import { CreateSeriesReviewInput } from './dto/create-series-review.input'
import { UpdateSeriesReviewInput } from './dto/update-series-review.input'

@Resolver(() => SeriesReview)
export class SeriesReviewsResolver {
  constructor(private readonly seriesReviewsService: SeriesReviewsService) {}

  @Mutation(() => SeriesReview)
  createSeriesReview(@Args('createSeriesReviewInput') createSeriesReviewInput: CreateSeriesReviewInput) {
    return this.seriesReviewsService.create(createSeriesReviewInput)
  }

  @Query(() => [SeriesReview], { name: 'seriesReviews' })
  findAll() {
    return this.seriesReviewsService.findAll()
  }

  @Query(() => SeriesReview, { name: 'seriesReview' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.seriesReviewsService.findOne(id)
  }

  @Mutation(() => SeriesReview)
  updateSeriesReview(@Args('updateSeriesReviewInput') updateSeriesReviewInput: UpdateSeriesReviewInput) {
    return this.seriesReviewsService.update(updateSeriesReviewInput.id, updateSeriesReviewInput)
  }

  @Mutation(() => SeriesReview)
  removeSeriesReview(@Args('id', { type: () => Int }) id: number) {
    return this.seriesReviewsService.remove(id)
  }
}
