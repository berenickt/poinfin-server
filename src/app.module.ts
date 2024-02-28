import { CacheModule, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

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
import { GraphQLModule } from '@nestjs/graphql'
import { ShopCartModule } from './apis/shop-cart/shop-cart.module'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'

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
    /**** 환경변수 설정
     * @see https://docs.nestjs.com/techniques/configuration
     */
    ConfigModule.forRoot(),
    /**** GraphQL 셋팅
     * @see https://docs.nestjs.com/graphql/quick-start
     */
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      /** 스키마 파일을 자동으로 생성할 위치
       * process.cwd() 함수를 호출하여 현재 작업 디렉토리의 경로를 가져와서, join()으로 경로를 결합
       */
      autoSchemaFile: join(process.cwd(), 'src/commons/grahql/schema.gql'),
      context: ({ req, res }) => ({ req, res }),
      formatError: formattedError => {
        return formattedError
      },
    }),
    /**** 데이터베이스 설정
     * @see https://docs.nestjs.com/techniques/database
     */
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE, // 연결할 데이터 베이스명
      entities: [__dirname + '/apis/**/*.entity.*'], // 데이터 베이스와 연결할 entity
      synchronize: true, // entity 테이블을 데이터베이스와 동기화할 것인지
      logging: true, // 콘솔 창에 log를 표시할 것인지
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
