import { Link, useLocation } from 'react-router-dom'
import {
  HeaderContainer,
  SearchInput,
  NewClientButton,
  BreadCrumb,
  Container,
} from './styles'
import { CaretDown } from '@phosphor-icons/react'

interface HeaderProps {
  pageName: string
  onClickButton: () => void
}

type displayNamesProps = { [key: string]: string }

export function ReceiptAndMaterialsHeader({
  pageName,
  onClickButton,
}: HeaderProps) {
  const location = useLocation()
  let currentLink = ''

  const crumbName: displayNamesProps = {
    projects: 'Projetos',
    clients: 'Clientes',
    archives: 'Arquivos',
  }

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`

      const displayName = crumbName[crumb] || crumb

      return (
        <div key={crumb}>
          <Link to={currentLink}>
            <span>/</span>
            {displayName}
          </Link>
        </div>
      )
    })

  return (
    <HeaderContainer>
      <BreadCrumb>
        <Link to="/profile">Rafael</Link>
        {crumbs}
      </BreadCrumb>
      <Container>
        <h1>{pageName}</h1>
        <div>
          <SearchInput type="text" placeholder="Pesquisar" />
          <NewClientButton type="button" onClick={onClickButton}>
            Adicionar <CaretDown size={14} weight="bold" />
          </NewClientButton>
        </div>
      </Container>
    </HeaderContainer>
  )
}
