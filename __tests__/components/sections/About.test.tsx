import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { About } from "@/components/sections/About";
import { personalInfo } from "@/lib/constants";

describe("About", () => {
  it("renders the terminal window headers", () => {
    const { getByText } = render(<About />);
    expect(getByText("Terminal - nitin@portfolio")).toBeInTheDocument();
  });

  it("renders the prompt and command", () => {
    const { getByText } = render(<About />);
    expect(getByText(/cat about\.txt/i)).toBeInTheDocument();
  });

  it("renders the about content from constants", () => {
    const { getByText } = render(<About />);
    const firstParagraph = personalInfo.bio.split("\n")[0];
    expect(getByText(firstParagraph, { exact: false })).toBeInTheDocument();
  });
});
