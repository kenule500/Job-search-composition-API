import { GlobalState } from "@/store/types";

const state = (): GlobalState => ({
  isLoggedIn: false,
  jobs: [],
  degrees: [],
  selectedOrganizations: [],
  selectedJobTypes: [],
  selectedDegrees: [],
});

export default state;
