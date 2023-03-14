<template>
  <input
    :value="modelValue"
    type="text"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextIput",
  props: {
    placeholder: {
      required: false,
      type: String,
      default: "",
    },
    modelValue: {
      required: true,
      type: String,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped></style>
