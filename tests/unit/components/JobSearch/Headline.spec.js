import { mount } from "@vue/test-utils";
import { nextTick } from "vue";

import Headline from "@/components/JobSearch/Headline";

describe("Headline", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  it("displays introductory action verb", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-set='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action verb on a consistent interval", () => {
    mount(Headline);
    expect(setInterval).toHaveBeenCalled;
  });

  it("swaps action verb after first interval", async () => {
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-set='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("removes interval when component disappears", () => {
    jest.useFakeTimers();
    const clearIntervalSpy = jest.spyOn(window, "clearInterval");
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
    jest.useRealTimers();
  });
});
