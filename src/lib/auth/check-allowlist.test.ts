import { describe, expect, it } from "vitest";
import { shouldBlockLogin } from "./check-allowlist";

describe("shouldBlockLogin", () => {
  it("should return false if admin email is not set", () => {
    expect(shouldBlockLogin("any@example.com", "")).toBe(false);
    expect(shouldBlockLogin("any@example.com", undefined)).toBe(false);
  });

  it("should return false if email matches admin email", () => {
    expect(shouldBlockLogin("me@example.com", "me@example.com")).toBe(false);
  });

  it("should return true if email does not match admin email", () => {
    expect(shouldBlockLogin("other@example.com", "me@example.com")).toBe(true);
  });

  it("should be case insensitive", () => {
    expect(shouldBlockLogin("Me@Example.com", "me@example.com")).toBe(false);
  });
});
