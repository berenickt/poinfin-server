import { Resolver, Mutation, Args, Context } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { IContext } from 'src/commons/interfaces/context'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from './guards/gql-auth.guard'

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  loginUser(
    @Args('email') email: string, //
    @Args('password') password: string,
    @Context() context: IContext,
  ): Promise<string> {
    return this.authService.login({ email, password, context })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Boolean)
  async logoutUser(
    @Context() context: IContext, //
  ): Promise<boolean> {
    return this.authService.logout({ context })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Boolean)
  async resignUser(
    @Context() context: IContext, //
  ): Promise<boolean> {
    return this.authService.resign({ context })
  }

  @UseGuards(GqlAuthGuard('refresh'))
  @Mutation(() => String)
  restoreAccessToken(
    @Context() context: IContext, //
  ): string {
    return this.authService.restoreAccessToken({ user: context.req.user })
  }
}
