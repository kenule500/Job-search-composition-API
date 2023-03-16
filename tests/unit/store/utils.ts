import { Degree, Job } from "@/api/types";
import state from "@/store/state";
import { GlobalState } from "@/store/types";
import { config } from "@fortawesome/fontawesome-svg-core";

export const createState = (config: Partial<GlobalState> = {}): GlobalState => {
  const intinialStat = state();
  return { ...intinialStat, ...config };
};

export const createDegree = (config: Partial<Degree> = {}): Degree => ({
  id: 1,
  degree: "Bachelor's",
  ...config,
});

export const createJob = (config: Partial<Job> = {}): Job => ({
  id: 1,
  title: "Angular Developer",
  organization: "Vue and Me",
  degree: "Master's",
  jobType: "Intern",
  locations: ["Lisbon"],
  minimumQualifications: [],
  preferredQualifications: [],
  description: [],
  dateAdded: "2021-07-04",
  ...config,
});
