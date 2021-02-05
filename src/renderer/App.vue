<template>
  <div id="app">
    <router-view></router-view>

    <Footer />
  </div>
</template>

<script>
import Footer from "../renderer/components/ComponentsFolder/Footer";

export default {
  name: "book-manager",
  components: {
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap");

html,
body {
  font-size: 12pt;
  font-family: "Oswald", sans-serif;
  background-color: #fdfdfd;

  padding: 0;
  margin: 0;

  height: 100%;
  width: 100%;
}
</style>
