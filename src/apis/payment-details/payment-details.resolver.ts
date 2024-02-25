import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { PaymentDetailsService } from './payment-details.service'
import { PaymentDetail } from './entities/payment-detail.entity'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard'
import { IContext } from 'src/commons/interfaces/context'
import { CheckPaymentListReturn } from './dto/checkPaymentList-return.type'

@Resolver(() => PaymentDetail)
export class PaymentDetailsResolver {
  constructor(
    private readonly paymentDetailsService: PaymentDetailsService, //
  ) {}

  @UseGuards(GqlAuthGuard('access'))
  @Query(() => [PaymentDetail])
  fetchPaymentDetailByUser(@Context() context: IContext): Promise<PaymentDetail[]> {
    const user = context.req.user
    return this.paymentDetailsService.findAll({ user })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Query(() => Boolean)
  isVaildCreateReviewByUser(@Args('seriesId') seriesId: string, @Context() context: IContext): Promise<boolean> {
    const user = context.req.user
    return this.paymentDetailsService.findOne({ user, seriesId })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => CheckPaymentListReturn)
  checkPaymentList(
    @Args({ name: 'seriesId', type: () => [String] }) seriesId: string[],
    @Context() context: IContext, //
  ): Promise<CheckPaymentListReturn> {
    const user = context.req.user
    return this.paymentDetailsService.checkPayment({ seriesId, user })
  }
}
