import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProbs = {}) => ({
    title: "vue developer",
    organization: "Air BnB",
    ...jobProbs,
  });
  const createConfig = (jobProbs) => ({
    props: {
      job: {
        ...jobProbs,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const jobProbs = createJobProps({ title: "vue programmer" });
    const wrapper = mount(JobListing, createConfig(jobProbs));
    expect(wrapper.text()).toMatch("vue programmer");
  });

  it("renders job organization", () => {
    const jobProbs = createJobProps({ organization: "Air BnB" });
    const wrapper = mount(JobListing, createConfig(jobProbs));
    expect(wrapper.text()).toMatch("Air BnB");
  });

  it("renders job location", () => {
    const jobProbs = createJobProps({
      locations: ["Port harcourt", "orlando"],
    });
    const wrapper = mount(JobListing, createConfig(jobProbs));
    expect(wrapper.text()).toContain("Port harcourt");
    expect(wrapper.text()).toContain("orlando");
  });

  it("renders job qualifications", () => {
    const jobProbs = createJobProps({
      minimumQualifications: ["HND", "School"],
    });
    const wrapper = mount(JobListing, createConfig(jobProbs));
    expect(wrapper.text()).toContain("HND");
    expect(wrapper.text()).toContain("School");
  });

  it("links to individual job's page", () => {
    const jobProbs = createJobProps({ id: 20 });
    const wrapper = mount(JobListing, createConfig(jobProbs));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProps = jobPageLink.props("to");
    expect(toProps).toBe("jobs/results/20");
  });
});
