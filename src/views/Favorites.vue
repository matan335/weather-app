<template>
  <section class="Favorites">
    <weather-list :locations="favorites" :favorite="true"></weather-list>
  </section>
</template>

<script>
import WeatherList from "@/components/WeatherList.vue";
export default {
  name: 'Favorites',
  computed:{
    favorites() {
      return this.$store.getters.favorites
    },
  },
  components: {
    WeatherList
  }
}
</script>
