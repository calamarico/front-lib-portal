import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto';
  }
  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;
