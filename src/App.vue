<template>
  <div id="app">
    <div :id="theme? 'nav' : 'nav-dark'">
      <router-link to="/main">Main</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <div class="app-content" :class="!theme && 'dark'">
      <switch-theme ></switch-theme>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SwitchTheme from "./components/SwitchTheme.vue";
export default {
  name: "App",
  computed: {
    theme() {      
      return this.$store.getters.theme === "light";
    }
  },
  components: {
    SwitchTheme
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden
}

#nav-dark {
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid;
  background: #021921;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #007fe4;
    }
  }
}
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid;
  background: white;

  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #007fe4;
    }
  }
}

.dark {
  background: #1b1d27;
  color:white;
}

// .md-switch-container{
//   background-color:purple !important;
//   // background-color:rgba(242, 245, 255, 0.67)
// }
.md-switch.md-theme-default.dark-checkbox:not(.md-checked) .md-switch-container {
  // background-color:purple !important;
  background-color:rgba(242, 245, 255, 0.67)
}

::-webkit-scrollbar {
  display: none;
}
.app-content{
  overflow-y: scroll;
  height: 91vh;
}
</style>
