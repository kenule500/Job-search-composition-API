import { shallowMount } from "@vue/test-utils";
import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarCheckboxGroup.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
jest.mock("vuex");
jest.mock("vue-router");

const useStoreMock = useStore as jest.Mock;
const useRouterMock = useRouter as jest.Mock;

describe("JobFilterSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    props: {
      uniqueValues: new Set(["valueA", "valueB"]),
      mutation: "some mutations",
      ...props,
    },
  });

  it("renders unique list of job types fitering jobs", async () => {
    useStoreMock.mockReturnValue({ commit: jest.fn(), subscribe: jest.fn() });
    const props = {
      uniqueValues: new Set(["valueA", "valueB"]),
    };
    const wrapper = shallowMount(
      JobFilterSidebarCheckboxGroup,
      createConfig(props)
    );
    const inputLabels = wrapper.findAll("[data-test='value']");

    const inputValues = inputLabels.map((node) => node.text());
    expect(inputValues).toEqual(["valueA", "valueB"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for value", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit, subscribe: jest.fn() });
      useRouterMock.mockReturnValue({ push: jest.fn() });
      const props = {
        mutation: "SOME_MUTATIONS",
        uniqueValues: new Set(["Full-time"]),
      };
      const wrapper = shallowMount(
        JobFilterSidebarCheckboxGroup,
        createConfig(props)
      );
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setValue();

      expect(commit).toHaveBeenCalledWith("SOME_MUTATIONS", ["Full-time"]);
    });

    it("navigates users to results page to see fresh batch of users job", async () => {
      const props = {
        uniqueValues: new Set(["Full-time"]),
      };
      useStoreMock.mockReturnValue({ commit: jest.fn(), subscribe: jest.fn() });
      const push = jest.fn();
      useRouterMock.mockReturnValue({ push });
      const wrapper = shallowMount(
        JobFilterSidebarCheckboxGroup,
        createConfig(props)
      );
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setValue();

      expect(push).toHaveBeenCalledWith({ name: "jobResults" });
    });
  });
});
