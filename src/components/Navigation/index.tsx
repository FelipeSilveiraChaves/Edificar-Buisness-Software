import { NavLink } from 'react-router-dom'
import { SquaresFour, FolderNotchOpen, Info } from '@phosphor-icons/react'

import {
  NavigationContainer,
  Profile,
  NavButtonConainer,
  Liscense,
} from './styles'

export function Navigation() {
  return (
    <NavigationContainer>
      <nav>
        <Profile to="/profile">
          <img src="https://thispersondoesnotexist.com/" alt="" />
          <p>Rafael</p>
        </Profile>
        <NavButtonConainer>
          <NavLink to="/clients">
            <SquaresFour size={20} />
            <p>Clientes</p>
          </NavLink>
        </NavButtonConainer>
        <NavButtonConainer>
          <NavLink to="/projects">
            <FolderNotchOpen size={20} />
            <p>Projetos</p>
          </NavLink>
        </NavButtonConainer>
      </nav>
      <Liscense>
        <Info size={20} />
        <p>
          <b>EBS</b> Version 2.0
        </p>
      </Liscense>
    </NavigationContainer>
  )
}
