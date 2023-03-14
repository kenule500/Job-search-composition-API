import nextElementList from "@/helpers/nextElementList";

describe("nextElementList", () => {
  it("it returns the next value in a list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const result = nextElementList(list, value);
    expect(result).toBe("D");
  });

  describe("when the element is at the end of the list", () => {
    it("it start all over again", () => {
      const list = ["A", "B", "C", "D", "E"];
      const value = "E";
      const result = nextElementList(list, value);
      expect(result).toBe("A");
    });
  });
});
