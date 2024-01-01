import styled, { css, keyframes } from 'styled-components'

interface SelectableButtonContainerProps {
  selected: boolean
}

const SlideRight = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`
const SlideLeft = keyframes`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`

export const SelectableButtonContainer = styled.button<SelectableButtonContainerProps>`
  cursor: pointer;

  background: 0;
  font-size: 0.875rem;
  border: none;
  color: ${(props) => props.theme['gray-700']};

  &:focus {
    box-shadow: none;
  }

  &::after {
    display: block;
    content: '';
    width: 100%;
    border-bottom: solid 2px ${(props) => props.theme['blue-400']};
    transition: all 250ms ease-in-out;
    padding-bottom: 16px;
  }
  ${({ selected }) => {
    if (selected) {
      return css`
        font-weight: 700;
        &::after {
          transform: scaleX(1);
        }
      `
    } else if (!selected) {
      return css`
        &:hover::after {
          opacity: 1;
          animation: ${SlideRight} 0.2s ease-in-out both;
        }
        &:after {
          animation: ${SlideLeft} 0.2s ease-in-out both;
          opacity: 0;
        }
      `
    }
    return null
  }}

  div {
    padding: 0.875rem 1rem 0 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    p {
      width: 75px;
    }
  }
`
export const AmountDiv = styled.span`
  border-radius: 12px;
  line-height: 1;
  background-color: ${(props) => props.theme['gray-300']};
  padding: 0.12rem 0.5rem;
`
