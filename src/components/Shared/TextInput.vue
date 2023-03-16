<template>
  <input
    :value="modelValue"
    type="text"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
    handleInput($e: Event) {
      const target = $e.target as HTMLInputElement;
      this.$emit("update:modelValue", target.value);
    },
  },
});
</script>

<style scoped></style>
