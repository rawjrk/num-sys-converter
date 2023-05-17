import Converter from "./components/Converter";
import { Footer, Link } from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
import GlobalStyles from "./styles/global";

const options = [
  { title: "Binary [base-2]", value: 2 },
  { title: "Octal [base-8]", value: 8 },
  { title: "Decimal [base-10]", value: 10 },
  { title: "Hexadecimal [base-16]", value: 16 },
];

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <Converter options={options} />
      <Footer>
        rawjrk &bull; <Link href="https://github.com/rawjrk">github</Link>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
