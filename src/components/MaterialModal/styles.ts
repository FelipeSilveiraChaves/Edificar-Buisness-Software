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
  overflow-y: auto;
  max-height: calc(100vh - 2rem);

  opacity: 1;
  padding: 1rem;
  border-radius: 4px;
  width: 20.625rem;
  background-color: ${(props) => props.theme['white-100']};
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  div:first-child {
    h1 {
      font-size: 1.5rem;
      color: ${(props) => props.theme['gray-700']};
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
    flex-direction: column;
    font-size: 0.875rem;
    p {
      cursor: pointer;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div:first-child {
      display: flex;
      gap: 10rem;

      p {
        color: ${(props) => props.theme['gray-350']};
        font-weight: 500;
      }
    }
  }
`

const BaseInput = styled.input`
  border: 1px solid ${(props) => props.theme['gray-300']};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`

export const AmountInput = styled(BaseInput)`
  width: 4rem;
`
export const NameMaterialInput = styled(BaseInput)`
  width: 100%;
`

export const LabelContainer = styled.div`
  display: flex;
  align-items: right;
  flex-direction: row;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-400']};
`
export const CreateReceiptButton = styled.button`
  cursor: pointer;

  background-color: ${(props) => props.theme['blue-500']};
  border: 1px solid ${(props) => props.theme['blue-600']};
  color: ${(props) => props.theme['white-100']};
  padding: 0.5rem 0.875rem;
  border-radius: 4px;
  &:hover {
    transition: all 0.2s ease;
    background-color: ${(props) => props.theme['blue-300']};
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
const BaseMaterialButtons = styled.button`
  border-radius: 50%;
  border: 0;
  line-height: 1;
  background-color: transparent;
  cursor: pointer;
`
export const RemoveMaterialButton = styled(BaseMaterialButtons)`
  color: ${(props) => props.theme['red-500']};
  &:focus {
    box-shadow: none;
  }
`
export const AddMaterialButton = styled(BaseMaterialButtons)`
  color: ${(props) => props.theme['gray-700']};
`
