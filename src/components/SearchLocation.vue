<template>
  <form class="search-location" @submit="handleSubmit">
    <div class="search-input-container">
      <md-field>
        <label>Location</label>
        <md-input v-model="location" placeholder="city" :class="'dark-input'"></md-input>
      </md-field>
    </div>
    <button class="btn-search">
      <font-awesome-icon :icon="faSearch" class="search-icon" />
    </button>
  </form>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

export default {
  name: "SearchLocation",
  data: () => ({
    location: "",
    faSearch
  }),
  methods: {
    handleChange(value) {
      // const el = document.querySelector('.search-input')
      // el.value = value
    },
    handleSubmit(event) {
      if (event) event.preventDefault();
      //ingnore spacing
      const location = this.location.split(" ").join("");
      //check if only english letters
      const isValid = /^[a-zA-Z]+$/.test(location);

      if (!isValid) {
        swal({
          title: "Not valid city",
          text: "Make sure you only type english letters",
          icon: "error"
        });
        return;
      }

      this.$emit("submit-search", this.location);
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.search-location {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .dark-input {
    color: white !important;
    -webkit-text-fill-color: white !important;
  }
  .dark-input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white !important;
    opacity: 1 !important; /* Firefox */
  }

  .dark-input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white !important;
  }

  .dark-input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: white !important;
  }

  .search-input-container {
    width: 100%;
  }
  .btn-search {
    border: none;
    background: none;
  }
  .search-icon {
    font-size: 28px;
  }
}
</style>