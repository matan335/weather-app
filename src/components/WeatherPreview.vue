<template>
  <section class="weather-preview">
    <div style="width:90%">
      <div class="weather-container">
        <h1>{{location.location.LocalizedName}}</h1>
        <h1 v-if="getDegreeUnit === 'C' ">{{location.weather[0].Temperature.Metric.Value}}℃</h1>
        <h1 v-else>{{location.weather[0].Temperature.Imperial.Value}}℉</h1>

      </div>
      <h1 style="font-size:40px;">{{location.weather[0].WeatherText}}</h1>
      <forcast-list v-if="!favorite" class="forcast-list" :data="location.forcast"></forcast-list>
    </div>
    <div class="favorite-btn-container">
      <font-awesome-icon
        :style="getIsFavorite? 
        { color: 'red',cursor: 'pointer' } 
        : {cursor:'pointer'}"
        :icon="faHeart"
        class="search-icon"
        @click="toggleFavorite"
      />
    </div>
  </section>
</template>

<script>
import ForcastList from "./ForcastList.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "WeatherPreview",
  props: ["location", "favorite"],
  data: () => ({ faHeart }),
  computed: {
    getDegreeUnit() {
      return this.$store.getters.getDegreeUnit;
    },
    getIsFavorite() {
      const key = this.location.location.Key;
      return this.$store.getters.getIsFavorite(key);
    }
  },
  methods: {
    toggleFavorite() {
      const payload = { location: this.location };
      this.$store.commit({ type: "toggleFavorite", payload });
    }
  },
  components: {
    ForcastList,
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.weather-preview {
  border: 1px solid;
  width: 90%;
  margin: 20px auto;
  border-radius: 3px;
  display: flex;
  padding: 20px;
  .favorite-btn-container {
    width: 10%;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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