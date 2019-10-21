<template>
  <div>
    <div class="theme-container">
      <h1>Change Theme {{theme}} </h1>
      <md-switch v-model="themeBool" @change="change" :class="darkTheme ? 'dark-checkbox md-primary': ' md-primary'"></md-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchComponent",
  data: () => ({
    value: null
  }),
  methods: {
    change() {
      this.$store.commit("changeTheme");
    }
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
    themeBool() {
      return (this.$store.getters.theme === 'light');
    },
    darkTheme() {
      return this.$store.getters.theme === 'dark';
    }
  }
};
</script>

<style lang="scss" scoped>
.theme-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  margin: 0 auto;
}
.md-switch {
  display: flex;
}

table {
  width: 100%;
  table-layout: fixed;

  th {
    text-align: left;
  }
}
</style>