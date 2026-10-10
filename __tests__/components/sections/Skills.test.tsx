import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skills } from "@/components/sections/Skills";
import { skills } from "@/lib/constants";

describe("Skills", () => {
  it("renders the section title", () => {
    const { getByText } = render(<Skills />);
    expect(getByText("Skills & Tools")).toBeInTheDocument();
  });

  it("renders all skill categories", () => {
    const { getByText } = render(<Skills />);
    skills.forEach((category) => {
      expect(getByText(category.label)).toBeInTheDocument();
    });
  });

  it("renders skill items", () => {
    const { getByText } = render(<Skills />);
    // Just check the first item of the first category
    if (skills.length > 0 && skills[0].items.length > 0) {
      expect(getByText(skills[0].items[0])).toBeInTheDocument();
    }
  });
});
