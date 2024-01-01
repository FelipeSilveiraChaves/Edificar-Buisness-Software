import styled from 'styled-components'

export const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  height: 100vh;
`

export const MainContainer = styled.main`
  display: flex;
  width: 100%;

  th {
    width: 14.1875rem;
    text-align: left;
    background-color: ${(props) => props.theme['white-100']};
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['gray-700']};
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1;
  }

  .shortDatas {
    width: 25%;
  }
  tr:nth-child(odd) {
    background-color: ${(props) => props.theme['gray-100']};
  }
  tr:hover {
    transition: background-color ease 0.2s;
    background-color: ${(props) => props.theme['gray-200']};
  }

  td {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    line-height: 1;
    color: ${(props) => props.theme['gray-600']};
    border-top: 1px solid ${(props) => props.theme['gray-300']};

    div {
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 0.5rem;
    }
  }
`

export const ShortDatas = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1rem;

  div {
    padding: 0;
    display: flex;
    justify-content: end;
  }
`
