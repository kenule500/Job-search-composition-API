import { shallowMount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;
const useRouteMock = useRoute as jest.Mock;

import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import { useRoute } from "vue-router";

describe("JobFilterSidebar", () => {
  it("sets up panel for users to filter jobs by one or more criteria", () => {
    useStoreMock.mockReturnValue({ commit: jest.fn() });
    useRouteMock.mockReturnValue({
      query: {},
    });
    const wrapper = shallowMount(JobFiltersSidebar);
    expect(wrapper.exists()).toBe(true);
  });

  it("reads query parama to filter  initial jobby user", () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({ commit });
    useRouteMock.mockReturnValue({
      query: {
        role: "Vue",
      },
    });
    shallowMount(JobFiltersSidebar);
    expect(commit).toHaveBeenCalledWith("UPDATE_SKILLS_SEARCH_TERM", "Vue");
  });
});
