<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="" class="absolute left-0 -top-10">Role</label>
        <TextInput
          v-model="role"
          placeholder="Software engineer"
          data-test="role-input"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >

      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <TextInput
          v-model="location"
          placeholder="Port harcourt"
          data-test="location-input"
        />
      </div>
    </div>

    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script lang="ts">
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "../Shared/TextInput.vue";
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  setup() {
    const router = useRouter();
    const role = ref("");
    const location = ref("");

    const searchForJobs = () => {
      router.push({
        name: "jobResults",
        query: { role: role.value, location: location.value },
      });
    };

    return { role, location, searchForJobs };
  },
});
</script>

<style scoped></style>
