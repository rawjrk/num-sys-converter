import styled from "styled-components";
import { Button } from "./Button";

const ThemeButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;

  svg {
    font-size: 1.6rem;
    margin: 0.1em;
    margin-bottom: 0;
  }
`;

export default ThemeButton;
