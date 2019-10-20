<template>
  <section>
    <switch-component></switch-component>
    <div v-for="(location, i) in locations" :key="i">
      <weather-preview :location="location"></weather-preview>
    </div>
  </section>
</template>

<script>
import WeatherPreview from './WeatherPreview.vue'
import SwitchComponent from './Switch.vue'

export default {
  name: "WeatherList",
  props: ["locations"],
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