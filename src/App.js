import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import * as themeStyles from "./styles/theme";
import GlobalStyles from "./styles/global";
import { ThemeToogler, themeNameSelector } from "./feature/appearance";
import { Footer, Link } from "./feature/shared";
import { Converter } from "./feature/converter";
import options from "./options.json";

function App() {
  const themeName = useSelector(themeNameSelector);
  const currentTheme = themeStyles[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeToogler />
      <Converter options={options} />
      <Footer>
        rawjrk &bull;{" "}
        <Link href="https://github.com/rawjrk/num-sys-converter">github</Link>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
