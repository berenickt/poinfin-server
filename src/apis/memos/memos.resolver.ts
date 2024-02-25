import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql'
import { MemosService } from './memos.service'
import { Memo } from './entities/memo.entity'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard'
import { IContext } from 'src/commons/interfaces/context'

@Resolver(() => Memo)
export class MemosResolver {
  constructor(
    private readonly memoService: MemosService, //
  ) {}

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Memo)
  async createPostMemo(@Args('postId') postId: string, @Args('parse') parse: string, @Context() context: IContext) {
    return this.memoService.createMemo({
      parse,
      postId,
      userId: context.req.user.userId,
    })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Query(() => [Memo])
  async fetchPostMemos(
    @Context() context: IContext, //
  ): Promise<Memo[]> {
    return this.memoService.fetchMemos({ userId: context.req.user.userId })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Boolean)
  deletePostMemo(@Args('memoId') memoId: string, @Context() context: IContext): Promise<boolean> {
    return this.memoService.deleteMemo({
      memoId,
      userId: context.req.user.userId,
    })
  }
}
