import { createGlobalStyle } from "styled-components";
import RobotoRegularTtf from "../assets/fonts/Roboto/Roboto-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src:
      url("${RobotoRegularTtf}") format("truetype"),
  }

  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
  }

  #root {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
