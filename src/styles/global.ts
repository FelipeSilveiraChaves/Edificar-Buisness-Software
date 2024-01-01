import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  input:focus,  button:focus{ 
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['blue-400']};
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }

  body, button, input, tr, th, textarea{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  /* Estilização das barras de rolagem para navegadores WebKit (Google Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme['gray-200']}; ; 
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-300']}; 
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['gray-450']};
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
}
`
