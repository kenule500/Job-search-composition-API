import mockAxios from "jest-mock-axios";

import getJobs from "@/api/getJobs";
import { actions } from "@/store";

describe("get jobs", () => {
  beforeEach(() => {
    mockAxios.get.mockResolvedValue({
      data: {
        id: 1,
        title: "java dev",
      },
    });
  });

  it("fetches jobs that candidate can apply to", async () => {
    await getJobs();
    expect(mockAxios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });

  it("attracts jobs from response", async () => {
    const data = await getJobs();
    expect(data).toEqual([
      {
        id: 1,
        title: "java dev",
      },
    ]);
  });

  it("sends message to save received jobs in store", async () => {
    const commit = jest.fn();
    const ctx = { commit };
    await actions.FETCH_JOBS(ctx);
    expect(actions).toHaveBeenCalledWith("RECEIVE_JOBS", [
      {
        id: 1,
        title: "java dev",
      },
    ]);
  });
});
