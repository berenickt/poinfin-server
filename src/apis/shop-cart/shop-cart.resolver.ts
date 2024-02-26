import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { ShopCartService } from './shop-cart.service'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard'
import { Series } from '../series/entities/series.entity'
import { IContext } from 'src/commons/interfaces/context'

@Resolver()
export class ShopCartResolver {
  constructor(
    private readonly shoppingCartService: ShopCartService, //
  ) {}

  @UseGuards(GqlAuthGuard('access'))
  @Query(() => [Series])
  fetchShoppingCart(
    @Context() context: IContext, //
  ): Promise<Series[]> {
    const user = context.req.user
    return this.shoppingCartService.findAll({ user })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Series)
  insertSeriesInCart(
    @Args('seriesId') seriesId: string, //
    @Context() context: IContext,
  ): Promise<Series> {
    const user = context.req.user
    return this.shoppingCartService.insert({ seriesId, user })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Boolean)
  deleteSeriesInCart(
    @Args('seriesId') seriesId: string, //
    @Context() context: IContext,
  ): Promise<boolean> {
    const user = context.req.user
    return this.shoppingCartService.deleteSeries({ seriesId, user })
  }
}
