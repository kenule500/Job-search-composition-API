import mockAxios from "jest-mock-axios";

import getDegrees from "@/api/getDegrees";

describe("get Degrees", () => {
  beforeEach(() => {
    mockAxios.get.mockResolvedValue({
      data: {
        id: 1,
        degree: "Master's",
      },
    });
  });

  it("fetches degress requirement", async () => {
    await getDegrees();
    expect(mockAxios.get).toHaveBeenCalledWith("http://myfakeapi.com/degrees");
  });

  it("extracts degress from response", async () => {
    const data = await getDegrees();
    expect(data).toEqual([
      {
        id: 1,
        degree: "Master's",
      },
    ]);
  });
});
