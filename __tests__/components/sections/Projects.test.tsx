import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Projects } from "@/components/sections/Projects";
import { projects } from "@/lib/constants";

describe("Projects", () => {
  it("renders the section title", () => {
    const { getByRole } = render(<Projects />);
    expect(getByRole("heading", { level: 2, name: /Featured Projects/i })).toBeInTheDocument();
  });

  it("renders all projects from constants", () => {
    const { getByText } = render(<Projects />);
    projects.forEach((project) => {
      expect(getByText(project.title)).toBeInTheDocument();
      expect(getByText(project.description)).toBeInTheDocument();
    });
  });

  it("renders project tags", () => {
    const { getByText } = render(<Projects />);
    // Just check the first tag of the first project
    if (projects.length > 0 && projects[0].tags.length > 0) {
      expect(getByText(projects[0].tags[0])).toBeInTheDocument();
    }
  });
});
