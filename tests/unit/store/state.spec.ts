import state from "@/store/state";
import { useStore } from "vuex";

describe("state", () => {
  it("keeps track of whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });

  it("stores job listing", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });

  it("stores all degrees that job may require", () => {
    const startingState = state();
    expect(startingState.degrees).toEqual([]);
  });

  it("stores user's search terms for skills qualifications", () => {
    const startingState = state();
    expect(startingState.skillSearchTerm).toBe("");
  });
  it("stores an organization that the user would like to filter job by", () => {
    const startingState = state();
    expect(startingState.selectedOrganizations).toEqual([]);
  });

  it("stores job types that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedJobTypes).toEqual([]);
  });

  it("store degrees that the user will like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedDegrees).toEqual([]);
  });
});
