import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavigationContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['gray-100']};
  height: 100%;
  min-height: 100vh;
  grid-area: header;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  padding: 0 0.25rem;
  border-right: 1px solid ${(props) => props.theme['gray-300']};

  nav {
    display: flex;
    gap: 2px;
    flex-direction: column;
    width: 100%;
  }
`
export const Profile = styled(NavLink)`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-700']};
  font-weight: 700;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`

export const NavButtonConainer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    border: 1px solid transparent;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 0.75rem;
    gap: 0.5rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    transition:
      background-color 0.2s ease,
      font-weight 0.2s ease;

    svg {
      color: ${(props) => props.theme['gray-500']};
    }
    &:hover {
      transition: border-color ease-in-out 0.4s;
      border-color: ${(props) => props.theme['gray-200']};
    }

    &.active {
      background-color: ${(props) => props.theme['gray-200']};
      font-weight: 700;
    }
  }
`

export const Liscense = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1rem 1rem 0.75rem;
  color: ${(props) => props.theme['gray-500']};
`
