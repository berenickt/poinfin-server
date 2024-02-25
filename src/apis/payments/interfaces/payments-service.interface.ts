import { IAuthUser } from 'src/commons/interfaces/context'
import { CreatePaymentInput } from '../dto/create-payment.input'

export interface IPaymentServiceFindOneByImpUid {
  impUid: string
}

export interface IPaymentServiceCheckDuplication {
  impUid: string
}

export interface IPaymentsServiceCreate {
  createPaymentInput: CreatePaymentInput
  user: IAuthUser['user']
}

export interface IPaymentsServiceCreateWithTransaction {
  impUid: string
  amount: number
  user: IAuthUser['user']
}

export interface IPaymentsServiceCreateFreeSeries {
  seriesList: string[]
  user: IAuthUser['user']
}
