import { CacheModule, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AnswersModule } from './apis/comments/answers/answers.module'
import { AuthModule } from './apis/auth/auth.module'
import { CommentsModule } from './apis/comments/comments.module'
import { LikeModule } from './apis/like/like.module'
import { ImagesModule } from './apis/images/images.module'
import { MemosModule } from './apis/memos/memos.module'
import { PaymentsModule } from './apis/payments/payments.module'
import { PaymentDetailsModule } from './apis/payment-details/payment-details.module'
import { PostsModule } from './apis/posts/posts.module'
import { SeriesModule } from './apis/series/series.module'
import { SeriesCategoriesModule } from './apis/series-categories/series-categories.module'
import { SeriesReviewsModule } from './apis/series-reviews/series-reviews.module'
import { TagsModule } from './apis/tags/tags.module'
import { UsersModule } from './apis/users/users.module'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ShopCartModule } from './apis/shop-cart/shop-cart.module'

@Module({
  imports: [
    AnswersModule,
    AuthModule,
    CommentsModule,
    LikeModule,
    ImagesModule,
    MemosModule,
    PaymentsModule,
    PaymentDetailsModule,
    PostsModule,
    SeriesModule,
    SeriesCategoriesModule,
    SeriesReviewsModule,
    ShopCartModule,
    TagsModule,
    UsersModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/commons/grahql/schema.gql'),
      context: ({ req, res }) => ({ req, res }),
      formatError: formattedError => {
        return formattedError
      },
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
    CacheModule.register({
      store: redisStore,
      url: process.env.REDIS_URL,
      isGlobal: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
