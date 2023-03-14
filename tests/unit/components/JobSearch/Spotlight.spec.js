import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import Spotlight from "@/components/JobSearch/Spotlight.vue";

describe("Spotlight", () => {
  const mockSpotlightResponse = (data = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          img: "some image",
          title: "some titl",
          description: "some description",
          ...data,
        },
      ],
    });
  };
  it("provide img component to parent component", async () => {
    const data = { img: "some image" };
    mockSpotlightResponse({ data });

    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps"> 
        <h1>{{ slotProps.img }}</h1>
        </template>`,
      },
    });

    await flushPromises();
    expect(wrapper.text()).toMatch("some image");
  });

  it("provide title component to parent component", async () => {
    const data = { title: "some title" };
    mockSpotlightResponse({ data });

    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps"> 
        <h1>{{ slotProps.title }}</h1>
        </template>`,
      },
    });

    await flushPromises();
    expect(wrapper.text()).toMatch("some title");
  });

  it("provide description component to parent component", async () => {
    const data = { description: "some description" };
    mockSpotlightResponse({ data });

    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps"> 
        <h1>{{ slotProps.description }}</h1>
        </template>`,
      },
    });

    await flushPromises();
    expect(wrapper.text()).toMatch("some description");
  });
});
