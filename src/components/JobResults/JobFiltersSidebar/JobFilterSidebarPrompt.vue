<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
    <div class="flex items-center text-sm">
      <ActionButton
        text="Clear filters"
        type="secondary"
        data-test="clear-filters"
        @click="clearJobFilters"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "vuex";
import { key } from "@/store";
import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default defineComponent({
  name: "JobFilterSidebarPrompt",
  components: {
    ActionButton,
  },
  setup() {
    const store = useStore(key);
    const clearJobFilters = () => {
      store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
    };
    return {
      clearJobFilters,
    };
  },
});
</script>

<style scoped></style>
