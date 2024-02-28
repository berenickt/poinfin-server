import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Statistics } from './entities/statistics.entity'
import { Between, Repository } from 'typeorm'

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Statistics)
    private readonly statisticsRepository: Repository<Statistics>,
  ) {}

  /**** (1)
   * @description 포스트 조회수 증가
   * @param postId 포스트 아이디
   */
  async updateView({ postId }): Promise<boolean> {
    const curTime = new Date() // 현재 시간
    const utc = curTime.getTime() + curTime.getTimezoneOffset() * 60 * 1000 // UTC로 변환
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000 // 한국 시간과 UTC 시간 차이
    const nowDate = new Date(new Date(utc + KR_TIME_DIFF).setHours(0, 0, 0, 0)) // 오늘 날짜

    let todayViews = await this.statisticsRepository.findOne({
      where: { date: nowDate, post: { postId } },
      relations: ['post'],
    })

    if (!todayViews) {
      todayViews = await this.statisticsRepository.save({
        post: postId,
        date: nowDate,
        view: 0,
      })
    }

    await this.statisticsRepository.update(todayViews.statisticId, {
      view: ++todayViews.view,
    })

    return true
  }

  /**** (2)
   * @description 특정 포스트의 통계를 가져온다.
   * @param fetchStatisticsInput 포스트 아이디, 시작일, 종료일
   * @param userId 유저 아이디
   * @returns 통계 배열
   */
  async postStatistics({ fetchStatisticsInput, userId }): Promise<Statistics[]> {
    const { startDate, endDate, postId } = fetchStatisticsInput

    const result = await this.statisticsRepository.find({
      where: {
        post: { postId },
        date: Between(new Date(startDate), new Date(endDate)),
      },
      order: { date: 'ASC' },
      relations: ['post', 'post.user'],
    })

    const check = result.find(el => el.post?.user.userId !== userId)
    if (check) throw new UnauthorizedException()

    return result
  }

  /**** (3)
   * @description 유저 전체 포스트 통계를 가져온다.
   * @param startDate 시작일
   * @param endDate 종료일
   * @param userId 유저 아이디
   * @returns 통계 배열
   */
  async postsStatistics({
    startDate, //
    endDate,
    userId,
  }): Promise<Statistics[]> {
    const result = await this.statisticsRepository.find({
      where: {
        date: Between(new Date(startDate), new Date(endDate)),
      },
      order: { date: 'ASC' },
      relations: ['post', 'post.user'],
    })

    const userFiltered = result.filter(el => el.post?.user.userId === userId)

    return userFiltered
  }
}
