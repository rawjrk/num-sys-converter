import { createGlobalStyle } from "styled-components";
import RobotoRegularTtf from "../assets/fonts/Roboto/Roboto-Regular.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url("${RobotoRegularTtf}") format("truetype"),
  }

  :root {
    --border: 1px solid ${(props) => props.theme.colors.border};
  }

  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    background: ${(props) => props.theme.colors.body};
    color: ${(props) => props.theme.colors.font.primary};
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
`;
