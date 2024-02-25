import { ExecutionContext } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { GqlExecutionContext } from '@nestjs/graphql'

export const GqlAuthGuard = name => {
  return class GqlAuthAccessGuard extends AuthGuard(name) {
    getRequest(context: ExecutionContext) {
      const gqlContext = GqlExecutionContext.create(context)
      return gqlContext.getContext().req
    }
  }
}
