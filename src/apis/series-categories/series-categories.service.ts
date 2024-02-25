import { Injectable } from '@nestjs/common'
import { CreateSeriesCategoryInput } from './dto/create-series-category.input'
import { UpdateSeriesCategoryInput } from './dto/update-series-category.input'

@Injectable()
export class SeriesCategoriesService {
  create(createSeriesCategoryInput: CreateSeriesCategoryInput) {
    return 'This action adds a new seriesCategory'
  }

  findAll() {
    return `This action returns all seriesCategories`
  }

  findOne(id: number) {
    return `This action returns a #${id} seriesCategory`
  }

  update(id: number, updateSeriesCategoryInput: UpdateSeriesCategoryInput) {
    return `This action updates a #${id} seriesCategory`
  }

  remove(id: number) {
    return `This action removes a #${id} seriesCategory`
  }
}
