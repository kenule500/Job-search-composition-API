import { useStore } from "vuex";
import { computed } from "vue";
import {
  FILTERED_JOBS,
  FETCH_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  UNIQUE_DEGREES,
  FETCH_DEGREES,
} from "./constants";
import { Job } from "@/api/types";
import { key } from "@/store";

// GETTERS
export const useFilteredJobs = () => {
  const store = useStore(key);
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

export const useUniqueDegrees = () => {
  const store = useStore(key);
  return computed<string[]>(() => store.getters[UNIQUE_DEGREES]);
};

// ACTIONS

export const useFetchedJobsDispatch = () => {
  const store = useStore(key);
  store.dispatch(FETCH_JOBS);
};

export const useFetcheDegreeDispatch = () => {
  const store = useStore(key);
  store.dispatch(FETCH_DEGREES);
};
