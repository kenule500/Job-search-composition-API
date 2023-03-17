import { GlobalState } from "@/store/types";

const state = (): GlobalState => ({
  isLoggedIn: false,
  jobs: [],
  degrees: [],
  skillSearchTerm: "",
  selectedOrganizations: [],
  selectedJobTypes: [],
  selectedDegrees: [],
});

export default state;
