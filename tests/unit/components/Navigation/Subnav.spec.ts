import { mount } from "@vue/test-utils";
import Subnav from "@/components/Navigation/Subnav.vue";

import { useFilteredJobs } from "@/store/composables";
jest.mock("@/store/composables");

import useConfirmRoute from "@/composables/useConfirmRoute";
jest.mock("@/composables/useConfirmRoute");

const useConfirmRouteMock = useConfirmRoute as jest.Mock;
const useFilteredMock = useFilteredJobs as jest.Mock;

describe("Subnav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("When user is on a job page", () => {
    it("displays jobs count", () => {
      useConfirmRouteMock.mockReturnValue(true);
      useFilteredMock.mockReturnValue([{ id: 1 }, { id: 2 }]);
      const wrapper = mount(Subnav, createConfig());

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("When user is not on a job page", () => {
    it("does no display jobs count", () => {
      useConfirmRouteMock.mockReturnValue(false);
      useFilteredMock.mockReturnValue([]);
      const wrapper = mount(Subnav, createConfig());

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
