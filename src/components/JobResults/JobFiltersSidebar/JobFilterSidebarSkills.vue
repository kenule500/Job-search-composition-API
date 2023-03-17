<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      data-test="skills-search-input"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
      placeholder="Computer programming, Finance degree"
    />
  </div>
</template>

<script lang="ts">
import { key } from "@/store";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "JobFilterSidebarSkills",
  setup() {
    const store = useStore(key);
    const skillsSearchTerm = computed({
      get() {
        return store.state.skillSearchTerm;
      },
      set(value) {
        store.commit(UPDATE_SKILLS_SEARCH_TERM, value);
      },
    });
    return { skillsSearchTerm };
  },
});
</script>

<style scoped></style>
