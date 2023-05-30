import { BsSun, BsMoonStars } from "react-icons/bs";
import { ThemeProvider } from "styled-components";
import { useCachedState } from "./lib/hooks";
import Converter from "./feature/converter/Converter";
import ThemeButton from "./feature/theme/ThemeButton";
import Footer from "./feature/footer/components/Footer";
import Link from "./feature/footer/components/Link";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/global";
import options from "./options.json";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useCachedState("darktheme", false);
  const toogleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ThemeButton onClick={toogleTheme}>
        {isDarkTheme ? <BsSun /> : <BsMoonStars />}
      </ThemeButton>
      <Converter options={options} />
      <Footer>
        rawjrk &bull; <Link href="https://github.com/rawjrk">github</Link>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
