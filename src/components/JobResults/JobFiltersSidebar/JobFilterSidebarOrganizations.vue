<template>
  <JobFilterSidebarCheckboxGroup
    :unique-values="uniqueOrganizations"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
    data-test="organizations-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarCheckboxGroup.vue";
import { useUniqueOrganizations } from "@/store/composables";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

export default defineComponent({
  name: "JobFilterSidebarOrganizations",
  components: {
    JobFilterSidebarCheckboxGroup,
  },
  setup() {
    const uniqueOrganizations = useUniqueOrganizations();
    return {
      uniqueOrganizations,
      ADD_SELECTED_ORGANIZATIONS,
    };
  },
});
</script>

<style scoped></style>
