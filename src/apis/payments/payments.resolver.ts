import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql'
import { PaymentsService } from './payments.service'
import { Payment } from './entities/payment.entity'
import { CreatePaymentInput } from './dto/create-payment.input'
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard'
import { UseGuards } from '@nestjs/common'
import { IContext } from 'src/commons/interfaces/context'

@Resolver(() => Payment)
export class PaymentsResolver {
  constructor(
    private readonly paymentsService: PaymentsService, //
  ) {}

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Payment)
  createPaymentSeries(
    @Args('createPaymentInput') createPaymentInput: CreatePaymentInput, //
    @Context() context: IContext,
  ): Promise<Payment> {
    const user = context.req.user
    return this.paymentsService.create({ createPaymentInput, user })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Payment)
  createPaymentFreeSeries(
    @Args({ name: 'seriesList', type: () => [String] }) seriesList: string[], //
    @Context() context: IContext,
  ) {
    const user = context.req.user
    return this.paymentsService.createFreeSeries({ seriesList, user })
  }
}
