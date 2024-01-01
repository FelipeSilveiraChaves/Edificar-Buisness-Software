import styled from 'styled-components'

export const SignUpContainer = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const SignUpContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h1 {
    color: ${(props) => props.theme['gray-700']};
    padding-left: 1rem;
  }
`
export const SignUpForm = styled.form`
  padding: 1rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme['gray-100']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  width: 22.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 0.875rem;
    line-height: 1rem;
    color: ${(props) => props.theme['gray-700']};
    gap: 0.25rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
  }

  input {
    border: 1px solid ${(props) => props.theme['gray-450']};
    border-radius: 4px;
    padding: 0.5rem 0.875rem;
    height: 2rem;
  }

  p {
    margin-top: -0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};
    text-align: left;
  }
`
export const SubmitButton = styled.button`
  width: 6.25rem;
  padding: 0.5rem 0.75rem;
  line-height: 1;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['blue-500']};
  background-color: ${(props) => props.theme['blue-400']};
  color: ${(props) => props.theme['white-100']};
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['blue-300']};
  }
`
