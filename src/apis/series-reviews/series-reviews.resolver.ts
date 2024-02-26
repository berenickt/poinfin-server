import { Resolver, Query, Mutation, Args, Context, Float } from '@nestjs/graphql'
import { SeriesReviewsService } from './series-reviews.service'
import { SeriesReview } from './entities/series-review.entity'
import { CreateSeriesReviewInput } from './dto/create-series-review.input'
import { UpdateSeriesReviewInput } from './dto/update-series-review.input'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard'
import { IContext } from 'src/commons/interfaces/context'

@Resolver(() => SeriesReview)
export class SeriesReviewsResolver {
  constructor(
    private readonly seriesReviewsServise: SeriesReviewsService, //
  ) {}
  @Query(() => [SeriesReview])
  fetchSeriesReviews(): Promise<SeriesReview[]> {
    return this.seriesReviewsServise.findAll()
  }

  @Query(() => [SeriesReview])
  fetchSeriesReviewsBySeries(@Args('seriesId') seriesId: string): Promise<SeriesReview[]> {
    return this.seriesReviewsServise.findBySeries({ seriesId })
  }

  // 시리즈별 별점 조회
  @Query(() => Float)
  fetchRatingBySeries(
    @Args('seriesId') seriesId: string, //
  ) {
    return this.seriesReviewsServise.findSeriesRating({ seriesId })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => SeriesReview)
  createSeriesReview(
    @Args('createSeriesReviewInput')
    createSeriesReviewInput: CreateSeriesReviewInput,
    @Context() context: IContext,
  ): Promise<SeriesReview> {
    const user = context.req.user
    return this.seriesReviewsServise.create({ createSeriesReviewInput, user })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => SeriesReview)
  updateSeriesReview(
    @Args('reviewId') reviewId: string,
    @Args('updateSeriesReviewInput')
    updateSeriesReviewInput: UpdateSeriesReviewInput,
    @Context() context: IContext, //
  ): Promise<SeriesReview> {
    const user = context.req.user
    return this.seriesReviewsServise.update({
      user,
      reviewId,
      updateSeriesReviewInput,
    })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Boolean)
  deleteSeriesReview(
    @Args('reviewId') reviewId: string, //
    @Context() context: IContext,
  ): Promise<boolean> {
    const user = context.req.user
    return this.seriesReviewsServise.delete({ reviewId, user })
  }
}
