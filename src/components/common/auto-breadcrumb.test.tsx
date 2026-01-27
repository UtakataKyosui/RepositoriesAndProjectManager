import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import AutoBreadcrumb from "./auto-breadcrumb";

// Mock next/navigation
const mockUsePathname = vi.fn();

vi.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

describe("AutoBreadcrumb", () => {
  beforeEach(() => {
    mockUsePathname.mockClear();
  });

  it("renders home breadcrumb for root path", () => {
    mockUsePathname.mockReturnValue("/");
    render(<AutoBreadcrumb />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders breadcrumbs for nested path", () => {
    mockUsePathname.mockReturnValue("/users/123/settings");
    render(<AutoBreadcrumb />);

    // Check for Home
    expect(screen.getByText("Home")).toBeInTheDocument();

    // Check for Users
    expect(screen.getByText("Users")).toBeInTheDocument();

    // Check for 123
    expect(screen.getByText("123")).toBeInTheDocument();

    // Check for Settings
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("formats segment names correctly", () => {
    // Test hyphen replacement and capitalization
    mockUsePathname.mockReturnValue("/my-awesome-page");
    render(<AutoBreadcrumb />);
    expect(screen.getByText("My Awesome Page")).toBeInTheDocument();
  });
});
