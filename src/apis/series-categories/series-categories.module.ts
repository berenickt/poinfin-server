import { Module } from '@nestjs/common'
import { SeriesCategoriesService } from './series-categories.service'
import { SeriesCategoriesResolver } from './series-categories.resolver'

@Module({
  providers: [SeriesCategoriesResolver, SeriesCategoriesService],
})
export class SeriesCategoriesModule {}
