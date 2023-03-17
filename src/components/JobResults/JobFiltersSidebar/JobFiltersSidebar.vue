<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <JobFilterSidebarPrompt />

      <Accordion header="Skills and Qualifications">
        <JobFilterSidebarSkills />
      </Accordion>

      <Accordion header="Degrees">
        <JobFilterSidebarDegrees />
      </Accordion>

      <Accordion header="Job Types  ">
        <JobFilterSidebarJobTypes />
      </Accordion>

      <Accordion header="Organizations">
        <JobFilterSidebarOrganizations />
      </Accordion>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import JobFilterSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarJobTypes.vue";
import JobFilterSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarOrganizations.vue";
import JobFilterSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JObFilterSidebarDegrees.vue";
import Accordion from "@/components/Shared/Accordion.vue";
import JobFilterSidebarPrompt from "./JobFilterSidebarPrompt.vue";
import JobFilterSidebarSkills from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarSkills.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";

export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    JobFilterSidebarOrganizations,
    JobFilterSidebarDegrees,
    JobFilterSidebarJobTypes,
    Accordion,
    JobFilterSidebarPrompt,
    JobFilterSidebarSkills,
  },
  setup() {
    const parseSkillsSearchTerm = () => {
      const route = useRoute();
      const role = route.query.role || "";
      const store = useStore(key);
      store.commit(UPDATE_SKILLS_SEARCH_TERM, role);
    };
    onMounted(parseSkillsSearchTerm);
  },
});
</script>

<style scoped></style>
