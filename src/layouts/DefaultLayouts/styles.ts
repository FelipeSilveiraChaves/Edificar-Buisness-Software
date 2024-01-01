import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  height: auto;
  grid-template-areas: 'header content';
  grid-template-columns: 220px 1fr;

  &:first-child {
    grid-area: header;
  }
  &:last-child {
    grid-area: content;
  }
`
