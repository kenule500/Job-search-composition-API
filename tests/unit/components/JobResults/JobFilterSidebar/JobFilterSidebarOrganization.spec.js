// import { mount } from "@vue/test-utils";
// import JobFiltersSidebarOrganization from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganization.vue";
// import { useStore } from "vuex";
// jest.mock("vuex");

// import { useRouter } from "vue-router";
// jest.mock("vue-router");

// import { useUniqueOrganizations } from "@/store/composables";
// jest.mock("@/store/composables");

// describe("JobFiltersSidebarOrganization", () => {
//   const createConfig = () => ({
//     global: {
//       stubs: {
//         FontAwesomeIcon: true,
//       },
//     },
//   });
//   it("renders unique list of organiztion fitering jobs", async () => {
//     useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));

//     const wrapper = mount(JobFiltersSidebarOrganization, createConfig());
//     const clicableArea = wrapper.find("[data-test='clickable']");
//     await clicableArea.trigger("click");
//     const organizationLabels = wrapper.findAll("[data-test='organization']");

//     const organizations = organizationLabels.map((node) => node.text());
//     expect(organizations).toEqual(["Google", "Amazon"]);
//   });

//   describe("when the user clicks the checkbox", () => {
//     it("communicates that user has selected checkbox for oganization", async () => {
//       useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
//       const commit = jest.fn();
//       useStore.mockReturnValue({ commit });
//       useRouter.mockReturnValue({ push: jest.fn() });
//       const wrapper = mount(JobFiltersSidebarOrganization, createConfig());
//       const clicableArea = wrapper.find("[data-test='clickable']");
//       await clicableArea.trigger("click");
//       const googleInput = wrapper.find("[data-test='Google']");
//       await googleInput.setChecked();

//       expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
//         "Google",
//       ]);
//     });

//     it("navigates the user to see fresh batch of filtered jobs", async () => {
//       useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
//       useStore.mockReturnValue({ commit: jest.fn() });
//       const push = jest.fn();
//       useRouter.mockReturnValue({ push });
//       const wrapper = mount(JobFiltersSidebarOrganization, createConfig());
//       const clicableArea = wrapper.find("[data-test='clickable']");
//       await clicableArea.trigger("click");
//       const googleInput = wrapper.find("[data-test='Google']");
//       await googleInput.setChecked();

//       expect(push).toHaveBeenCalledWith({ name: "jobResults" });
//     });
//   });
// });
