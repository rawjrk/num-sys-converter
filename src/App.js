import GlobalStyle from "./styles/GlobalStyle";
import Converter from "./components/Converter";
import { Footer, Link } from "./components/Footer";

const options = [
  { title: "Binary [base-2]", value: 2 },
  { title: "Octal [base-8]", value: 8 },
  { title: "Decimal [base-10]", value: 10 },
  { title: "Hexadecimal [base-16]", value: 16 },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Converter options={options} />
      <Footer>
        rawjrk &bull; <Link href="https://github.com/rawjrk">github</Link>
      </Footer>
    </>
  );
}

export default App;
