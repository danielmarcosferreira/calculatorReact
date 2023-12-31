import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: linear-gradient(to right, #00EEFF, #00FF6C);
  }
`;

export default GlobalStyle;
