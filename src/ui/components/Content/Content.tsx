import React from 'react'

import { ICON_DASHBOARD, ICON_SEARCH } from 'assets'

import { RecentCompanies } from 'ui'

import { Analytics } from './Analytics'

import * as S from './Content.styled'

export function Content() {
  return (
    <S.Wrapper>
      <header>
        <img src={ICON_DASHBOARD} alt='Icon Dashboard' />
        <h1>Dashboard</h1>
      </header>

      <S.Container>
        <S.SearchArea>
          <input placeholder='Buscar empresa' />
          <button>
            <img src={ICON_SEARCH} alt='Icon Search' />
          </button>
        </S.SearchArea>
        <Analytics />

        <RecentCompanies />
      </S.Container>
    </S.Wrapper>
  )
}
