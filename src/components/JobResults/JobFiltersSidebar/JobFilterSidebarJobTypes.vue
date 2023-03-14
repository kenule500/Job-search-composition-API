<!-- <template>
  <Accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap flex-row">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobType"
              v-model="selectedJobType"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              :data-test="jobType"
              @change="selectedJobTypes"
            />
            <label :for="jobType" data-test="job-type">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useUniqueJobTypes } from "@/store/composables";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

export default {
  name: "JobFilterSidebarJobTypes",
  components: {
    Accordion,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const selectedJobType = ref([]);
    const uniqueJobTypes = useUniqueJobTypes();

    const selectedJobTypes = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobType.value);
      router.push({ name: "jobResults" });
    };
    return {
      selectedJobType,
      uniqueJobTypes,
      selectedJobTypes,
    };
  },
};
</script>

<style scoped></style> -->
