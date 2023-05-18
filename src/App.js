import { BsSun, BsMoonStars } from "react-icons/bs";
import { useCachedState } from "./lib/hooks";
import Converter from "./components/Converter";
import ThemeButton from "./components/ThemeButton";
import { Footer, Link } from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/global";

const options = [
  { title: "Binary [base-2]", value: 2 },
  { title: "Octal [base-8]", value: 8 },
  { title: "Decimal [base-10]", value: 10 },
  { title: "Hexadecimal [base-16]", value: 16 },
];

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
