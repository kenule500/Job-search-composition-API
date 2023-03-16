<template>
  <Hero />
</template>

<script lang="ts">
import Hero from "@/components/JobSearch/Hero.vue"; // @ is an alias to /src
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Hero,
  },
});
</script>
