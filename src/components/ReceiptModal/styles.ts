import styled from 'styled-components'

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

  background: rgba(0, 0, 0, 0.8);
`
export const OverlayContent = styled.div`
  opacity: 1;
  padding: 1rem;
  border-radius: 4px;
  width: 20rem;
  background-color: ${(props) => props.theme['white-100']};
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 1rem;
    }
  }
  div:last-child {
    display: flex;
    flex: 1;
    justify-content: right;
    gap: 0.5rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    p {
      cursor: pointer;
    }
    input {
      border: 1px solid ${(props) => props.theme['gray-300']};
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      width: 100%;
    }
  }
`

export const CreateReceiptButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme['blue-500']};
  border: 1px solid ${(props) => props.theme['blue-600']};
  color: ${(props) => props.theme['white-100']};
  padding: 0.5rem 0.875rem;
  margin-top: 0;
  border-radius: 4px;
  &:hover {
    transition: all 0.2s ease;
    background-color: ${(props) => props.theme['blue-400']};
  }
`
export const CancelButton = styled.button`
  cursor: pointer;
  font-size: 0.875rem;
  border: 1px solid ${(props) => props.theme['gray-350']};
  background-color: ${(props) => props.theme['white-100']};
  padding: 0.5rem 0.875rem;
  color: ${(props) => props.theme['gray-700']};
  border-radius: 4px;

  &:hover {
    transition: all 0.2s ease;
    background-color: ${(props) => props.theme['gray-200']};
  }
`
