import { createGlobalStyle } from "styled-components";
import RobotoRegularTtf from "../assets/fonts/Roboto/Roboto-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url("${RobotoRegularTtf}") format("truetype"),
  }

  :root {
    --border: 1px solid #ccc;
    --bg-body: #eee;
    --bg-primary: #fff;
    --bg-secondary: #f3f3f3;
    --text-primary: #333;
    --text-secondary: #666;
    --active-link: #de0000;
  }

  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    background: var(--bg-body);
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
