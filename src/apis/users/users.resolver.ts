import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entities/user.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard'
import { UseGuards } from '@nestjs/common'
import { IContext } from 'src/commons/interfaces/context'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @UseGuards(GqlAuthGuard('access'))
  @Query(() => User)
  fetchUserLoggedIn(
    @Context() context: IContext, //
  ): Promise<User> {
    return this.usersService.findOneById({ userId: context.req.user.userId })
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    return this.usersService.create({ createUserInput })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => User)
  updateUser(
    @Context() context: IContext, //
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.update({
      userId: context.req.user.userId,
      updateUserInput,
    })
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => Boolean)
  async updateUserPassword(
    @Context() context: IContext, //
    @Args('currentPassword') currentPassword: string,
    @Args('newPassword') newPassword: string,
  ): Promise<boolean> {
    return this.usersService.updatePassword({
      userId: context.req.user.userId,
      currentPassword,
      newPassword,
    })
  }
}
