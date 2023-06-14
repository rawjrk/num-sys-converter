import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Options } from "../features/shared";

const options = [
  { title: "Opt. 1", value: 1 },
  { title: "Opt. 2", value: 2 },
  { title: "Opt. 3", value: 3 },
];

describe("component Options", () => {
  it("should render successfully", () => {
    render(<Options options={options} />);

    expect(screen.getByText(/Opt. 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Opt. 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Opt. 3/i)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Options options={options} />);
    expect(tree).toMatchSnapshot();
  });
});
