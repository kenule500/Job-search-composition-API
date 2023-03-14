import { FETCH_JOBS, RECEIVE_JOBS } from "@/store/constants";

import getJobs from "@/api/getJobs";

const actions = {
  [FETCH_JOBS]: async (ctx) => {
    const jobListings = await getJobs();
    ctx.commit(RECEIVE_JOBS, jobListings);
  },
};
export default actions;
