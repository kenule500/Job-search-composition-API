import actions from "@/store/actions";
import getJobs from "@/api/getJobs";
import getDegree from "@/api/getDegrees";

const getDegreeMock = getDegree as jest.Mock;
const getJobsMock = getJobs as jest.Mock;

describe("actions", () => {
  describe("fetch jobs", () => {
    beforeEach(() => {
      getJobsMock.mockResolvedValue([
        {
          id: 1,
          title: "software developer",
        },
      ]);
    });

    it("makes respect to fetch jobs", async () => {
      const ctx = { commit: jest.fn() };
      await actions.FETCH_JOBS(ctx);
      expect(getJobs).toHaveBeenCalled();
    });

    it("sends message to save received jobs in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_JOBS(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_JOBS", [
        {
          id: 1,
          title: "Software Developer",
        },
      ]);
    });
  });

  describe("fetch degrees", () => {
    beforeEach(() => {
      getDegreeMock.mockResolvedValue([
        {
          id: 1,
          degree: "Bachelor's",
        },
      ]);
    });

    it("makes respect to fetch degress", async () => {
      const ctx = { commit: jest.fn() };
      await actions.FETCH_DEGREES(ctx);
      expect(getDegree).toHaveBeenCalled();
    });

    it("sends message to save received degrees in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_DEGREES(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_DEGREES", [
        {
          id: 1,
          degree: "Bachelor's",
        },
      ]);
    });
  });
});
