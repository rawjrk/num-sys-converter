import { useCachedState } from "../lib/hooks";
import convert from "../lib/convert";
import { Form, Label, Input, Select, Options } from "./Form";

function Converter() {
  const options = [
    { title: "Binary", value: 2 },
    { title: "Octal", value: 8 },
    { title: "Decimal", value: 10 },
    { title: "Hex", value: 16 },
  ];

  const [num, setNum] = useCachedState("number", 0);
  const [fromBase, setFromBase] = useCachedState("frombase", 10);
  const [toBase, setToBase] = useCachedState("tobase", 2);
  const result = num ? convert(num, fromBase, toBase) : "";

  return (
    <Form>
      <Label>
        Number
        <Input
          type="text"
          placeholder="Input here..."
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </Label>

      <Label>
        From
        <Select
          aria-label="Select number base to convert from"
          defaultValue={fromBase}
          onChange={(e) => setFromBase(e.target.value)}
        >
          <Options options={options} />
        </Select>
      </Label>

      <Label>
        To
        <Select
          aria-label="Select number base to convert to"
          defaultValue={toBase}
          onChange={(e) => setToBase(e.target.value)}
        >
          <Options options={options} />
        </Select>
      </Label>

      <Label>
        Result
        <Input
          type="text"
          disabled
          value={result}
          onChange={(e) => setNum(e.target.value)}
        />
      </Label>
    </Form>
  );
}

export default Converter;
