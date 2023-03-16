import { useRoute } from "vue-router";
jest.mock("vue-router");
import useConfirmRoute from "@/composables/useConfirmRoute";

const useRouteMock = useRoute as jest.Mock;

describe("useConfirmRoute", () => {
  it("determines if page route matches specific route", () => {
    useRouteMock.mockReturnValue({ name: "home" });
    const routeName = "home";
    const result = useConfirmRoute(routeName);
    expect(result.value).toBe(true);
  });
});
