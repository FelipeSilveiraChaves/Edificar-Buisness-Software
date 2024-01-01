import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const BreadCrumb = styled.div`
  color: ${(props) => props.theme['gray-600']};
  font-size: 0.75rem;
  display: flex;
  align-items: center;

  a {
    color: ${(props) => props.theme['gray-600']};
  }
  a span {
    color: ${(props) => props.theme['gray-300']};
    margin-right: 8px;
    margin-left: 8px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 1.875rem;
    color: ${(props) => props.theme['gray-700']};
    line-height: 1;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const SearchInput = styled.input`
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['gray-450']};

  &::placeholder {
    color: ${(props) => props.theme['gray-700']};
    font-weight: 600;
    line-height: 1;
  }
`

export const NewClientButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
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
