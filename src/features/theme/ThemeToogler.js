import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { themeNameSelector, toogleTheme } from "./themeSlice";
import { Button } from "../shared";

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

function ThemeToogler({ showOnDarkTheme, showOnLightTheme }) {
  const themeName = useSelector(themeNameSelector);
  const dispatch = useDispatch();

  return (
    <ThemeButton onClick={() => dispatch(toogleTheme())}>
      {themeName === "darkTheme" ? showOnDarkTheme : showOnLightTheme}
    </ThemeButton>
  );
}

ThemeToogler.propTypes = {
  showOnDarkTheme: PropTypes.node,
  showOnLightTheme: PropTypes.node,
};

ThemeToogler.defaultProps = {
  showOnDarkTheme: "switch to light theme",
  showOnLightTheme: "switch to dark theme",
};

export default ThemeToogler;
