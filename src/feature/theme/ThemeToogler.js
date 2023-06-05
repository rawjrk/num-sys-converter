import styled from "styled-components";
import Button from "./components/Button";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { themeNameSelector, toogleTheme } from "./themeSlice";

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

function ThemeToogler() {
  const themeName = useSelector(themeNameSelector);
  const dispatch = useDispatch();

  return (
    <ThemeButton onClick={() => dispatch(toogleTheme())}>
      {themeName === "darkTheme" ? <BsSun /> : <BsMoonStars />}
    </ThemeButton>
  );
}

export default ThemeToogler;
