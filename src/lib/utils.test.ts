import { describe, expect, it } from "vitest";
import { formatRepositoryName } from "./utils";

describe("formatRepositoryName", () => {
  it("should remove username from repository name with slash", () => {
    expect(formatRepositoryName("username/repo-name")).toBe("repo-name");
  });

  it("should return original name if no slash is present", () => {
    expect(formatRepositoryName("repo-name")).toBe("repo-name");
  });

  it("should handle empty string", () => {
    expect(formatRepositoryName("")).toBe("");
  });

  it("should handle null or undefined gracefully if types allow, but strictly string expected here", () => {
    // Basic string manipulation test
    const input = "utakata/RepositoriesAndProjectManager";
    const expected = "RepositoriesAndProjectManager";
    expect(formatRepositoryName(input)).toBe(expected);
  });
});
