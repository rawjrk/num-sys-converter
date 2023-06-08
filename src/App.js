import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import * as themeStyles from "./styles/theme";
import GlobalStyles from "./styles/global";
import { ThemeToogler, themeNameSelector } from "./features/theme";
import { Footer, Link } from "./features/shared";
import { Converter } from "./features/converter";

function App() {
  const themeName = useSelector(themeNameSelector);
  const currentTheme = themeStyles[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeToogler />
      <Converter />
      <Footer>
        rawjrk &bull;{" "}
        <Link href="https://github.com/rawjrk/num-sys-converter">github</Link>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
