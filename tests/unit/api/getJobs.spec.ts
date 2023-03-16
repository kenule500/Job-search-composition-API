import mockAxios from "jest-mock-axios";

import getJobs from "@/api/getJobs";

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

  it("extracts jobs from response", async () => {
    const data = await getJobs();
    expect(data).toEqual([
      {
        id: 1,
        title: "java dev",
      },
    ]);
  });
});
