import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import JobFilterSiderPrompt from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarPrompt.vue";

describe("JobFilterSidebarPrompt", () => {
  describe("when user clicks clear filters button", () => {
    it("sends message clear all of user's job search filters", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit });
      const wrapper = mount(JobFilterSiderPrompt);
      const button = wrapper.find("[data-test='clear-filters']");
      await button.trigger("click");
      expect(commit).toHaveBeenCalledWith("CLEAR_USER_JOB_FILTER_SELECTIONS");
    });
  });
});
