import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Input from "./Input";
import Select from "./Select";

import convert from "../lib/convert";

function Converter() {
  const options = [
    { title: "Binary", value: 2 },
    { title: "Octal", value: 8 },
    { title: "Decimal", value: 10 },
    { title: "Hex", value: 16 },
  ];

  const defaultFromBase = 10;
  const defaultToBase = 2;

  const [num, setNum] = useState();
  const [fromBase, setFromBase] = useState(defaultFromBase);
  const [toBase, setToBase] = useState(defaultToBase);
  const result = num ? convert(num, fromBase, toBase) : null;

  return (
    <Container>
      <Form className="border rounded p-3">
        <Input
          className="mb-2"
          label="Number"
          type="text"
          placeholder="Input here..."
          onChange={setNum}
        />

        <Select
          className="mb-2"
          label="From"
          options={options}
          defaultOption={defaultFromBase}
          ariaLabel="Select number base to convert from"
          onChange={setFromBase}
        />

        <Select
          className="mb-2"
          label="To"
          options={options}
          defaultOption={defaultToBase}
          ariaLabel="Select number base to convert to"
          onChange={setToBase}
        />

        <Input
          className="mb-1"
          label="Result"
          type="text"
          disabled
          value={result}
        />
      </Form>
    </Container>
  );
}

export default Converter;
