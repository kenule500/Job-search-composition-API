import { mount } from "@vue/test-utils";
import TextInput from "@/components/Shared/TextInput.vue";

describe("TestInput", () => {
  it("communicates that users have entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });

    const input = wrapper.find("input");
    input.setValue("N");
    input.setValue("NY");
    input.setValue("NYC");
    const message = wrapper.emitted()["update:modelValue"];
    expect(message).toEqual([["N"], ["NY"], ["NYC"]]);
  });
});
