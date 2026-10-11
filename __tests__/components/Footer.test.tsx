import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "@/components/layout/Footer";

describe("Footer", () => {
  it("renders social links", () => {
    const { getByLabelText, getByRole } = render(<Footer />);
    expect(getByLabelText("GitHub")).toBeInTheDocument();
    expect(getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(getByRole("heading", { level: 2, name: /Innovate/i })).toBeInTheDocument();
  });
});
