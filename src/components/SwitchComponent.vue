<template>
  <div>
    <div class="degrees-container">
      <h1>Current degrees: °{{getDegreeUnit}}</h1>
      <md-switch :value="isDegreeUnitC" @change="change" :class="darkTheme ? 'dark-checkbox md-primary': ' md-primary'"></md-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchComponent",
  methods: {
    change() {
      this.$store.commit("toogleDegreeUnit");
    }
  },
  computed: {
    getDegreeUnit() {
      return this.$store.getters.getDegreeUnit;
    },
    isDegreeUnitC() {
      return this.$store.getters.getDegreeUnit === 'C';
    },
    darkTheme() {
      return this.$store.getters.theme === 'dark';
    }
  }
};
</script>

<style lang="scss" scoped>
.degrees-container {
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