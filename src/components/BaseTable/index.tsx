import { ReactNode } from 'react'
import { TableContainer } from './styles'

type TableContainerProps = {
  children: ReactNode
}

export function BaseTable({ children }: TableContainerProps) {
  return (
    <TableContainer>
      <table>{children}</table>
    </TableContainer>
  )
}
