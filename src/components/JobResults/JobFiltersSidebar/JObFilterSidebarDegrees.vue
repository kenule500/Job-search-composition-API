<template>
  <JobFilterSidebarCheckboxGroup
    :unique-values="uniqueDegrees"
    :mutation="ADD_SELECTED_DEGREES"
    data-test="degrees-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarCheckboxGroup.vue";
import { ADD_SELECTED_DEGREES } from "@/store/constants";

import { useUniqueDegrees } from "@/store/composables";

export default defineComponent({
  name: "JobFilterSidebarDegrees",
  components: {
    JobFilterSidebarCheckboxGroup,
  },
  setup() {
    const uniqueDegrees = useUniqueDegrees();

    return {
      uniqueDegrees,
      ADD_SELECTED_DEGREES,
    };
  },
});
</script>

<style scoped></style>
