import { useSelector, useDispatch } from "react-redux";
import { Form, Label, Input, Select, Options } from "../shared";
import {
  setNumber,
  setFromBase,
  setToBase,
  selectConverter,
} from "./converterSlice";

import options from "./options.json";
import convert from "./convert";

function Converter() {
  const { number, fromBase, toBase } = useSelector(selectConverter);
  const dispatch = useDispatch();

  const onNumberChange = (e) => dispatch(setNumber(e.target.value));
  const onFromBaseChange = (e) => dispatch(setFromBase(Number(e.target.value)));
  const onToBaseChange = (e) => dispatch(setToBase(Number(e.target.value)));
  const result = number ? convert(number, fromBase, toBase) : "";

  return (
    <Form id="converter">
      <Label htmlFor="number">Number</Label>
      <Input
        id="number"
        type="text"
        placeholder="Input here..."
        value={number}
        onChange={onNumberChange}
      />

      <Label htmlFor="frombase">From</Label>
      <Select
        id="frombase"
        aria-label="Select number base to convert from"
        defaultValue={fromBase}
        onChange={onFromBaseChange}
      >
        <Options options={options} />
      </Select>

      <Label htmlFor="tobase">To</Label>
      <Select
        id="tobase"
        aria-label="Select number base to convert to"
        defaultValue={toBase}
        onChange={onToBaseChange}
      >
        <Options options={options} />
      </Select>

      <Label htmlFor="result">Result</Label>
      <Input id="result" type="text" disabled value={result} />
    </Form>
  );
}

export default Converter;
