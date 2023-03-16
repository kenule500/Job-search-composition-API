import {
  FETCH_DEGREES,
  FETCH_JOBS,
  RECEIVE_DEGREES,
  RECEIVE_JOBS,
} from "@/store/constants";
import { Commit } from "vuex";

import getJobs from "@/api/getJobs";
import getDegree from "@/api/getDegrees";

interface Context {
  commit: Commit;
}

const actions = {
  [FETCH_JOBS]: async (ctx: Context) => {
    const jobListings = await getJobs();
    ctx.commit(RECEIVE_JOBS, jobListings);
  },
  [FETCH_DEGREES]: async (ctx: Context) => {
    const degrees = await getDegree();
    ctx.commit(RECEIVE_DEGREES, degrees);
  },
};
export default actions;
