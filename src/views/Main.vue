<template>
  <section class="Main">
    <search-location @submit-search="submitSearch"></search-location>
    <div v-if="loading">loading</div>
    <weather-list v-else-if="locationData" :locations="locationData"></weather-list>
  </section>
</template>

<script>
import SearchLocation from "@/components/SearchLocation.vue";
import WeatherList from "@/components/WeatherList.vue";
import APIS from "../utiles/APIS.json";
const { WEATHER_KEY, AUTO_COMPLETE_API, WEATHER_API, FORECASTS_API } = APIS;
console.log('APIS',APIS);


export default {
  name: "Main",
  data: () => ({
    locationData: true,
    loading: false
  }),
  methods: {
    async submitSearch(locationStr) {
      this.loading = true;
      try {
        const locations = await this.getAutoCompleteLocation(locationStr);

        for (let i = 0; i < locations.length; i++) {
          const location = locations[i];
          const weather = await this.getWeatherFromLocation(location);
          const forcast = await this.getForcastFromLocation(location)
          locations[i] = { location, weather, forcast };
        }

        this.locationData = locations;
        this.loading = false;
      } catch (err) {
        console.log(err), (this.loading = false);
      }
    },
    async getAutoCompleteLocation(locationStr) {
      const url = `${AUTO_COMPLETE_API}?apikey=${WEATHER_KEY}&q=${locationStr}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    async getWeatherFromLocation(location) {
      const url = `${WEATHER_API}/${location.Key}?apikey=${WEATHER_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    async getForcastFromLocation(location) {
      const url = `${FORECASTS_API}/${location.Key}?apikey=${WEATHER_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }

  },
  components: {
    SearchLocation,
    WeatherList
  }
};
</script>
