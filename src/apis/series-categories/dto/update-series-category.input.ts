import { CreateSeriesCategoryInput } from './create-series-category.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateSeriesCategoryInput extends PartialType(CreateSeriesCategoryInput) {
  @Field(() => Int)
  id: number
}
