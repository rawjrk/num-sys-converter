import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { themeNameSelector } from "./feature/theme/themeSlice";
import * as themeStyles from "./styles/theme";
import GlobalStyles from "./styles/global";
import ThemeToogler from "./feature/theme/ThemeToogler";
import Footer from "./feature/footer/components/Footer";
import Link from "./feature/footer/components/Link";
import Converter from "./feature/converter/Converter";
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
        rawjrk &bull; <Link href="https://github.com/rawjrk">github</Link>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
