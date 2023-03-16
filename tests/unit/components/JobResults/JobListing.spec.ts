import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";
import { Job } from "@/api/types";
import { createJob } from "../../store/utils";

describe("JobListing", () => {
  const createConfig = (job: Job) => ({
    props: {
      job: {
        ...job,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const job = createJob({ title: "vue programmer" });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("vue programmer");
  });

  it("renders job organization", () => {
    const job = createJob({ organization: "Air BnB" });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Air BnB");
  });

  it("renders job location", () => {
    const job = createJob({
      locations: ["Port harcourt", "orlando"],
    });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toContain("Port harcourt");
    expect(wrapper.text()).toContain("orlando");
  });

  it("renders job qualifications", () => {
    const job = createJob({
      minimumQualifications: ["HND", "School"],
    });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("HND");
    expect(wrapper.text()).toMatch("School");
  });

  it("links to individual job's page", () => {
    const job = createJob({ id: 20 });
    const wrapper = mount(JobListing, createConfig(job));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProps = jobPageLink.props("to");
    expect(toProps).toBe("jobs/results/20");
  });
});
