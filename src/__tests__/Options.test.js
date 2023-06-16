import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Options from "../features/shared/components/form/Options";

function TestOptions() {
  const options = [
    { title: "Opt. 1", value: 1 },
    { title: "Opt. 2", value: 2 },
    { title: "Opt. 3", value: 3 },
  ];
  return <Options options={options} />;
}

test("renders successfully", () => {
  render(<TestOptions />);

  expect(screen.getByText(/Opt. 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Opt. 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Opt. 3/i)).toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = renderer.create(<TestOptions />);
  expect(tree).toMatchSnapshot();
});
