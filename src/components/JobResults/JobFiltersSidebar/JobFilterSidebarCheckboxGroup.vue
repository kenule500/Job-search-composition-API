<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-wrap flex-row">
        <li v-for="value in uniqueValues" :key="value" class="w-1/2 h-8">
          <input
            :id="value"
            v-model="selectedValues"
            :value="value"
            type="checkbox"
            class="mr-3"
            :data-test="value"
            @change="selectValue"
          />
          <label :for="value" data-test="value">{{ value }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref, defineComponent, PropType } from "vue";
import { key } from "@/store";
import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";

export default defineComponent({
  name: "JobFilterSidebarCheckboxGroup",
  components: {},
  props: {
    uniqueValues: {
      type: [Array, Set] as PropType<string[] | Set<string>>,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore(key);
    const router = useRouter();
    const selectedValues = ref<string[]>([]);

    store.subscribe((mutations) => {
      if (mutations.type === CLEAR_USER_JOB_FILTER_SELECTIONS) {
        selectedValues.value = [];
      }
    });
    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "jobResults" });
    };
    return { selectedValues, selectValue };
  },
});
</script>

<style scoped></style>
