<template>
  <section>
    <switch-component></switch-component>
    <div v-for="(location, i) in locations" :key="i">
      <weather-preview :location="location" :favorite="favorite"></weather-preview>
    </div>
  </section>
</template>

<script>
import WeatherPreview from './WeatherPreview.vue'
import SwitchComponent from './SwitchComponent.vue'

export default {
  name: "WeatherList",
  props: ["locations", "favorite"],
  created(){
    // console.log(JSON.stringify(this.locations));
    
  },
  components: {
    WeatherPreview,
    SwitchComponent
  }
};
</script>
<style lang="scss" scoped>
</style>