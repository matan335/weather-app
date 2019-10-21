<template>
  <div>
    <h2>{{getDate}}:</h2>
    <p>{{minimum}} - {{maximum}}</p>
  </div>
</template>

<script>
import moment from "moment";
import { fToC } from '../utiles/utiles.js'
export default {
  name: "ForcastPreview",
  props: ["forcast"],
  computed: {
    getDate() {
      return moment(this.forcast.Date).format("dddd");
    },
    
    minimum() {
      const { Minimum } = this.forcast.Temperature;
      if(this.getDegreeUnit === 'C') return fToC(Minimum.Value) + ' °' + this.getDegreeUnit
      return Minimum.Value + ' °' + this.getDegreeUnit;
    },
    maximum() {
      const { Maximum } = this.forcast.Temperature;
      if(this.getDegreeUnit === 'C') return fToC(Maximum.Value) + ' °' + this.getDegreeUnit
      return Maximum.Value + ' °' + this.getDegreeUnit;
    },
    getDegreeUnit(){
      return this.$store.getters.getDegreeUnit
    }
  }
};
</script>

<style lang="scss" scoped>
</style>