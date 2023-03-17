// import { mount } from "@vue/test-utils";
// import JobFilterSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarJobTypes.vue";
// import { useStore } from "vuex";
// import { useRouter } from "vue-router";
// import { useUniqueJobTypes } from "@/store/composables";
// jest.mock("vuex");
// jest.mock("vue-router");
// jest.mock("@/store/composables");

// describe("JobFiltersSidebarJobTypes", () => {
//   const createConfig = () => ({
//     global: {
//       stubs: {
//         FontAwesomeIcon: true,
//       },
//     },
//   });
//   it("renders unique list of job types fitering jobs", async () => {
//     useUniqueJobTypes.mockReturnValue(new Set(["Full-time", "Part-time"]));
//     const wrapper = mount(JobFilterSidebarJobTypes, createConfig());
//     const clicableArea = wrapper.find("[data-test='clickable']");
//     await clicableArea.trigger("click");
//     const jobTypeLabels = wrapper.findAll("[data-test='job-type']");

//     const jobTypes = jobTypeLabels.map((node) => node.text());
//     expect(jobTypes).toEqual(["Full-time", "Part-time"]);
//   });

//   describe("when user clicks checkbox", () => {
//     it("communicates that user has selected checkbox for job Type", async () => {
//       useUniqueJobTypes.mockReturnValue(new Set(["Full-time", "Part-time"]));
//       const commit = jest.fn();
//       useStore.mockReturnValue({ commit });
//       useRouter.mockReturnValue({ push: jest.fn() });
//       const wrapper = mount(JobFilterSidebarJobTypes, createConfig());
//       const clicableArea = wrapper.find("[data-test='clickable']");
//       await clicableArea.trigger("click");
//       const fullTimeInput = wrapper.find("[data-test='Full-time']");
//       await fullTimeInput.setChecked();

//       expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", [
//         "Full-time",
//       ]);
//     });

//     it("navigates users to results page to see fresh batch of users job", async () => {
//       useUniqueJobTypes.mockReturnValue(new Set(["Full-time", "Part-time"]));
//       useStore.mockReturnValue({ commit: jest.fn() });
//       const push = jest.fn();
//       useRouter.mockReturnValue({ push });
//       const wrapper = mount(JobFilterSidebarJobTypes, createConfig());
//       const clicableArea = wrapper.find("[data-test='clickable']");
//       await clicableArea.trigger("click");
//       const fullTimeInput = wrapper.find("[data-test='Full-time']");
//       await fullTimeInput.setChecked();

//       expect(push).toHaveBeenCalledWith({ name: "jobResults" });
//     });
//   });
// });
