<!-- <template>
  <Accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap flex-row">
          <li
            v-for="organization in uniqueOrganizations"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              :data-test="organization"
              @change="selectedOrganization"
            />
            <label :for="organization" data-test="organization">{{
              organization
            }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
import { useStore } from "vuex";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
import { useRouter } from "vue-router";
import { useUniqueOrganizations } from "@/store/composables";
import { ref } from "vue";

export default {
  name: "JobFiltersSidebarOrganization",
  components: {
    Accordion,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const selectedOrganizations = ref([]);
    const uniqueOrganizations = useUniqueOrganizations();

    const selectedOrganization = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganizations.value);
      router.push({ name: "jobResults" });
    };
    return { uniqueOrganizations, selectedOrganizations, selectedOrganization };
  },
};
</script>

<style scoped></style> -->
