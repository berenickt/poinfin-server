import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { SeriesService } from './series.service'
import { Series } from './entities/series.entity'
import { CreateSeriesInput } from './dto/create-series.input'
import { UpdateSeriesInput } from './dto/update-series.input'
import { IFetchSeriesReturn } from './interfaces/series-return.type'
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard'
import { UseGuards } from '@nestjs/common'
import { IContext } from 'src/commons/interfaces/context'

@Resolver(() => Series)
export class SeriesResolver {
  constructor(
    private readonly seriesService: SeriesService, //
  ) {}

  @Query(() => [Series])
  fetchSeriesAll(): Promise<Series[]> {
    return this.seriesService.findAll()
  }

  @Query(() => [Series])
  fetchSeriesOfTheBest(): Promise<Series[]> {
    return this.seriesService.findBest()
  }

  @Query(() => IFetchSeriesReturn)
  fetchSeries(
    @Args('seriesId') seriesId: string, //
  ): Promise<IFetchSeriesReturn> {
    return this.seriesService.findOne({ seriesId })
  }

  @Query(() => [Series])
  fetchFreeSeries(
    @Args('categoryId', { nullable: true }) categoryId: string, //
  ): Promise<Series[]> {
    return this.seriesService.findFreeSeries({ categoryId })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Query(() => [Series])
  fetchSeriesByUser(
    @Context() context: IContext, //
  ): Promise<Series[]> {
    const user = context.req.user.userId

    return this.seriesService.findByUser({ user })
  }

  @Query(() => [Series])
  fetchSeriesByCategory(
    @Args('categoryId', { nullable: true }) categoryId: string, //
  ): Promise<Series[]> {
    return this.seriesService.findByCategory({ categoryId })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Series)
  createSeries(
    @Args('createSeriesInput') createSeriesInput: CreateSeriesInput,
    @Context() context: IContext,
  ): Promise<Series> {
    const user = context.req.user.userId
    return this.seriesService.create({ createSeriesInput, user })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Series)
  updateSeries(
    @Args('seriesId') seriesId: string,
    @Args('updateSeriesInput') updateSeriesInput: UpdateSeriesInput,
  ): Promise<Series> {
    return this.seriesService.update({ updateSeriesInput, seriesId })
  }
  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Boolean)
  deleteSeries(
    @Args('seriesId') seriesId: string, //
  ): Promise<boolean> {
    return this.seriesService.delete({ seriesId })
  }
}
