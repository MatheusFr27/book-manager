<template>
  <section class="container-base">
    <Header />

    <h1>Informações</h1>
    <section class="container-informations">
      <!-- Lado das informações -->
      <div>
        <div class="items">
          <h2>Dependências Usadas</h2>
          <div class="item">
            <label class="name">Versão da aplicação:</label>
            <label class="value">{{ versionApplication }}</label>
          </div>
          <div class="item">
            <label class="name">Vue.js:</label>
            <label class="value">{{ vue }}</label>
          </div>
          <div class="item">
            <label class="name">Electron:</label>
            <label class="value">{{ electron }}</label>
          </div>
          <div class="item">
            <label class="name">Node:</label>
            <label class="value">{{ node }}</label>
          </div>
          <div class="item">
            <label class="name">Nedb:</label>
            <label class="value">{{ nedb }}</label>
          </div>
        </div>
        <h2>Desenvolvedor</h2>
        <div class="item">
          <label class="name">Autor:</label>
          <label class="value">Matheus Eduardo França</label>
        </div>
        <div class="item">
          <label class="name">Gmail:</label>
          <label class="value">matheusefranca1727@gmail.com</label>
        </div>
        <div class="item">
          <label class="name">Github:</label>
          <a href="https://github.com/MatheusFr27" target="_blank" class="value"
            >MatheusFr27</a
          >
        </div>
        <h2>Licença</h2>
        <div class="item">
          <a
            href="https://github.com/MatheusFr27/book-manager/blob/main/LICENSE"
            target="_blank"
            class="value"
            >MIT</a
          >
        </div>
      </div>
      <div>
        <p style="width: 250px;">
          <strong>Nota:</strong> O aplicativo está em desenvolvimento, qualquer
          dúvida/erro/bug envie um e-mail para o desenvolvedor.
        </p>
      </div>
    </section>
  </section>
</template>

<script>
import Header from "../components/ComponentsFolder/Header";
import pkg from "./../../../package.json";

export default {
  name: "InformationPage",
  components: {
    Header,
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
  methods: {
    openLink(linkExternal) {
      this.$electron.shell.openExternal(linkExternal);
      console.log("Fui clicado");
    },
  },
};
</script>

<style scoped>
.container-base {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: rgb(68, 68, 68);
  font-size: 23pt;
  font-weight: 700;
  margin-top: 2em;
}

h2 {
  color: #1e1e1e;
  font-weight: 600;
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

.container-informations {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
</style>
