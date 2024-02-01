import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { SeriesReviewService } from './series-review.service'
import { CreateSeriesReviewDto } from './dto/create-series-review.dto'
import { UpdateSeriesReviewDto } from './dto/update-series-review.dto'

@Controller('series-review')
export class SeriesReviewController {
  constructor(private readonly seriesReviewService: SeriesReviewService) {}

  @Post()
  create(@Body() createSeriesReviewDto: CreateSeriesReviewDto) {
    return this.seriesReviewService.create(createSeriesReviewDto)
  }

  @Get()
  findAll() {
    return this.seriesReviewService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seriesReviewService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeriesReviewDto: UpdateSeriesReviewDto) {
    return this.seriesReviewService.update(+id, updateSeriesReviewDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seriesReviewService.remove(+id)
  }
}
