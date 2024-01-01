import styled from 'styled-components'

export const ProjectDetailsConatainer = styled.div`
  padding: 0.75rem 1rem;
  height: 100vh;
`
export const MainContainer = styled.main``

export const TableWrapper = styled.div`
  display: flex;

  th {
    text-align: left;
    background-color: ${(props) => props.theme['gray-100']};
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['gray-700']};
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1;
  }
  th:first-child {
    width: 8.25rem;
  }
  th:last-child {
    width: 5.7rem;
  }
  tr:nth-child(even) {
    background-color: ${(props) => props.theme['gray-100']};
  }
  tr:hover {
    cursor: default;
  }
  svg {
    margin-right: 0.5rem;
  }
`
export const EmissionDate = styled.th`
  width: 12rem;
`

export const DefaultsTableData = styled.td`
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  line-height: 1;
  color: ${(props) => props.theme['gray-600']};
  border-top: 1px solid ${(props) => props.theme['gray-300']};

  div {
    display: flex;
    align-items: center;
  }
`
export const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-bottom: 0;
`
export const DownloadButtonWrapper = styled.td`
  border-top: 1px solid ${(props) => props.theme['gray-300']};

  padding: 0.5rem 1rem;

  div {
    display: flex;
    justify-content: right;
  }
`

export const DownloadButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 32px;
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-700']};
  border: 1px solid ${(props) => props.theme['gray-350']};
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  background-color: ${(props) => props.theme['white-100']};
  line-height: 1rem;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme['gray-200']};
  }
`
