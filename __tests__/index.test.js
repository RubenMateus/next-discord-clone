import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("render snapshot", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});