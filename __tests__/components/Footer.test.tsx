import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "@/components/layout/Footer";

describe("Footer", () => {
  it("renders social links", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("GitHub")).toBeInTheDocument();
    expect(getByText("LinkedIn")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
  });
});
