<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>

    <template #Subtitle>
      <h2 class="w-full my-4 text-base font-normal">
        what is working here pls?
      </h2>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
export default {
  name: "TeamsVue",
  components: {
    HeaderContainer,
  },
};
</script>

<style scoped></style>
