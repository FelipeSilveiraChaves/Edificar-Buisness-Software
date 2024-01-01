import styled from 'styled-components'

export const TableContainer = styled.div`
  flex: 1;
  display: flex;
  width: 600px;
  max-height: calc(100vh - 6.5rem);
  overflow-x: auto;
  overflow-y: auto;
  border: 1px solid ${(props) => props.theme['gray-300']};

  table {
    width: 100%;
    min-width: 1200px;
    border-collapse: collapse;

    thead:first-child {
      tr {
        cursor: default;
      }
    }
    tr {
      height: 48px;

      cursor: pointer;
    }
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`
