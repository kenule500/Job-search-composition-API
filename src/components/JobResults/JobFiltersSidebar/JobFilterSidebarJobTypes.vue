<template>
  <JobFilterSidebarCheckboxGroup
    :unique-values="uniqueJobTypes"
    :mutation="ADD_SELECTED_JOB_TYPES"
    data-test="job-types-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarCheckboxGroup.vue";
import { useUniqueJobTypes } from "@/store/composables";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";
export default defineComponent({
  name: "JobFilterSidebarJobTypes",
  components: {
    JobFilterSidebarCheckboxGroup,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();

    return {
      ADD_SELECTED_JOB_TYPES,
      uniqueJobTypes,
    };
  },
});
</script>

<style scoped></style>
