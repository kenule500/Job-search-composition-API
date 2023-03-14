<template>
  <section class="mb-16">
    <h1
      class="font-bold tracking-tighter text-8xl mb-14"
      data-set="action-phrase"
    >
      <span :class="actionClass">{{ action }} </span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-normal">Find your next job at NwiCareer</h2>
  </section>
</template>

<script>
import nextElementList from "@/helpers/nextElementList";
export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClass() {
      return {
        [this.action.toLocaleLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementList(actions, this.action);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f0ab00;
}

.code {
  color: #d93025;
}
</style>
