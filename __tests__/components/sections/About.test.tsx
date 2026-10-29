import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { About } from "@/components/sections/About";

describe("About", () => {
  it("renders the terminal window headers", () => {
    const { getByText } = render(<About />);
    expect(getByText(/terminal - bash/i)).toBeInTheDocument();
  });

  it("renders the prompt and command", () => {
    const { getByText } = render(<About />);
    expect(getByText("whoami")).toBeInTheDocument();
  });

  it("renders the about content", () => {
    const { getAllByText } = render(<About />);
    expect(getAllByText(/Backend Engineering/i).length).toBeGreaterThan(0);
  });
});
