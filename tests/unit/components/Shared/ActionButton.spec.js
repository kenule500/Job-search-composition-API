import { mount } from "@vue/test-utils";

import ActionButton from "@/components/Shared/ActionButton";

describe("ActionButton", () => {
  it("randers text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "clicable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("clicable");
  });

  it("applies one of several style to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "clicable",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
