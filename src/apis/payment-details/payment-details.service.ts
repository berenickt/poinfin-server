import { Injectable } from '@nestjs/common'
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm'
import { PaymentDetail } from './entities/payment-detail.entity'
import { EntityManager, In, Repository } from 'typeorm'
import {
  IPaymentDetailServiceCheckPayment,
  IPaymentDetailServiceCreate,
  IPaymentDetailServiceCreateWithTransaction,
  IPaymentDetailServiceFindAll,
  IPaymentDetailServiceFindOne,
} from './interfaces/paymentDetails-service.interface'
import { CheckPaymentListReturn } from './dto/checkPaymentList-return.type'

@Injectable()
export class PaymentDetailsService {
  constructor(
    @InjectRepository(PaymentDetail)
    private readonly paymentDetailRepository: Repository<PaymentDetail>,
    @InjectEntityManager()
    protected readonly entityManager: EntityManager,
  ) {
    super(entityManager)
  }

  findAll({ user }: IPaymentDetailServiceFindAll): Promise<PaymentDetail[]> {
    return this.paymentDetailRepository.find({
      where: { user },
      order: { createdAt: 'desc' },
      relations: ['series', 'user', 'payment'],
    })
  }

  async findOne({ user, seriesId }: IPaymentDetailServiceFindOne): Promise<boolean> {
    const isVaild = await this.paymentDetailRepository.findOne({
      where: {
        series: { seriesId },
        user,
      },
    })
    return isVaild ? true : false
  }

  async create({ payment, user, seriesList }: IPaymentDetailServiceCreate): Promise<PaymentDetail[]> {
    const series = []

    seriesList.forEach(el => {
      series.push({ series: el, payment, user })
    })

    const paymentDetails = await this.paymentDetailRepository.save(series)

    return paymentDetails
  }

  async createWithTransaction(
    entityManager: EntityManager,
    { payment, user, seriesList }: IPaymentDetailServiceCreateWithTransaction,
  ): Promise<PaymentDetail[]> {
    const series = []

    seriesList.forEach((el: string) => {
      series.push({ series: el, payment, user })
    })
    const paymentDetails = this.paymentDetailRepository.create(series)

    return await entityManager.save(paymentDetails)
  }

  async checkPayment({ seriesId, user }: IPaymentDetailServiceCheckPayment): Promise<CheckPaymentListReturn> {
    const result = { status: true, seriesId: [] }
    const paymentDetail = await this.paymentDetailRepository.find({
      where: { series: In(seriesId), user: user },
    })

    const payment = paymentDetail.map(el => {
      return el.paymentDetailId
    })

    if (payment.length === 0) {
      return result
    } else {
      result.status = false
      result.seriesId = [...payment]
      return result
    }
  }
}
