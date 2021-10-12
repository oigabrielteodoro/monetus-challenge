import React, { FormEvent, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { isSome } from 'fp-ts/Option'

import { RecentCompanies } from 'ui'
import { ICON_DASHBOARD, ICON_SEARCH } from 'assets'
import { ApplicationState, CompaniesState, getCompanyRequest } from 'client'

import { Analytics } from './Analytics'

import * as S from './Content.styled'

export function Content() {
  const dispatch = useDispatch()

  const { company, loading } = useSelector<ApplicationState, CompaniesState>(
    (state) => state.companies,
  )

  useEffect(() => {
    if (!isSome(company) && !loading) {
      dispatch(getCompanyRequest('MSFT'))
    }
  }, [loading, company, dispatch])

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const { value } = event.currentTarget[0] as HTMLInputElement

      dispatch(getCompanyRequest(value))

      event.currentTarget.reset()
    },
    [dispatch],
  )

  return (
    <S.Wrapper>
      <header>
        <img src={ICON_DASHBOARD} alt='Icon Dashboard' />
        <h1>Dashboard</h1>
      </header>

      <S.Container>
        <S.SearchArea onSubmit={handleSubmit}>
          <input placeholder='Buscar empresa' />
          <button type='submit'>
            <img src={ICON_SEARCH} alt='Icon Search' />
          </button>
        </S.SearchArea>
        <Analytics />

        <RecentCompanies />
      </S.Container>
    </S.Wrapper>
  )
}
