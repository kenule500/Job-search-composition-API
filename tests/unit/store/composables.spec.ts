import { useStore } from "vuex";
jest.mock("vuex");

const useStoreMOck = useStore as jest.Mock;

import {
  useFilteredJobs,
  useUniqueJobTypes,
  useUniqueOrganizations,
  useFetchedJobsDispatch,
  useUniqueDegrees,
} from "@/store/composables";

describe("composables", () => {
  describe("useFilteredJobs", () => {
    it("retreives jobs from the store", () => {
      useStoreMOck.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 2 }],
        },
      });
      const result = useFilteredJobs();
      expect(result.value).toEqual([{ id: 2 }]);
    });
  });

  describe("useUniqueJobTypes", () => {
    it("retreives unique job types from the store", () => {
      useStoreMOck.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time"]),
        },
      });
      const result = useUniqueJobTypes();
      expect(result.value).toEqual(new Set(["Full-time"]));
    });
  });

  describe("useUniqueOrganization", () => {
    it("retreives unique job organization from the store", () => {
      useStoreMOck.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Apple"]),
        },
      });
      const result = useUniqueOrganizations();
      expect(result.value).toEqual(new Set(["Apple"]));
    });
  });

  describe("useUniqueDegress", () => {
    it("retrieves unique degrees from stores", () => {
      useStoreMOck.mockReturnValue({
        getters: {
          UNIQUE_DEGREES: ["Ph.D"],
        },
      });

      const result = useUniqueDegrees();
      expect(result.value).toEqual(["Ph.D"]);
    });
  });

  describe("fetchedJobsDispatch", () => {
    it("sends call to fetch jobs from API", () => {
      const dispatch = jest.fn();
      useStoreMOck.mockReturnValue({
        dispatch,
      });
      useFetchedJobsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });

  describe("useFetchDegreesDispatch", () => {
    it("sends call to fetch degress from API", () => {
      const dispatch = jest.fn();
      useStoreMOck({
        dispatch,
      });
      useFetchedJobsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_DEGRESS");
    });
  });
});
