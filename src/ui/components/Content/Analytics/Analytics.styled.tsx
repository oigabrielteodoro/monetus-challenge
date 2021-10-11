import styled from 'styled-components'
import { theme } from 'ui/styles'

export const Container = styled.section`
  margin-top: 2.4rem;
  padding: 3rem 2.3rem;
  border-radius: 0.8rem;
  background: ${theme.colors.white};
  box-shadow: 0 0.5rem 1.2rem rgba(222, 222, 231, 0.4);
`

export const AnalyticsAssetArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AssetInfo = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;
  }

  section {
    display: flex;
    margin-left: 1.2rem;
    flex-direction: column;
    align-items: flex-start;

    strong {
      font-weight: 500;
    }

    span {
      color: ${theme.colors.gray[300]};
      font-size: 1.4rem;
    }
  }
`

export const AssetPricing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  img {
    margin-right: 0.8rem;
  }

  span {
    margin-top: 0.8rem;
    color: ${theme.colors.red[500]};
    font-weight: 500;
  }
`