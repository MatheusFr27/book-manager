<template>
  <section>
    <div class="title">Informações</div>
    <div class="items">
      <div class="item">
        <div class="name">Versão da aplicação:</div>
        <div class="value">{{ versionApplication }}</div>
      </div>
      <div class="item">
        <div class="name">Vue.js:</div>
        <div class="value">{{ vue }}</div>
      </div>
      <div class="item">
        <div class="name">Electron:</div>
        <div class="value">{{ electron }}</div>
      </div>
      <div class="item">
        <div class="name">Node:</div>
        <div class="value">{{ node }}</div>
      </div>
      <div class="item">
        <div class="name">Nedb:</div>
        <div class="value">{{ nedb }}</div>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script>
import Footer from "./ComponentsFolder/Footer";
import pkg from "./../../../package.json";

export default {
  name: "InformationPage",
  components: {
    Footer,
  },
  data() {
    return {
      electron: process.versions.electron,
      node: process.versions.node,
      vue: require("vue/package.json").version,
      nedb: require("nedb/package.json").version,
      versionApplication: pkg.version,
    };
  },
};
</script>

<style scoped>
.title {
  color: #888;
  font-size: 18px;
  font-weight: initial;
  letter-spacing: 0.25px;
  margin-top: 10px;
}

.items {
  margin-top: 8px;
}

.item {
  display: flex;
  margin-bottom: 6px;
}

.item .name {
  color: #6a6a6a;
  margin-right: 6px;
}

.item .value {
  color: #35495e;
  font-weight: bold;
}
</style>
