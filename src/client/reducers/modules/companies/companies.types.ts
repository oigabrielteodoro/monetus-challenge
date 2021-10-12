import { Option } from 'fp-ts/Option'

import { CompanyNormalized } from 'types'

export enum ActionTypes {
  getCompanyRequest = '@companies/GET_COMPANY_REQUEST',
  getCompanySuccess = '@companies/GET_COMPANY_SUCCESS',
  getCompanyFailure = '@companies/GET_COMPANY_FAILURE',
}

export type CompaniesState = {
  loading: boolean
  company: Option<CompanyNormalized>
  storaged: CompanyNormalized[]
}
