<template>
  <section class="weather-preview">
    <div class="weather-container">
      <h1>{{location.location.LocalizedName}}</h1>
      <h1 v-if="getDegreeUnit === 'C' ">{{location.weather[0].Temperature.Metric.Value}}℃</h1>
      <h1 v-else>{{location.weather[0].Temperature.Imperial.Value}}℉</h1>

      <h1>{{location.weather[0].WeatherText}}</h1>
    </div>
    <forcast-list class="forcast-list" :data="location.forcast"></forcast-list>
  </section>
</template>

<script>
import ForcastList from "./ForcastList.vue";

export default {
  name: "WeatherPreview",
  props: ["location"],
  created() {
    console.log("WeatherPreview props", this.location);
  },
  computed: {
    getDegreeUnit() {
      return this.$store.getters.getDegreeUnit;
    }
  },
  components: {
    ForcastList
  }
};
</script>

<style lang="scss" scoped>
.weather-preview {
  border: 1px solid;
  width: 90%;
  margin: 5px auto;
  border-radius: 3px;
  .weather-container {
    display: flex;
    justify-content: space-around;
  }
  .forcast-list {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>