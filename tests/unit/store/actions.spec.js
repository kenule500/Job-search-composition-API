import actions from "@/store/actions";
import getJobs from "@/api/getJobs";

describe("actions", () => {
  describe("fetch jobs", () => {
    beforeEach(() => {
      getJobs.mockResolvedValue([
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
  });
});
