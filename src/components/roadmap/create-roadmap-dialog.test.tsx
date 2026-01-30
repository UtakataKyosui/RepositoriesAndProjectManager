import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CreateRoadmapDialog } from "./create-roadmap-dialog";

// import * as roadmapActions from "@/actions/roadmap"; // Need to mock this

// Mock the server action
const createRoadmapMock = vi.fn();
vi.mock("@/actions/roadmap", () => ({
  // biome-ignore lint/suspicious/noExplicitAny: Mock args
  createRoadmap: (...args: any[]) => createRoadmapMock(...args),
}));

describe("CreateRoadmapDialog", () => {
  it("should open dialog and submit form", async () => {
    render(<CreateRoadmapDialog />);

    // Open dialog
    const trigger = screen.getByText("Create Roadmap");
    fireEvent.click(trigger);

    // Fill form
    const titleInput = screen.getByLabelText("Title");
    fireEvent.change(titleInput, { target: { value: "New Roadmap" } });

    const descInput = screen.getByLabelText("Description");
    fireEvent.change(descInput, { target: { value: "Description" } });

    // Submit
    const submitBtn = screen.getByText("Create");
    fireEvent.click(submitBtn);

    // Verify action called
    await waitFor(() => {
      expect(createRoadmapMock).toHaveBeenCalledWith({
        title: "New Roadmap",
        description: "Description",
      });
    });
  });
});
