import { shallowMount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");
const useStorMock = useStore as jest.Mock;

import JobFilterSidebarSkills from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarSkills.vue";

describe("JobFilterSidebarSkills", () => {
  it("populate search input from store", () => {
    useStorMock.mockReturnValue({
      state: {
        skillsSearchTerm: "Programmer",
      },
      commit: jest.fn(),
    });
    const wrapper = shallowMount(JobFilterSidebarSkills);
    const skillSearchInput = wrapper.find("[data-test='skills-search-input']");
    const inputElement = skillSearchInput.element as HTMLInputElement;
    expect(inputElement.value).toBe("Programmers");
  });

  it("tells store that user has entered skill search term", async () => {
    const commit = jest.fn();
    useStorMock.mockReturnValue({
      state: {
        skillsSearchTerm: "",
      },
      commit,
    });
    const wrapper = shallowMount(JobFilterSidebarSkills);
    const skillSearchInput = wrapper.find("[data-test='skills-search-input']");
    await skillSearchInput.setValue("Vue developer");
    expect(commit).toHaveBeenCalledWith(
      "UPDATE_SKILLS_SEARCH_TERM",
      "Vue developer"
    );
  });

  it("removes whitespace from user input", async () => {
    const commit = jest.fn();
    useStorMock.mockReturnValue({
      state: {
        skillsSearchTerm: "",
      },
      commit,
    });
    const wrapper = shallowMount(JobFilterSidebarSkills);
    const skillSearchInput = wrapper.find("[data-test='skills-search-input']");
    await skillSearchInput.setValue("    Vue developer   ");
    expect(commit).toHaveBeenCalledWith(
      "UPDATE_SKILLS_SEARCH_TERM",
      "Vue developer"
    );
  });
});
