import { useStore } from "vuex";
import { computed } from "vue";
import {
  FILTERED_JOBS,
  FETCH_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
} from "./constants";

// GETTERS
export const useFilteredJobs = () => {
  const store = useStore();
  return computed(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

// ACTIONS

export const useFetchedJobsDispatch = () => {
  const store = useStore();
  store.dispatch(FETCH_JOBS);
};
