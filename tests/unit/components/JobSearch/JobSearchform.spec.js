import { mount } from "@vue/test-utils";
import { useRouter } from "vue-router";
jest.mock("vue-router");

import JobSearchForm from "@/components/JobSearch/JobSearchForm";

describe("JobsearchForm", () => {
  describe("when users submit form", () => {
    it("it direct users to job result page with user's parameters", async () => {
      const push = jest.fn();
      useRouter.mockReturnValue({
        push,
      });

      const wrapper = mount(JobSearchForm, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("Vue dev");

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("PH");

      const form = wrapper.find("form");
      await form.trigger("submit");

      expect(push).toHaveBeenCalledWith({
        name: "jobResults",
        query: {
          role: "Vue dev",
          location: "PH",
        },
      });
    });
  });
});
