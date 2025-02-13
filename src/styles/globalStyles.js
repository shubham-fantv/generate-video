import { createGlobalStyle } from "styled-components";
import "./fonts.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color:#1E1E1E;
  }
`;

export default GlobalStyle;
