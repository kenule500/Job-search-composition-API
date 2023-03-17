import { shallowMount } from "@vue/test-utils";
import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");
jest.mock("vuex");

import JobFilterSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarOrganizations.vue";

const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

describe("JobFilterSidebarOrganizations", () => {
  it("allows users to filter jobs by organizations", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));
    const wrapper = shallowMount(JobFilterSidebarOrganizations);

    const jobOrganizationFilter = wrapper.findComponent({
      name: "JobFilterSidebarCheckboxGroup",
    });

    const { uniqueValues, mutation } = jobOrganizationFilter.vm.$props;
    expect(uniqueValues).toEqual(new Set(["AirBnB"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
});
