import { useCachedState } from "../lib/hooks";
import convert from "../lib/convert";
import { Form, Label, Input, Select, Options } from "./Form";

function Converter({ options }) {
  const [num, setNum] = useCachedState("number", "");
  const [fromBase, setFromBase] = useCachedState("frombase", 10);
  const [toBase, setToBase] = useCachedState("tobase", 2);
  const result = num ? convert(num, fromBase, toBase) : "";

  return (
    <Form>
      <Label for="number">Number</Label>
      <Input
        id="number"
        type="text"
        placeholder="Input here..."
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <Label for="frombase">From</Label>
      <Select
        id="frombase"
        aria-label="Select number base to convert from"
        defaultValue={fromBase}
        onChange={(e) => setFromBase(e.target.value)}
      >
        <Options options={options} />
      </Select>

      <Label for="tobase">To</Label>
      <Select
        id="tobase"
        aria-label="Select number base to convert to"
        defaultValue={toBase}
        onChange={(e) => setToBase(e.target.value)}
      >
        <Options options={options} />
      </Select>

      <Label for="result">Result</Label>
      <Input
        id="result"
        type="text"
        disabled
        value={result}
        onChange={(e) => setNum(e.target.value)}
      />
    </Form>
  );
}

export default Converter;
