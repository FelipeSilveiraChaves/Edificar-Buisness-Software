import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  padding: 0.75rem 1rem;
  height: 100%;
`
export const AboutClient = styled.aside`
  max-width: 100vw;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['blue-250']};
  border-radius: 4px;
  background-color: ${(props) => props.theme['blue-100']};

  margin-bottom: 0.75rem;

  h1 {
    font-size: 1.25rem;
    line-height: 1;
  }

  p {
    font-size: 0.875rem;
    line-height: 20px;
    word-wrap: break-word;
  }
`

export const AboutClientButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 1px solid ${(props) => props.theme['gray-450']};
  background-color: ${(props) => props.theme['white-100']};
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
`
export const OverlayContainer = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['gray-800']};
  opacity: 0.94;
`
export const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 4px;
  width: 32rem;
  background-color: ${(props) => props.theme['white-100']};

  button {
    border: 0;
    background: 0;
    padding: 0.25rem;
    cursor: pointer;
    svg {
      font-size: 24px;
      color: ${(props) => props.theme['gray-500']};
    }
  }
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      line-height: 1;

      font-size: 1.25rem;
    }
  }
  div:nth-child(2) {
    h3 {
      font-size: 0.875rem;
      line-height: 1;
      font-weight: bold;
    }
    textarea {
      padding: 0.25rem 0.5rem;
      width: 100%;
      height: 8rem;
      margin-top: 0.25rem;
      border: 1px solid ${(props) => props.theme['gray-350']};
      border-radius: 4px;
      background-color: ${(props) => props.theme['gray-100']};
      resize: none;
      font-size: 0.875rem;
    }
    textarea::-webkit-scrollbar {
      width: 0px;
    }
  }
  div:last-child {
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 0.5rem;
    background-color: ${(props) => props.theme['white-100']};

    button:first-child {
      cursor: pointer;

      border: 1px solid ${(props) => props.theme['gray-350']};
      background-color: ${(props) => props.theme['white-100']};
      padding: 0.5rem 0.875rem;
      color: ${(props) => props.theme['gray-700']};
      border-radius: 4px;

      &:hover {
        background-color: ${(props) => props.theme['gray-200']};
      }
    }
    button:last-child {
      cursor: pointer;

      background-color: ${(props) => props.theme['blue-500']};
      border: 1px solid ${(props) => props.theme['blue-600']};
      color: ${(props) => props.theme['white-100']};
      padding: 0.5rem 0.875rem;
      border-radius: 4px;
      &:hover {
        background-color: ${(props) => props.theme['blue-400']};
      }
    }
  }
`

export const MainContainer = styled.main`
  display: flex;
  width: 100%;

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
  }

  svg {
    margin-right: 0.5rem;
  }
`
const FathersTableDefault = styled.th`
  text-align: left;
  background-color: ${(props) => props.theme['white-100']};
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme['gray-700']};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1;
`

export const TableFathers = styled(FathersTableDefault)`
  text-align: left;
`

export const PendingData = styled.div`
  color: ${(props) => props.theme['green-400']};
`
export const MonetaryDataFather = styled(FathersTableDefault)`
  width: 190px;
`
export const RecievedData = styled.div`
  color: ${(props) => props.theme['red-600']};
`
