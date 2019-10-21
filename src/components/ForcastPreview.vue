<template>
  <div>
    <h2>{{getDate}}:</h2>
    <p>{{minimum}} - {{maximum}}</p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "ForcastPreview",
  props: ["forcast"],
  created() {
    console.log("ForcastPreview props", this.forcast);
  },
  computed: {
    getDate() {
      return moment(this.forcast.Date).format("dddd");
    },
    minimum() {
      const { Minimum } = this.forcast.Temperature;
      return Minimum.Value + ' °' + Minimum.Unit;
    },
    maximum() {
      const { Maximum } = this.forcast.Temperature;
      return Maximum.Value + ' °' + Maximum.Unit;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>