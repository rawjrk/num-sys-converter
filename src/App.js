import { BsSun, BsMoonStars } from "react-icons/bs";
import { useCachedState } from "./lib/hooks";
import Converter from "./components/Converter";
import ThemeButton from "./components/ThemeButton";
import { Footer, Link } from "./components/Footer";
import { ThemeProvider } from "styled-components";
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
