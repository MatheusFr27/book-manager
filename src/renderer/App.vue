<template>
  <div id="app">
    <Header />

    <section class="central-display-container">
      <router-view></router-view>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "../renderer/components/ComponentsFolder/Header";
import Footer from "../renderer/components/ComponentsFolder/Footer";

export default {
  name: "book-manager",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
}

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

body {
  display: grid;
  grid-template-rows: 3rem auto 3rem;
}

header {
  grid-row: 1/2;
}

.central-display-container {
  grid-row: 2/3;
}

footer {
  grid-row: 3/4;
}
</style>
