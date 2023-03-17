import { shallowMount } from "@vue/test-utils";
import { useUniqueDegrees } from "@/store/composables";
jest.mock("@/store/composables");
jest.mock("vuex");

import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";

const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

describe("JobFilterSidebarDegrees", () => {
  it("allows users to filter jobs by Degrees", () => {
    useUniqueDegreesMock.mockReturnValue(["Associate", "Bachelor's"]);
    const wrapper = shallowMount(JobFiltersSidebarDegrees);

    const jobDegreesFilter = wrapper.findComponent({
      name: "JobFilterSidebarCheckboxGroup",
    });

    const { uniqueValues, mutation } = jobDegreesFilter.vm.$props;
    expect(uniqueValues).toEqual(["Associate", "Bachelor's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
