<template>
  <footer>
    <!-- Container da internet e BD -->
    <div class="container-bd-i">
      <!-- Internet -->
      <div class="container-bd-i">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 23.3 18.5"
          xml:space="preserve"
          height="1em"
          v-if="iConnection"
        >
          <path
            style="fill: #00eb0c"
            d="M11.6,0C7.4,0,3.3,1.4,0,4c4,5.1,7.5,9.4,11.6,14.5C15.7,13.4,19.9,8.2,23.3,4C19.9,1.4,15.8,0,11.6,0z"
          />
        </svg>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 23.3 20.1"
          xml:space="preserve"
          height="1em"
          v-else
        >
          <path
            style="fill: #fa2419"
            d="M2.9,0L1.6,1.3l2.1,2C2.4,3.9,1.1,4.7,0,5.6c4,5.1,11.6,14.5,11.6,14.5l3.9-4.9l3.3,3.3l1.3-1.3 M11.6,1.6
	c-1.4,0-2.8,0.2-4.1,0.5l10.3,10.3c1.8-2.3,3.9-4.8,5.5-6.8C19.9,3,15.8,1.6,11.6,1.6z"
          />
        </svg>
        <p
          :style="iConnection ? 'color: #00eb0c' : 'color: #fa2419'"
          class="class-p-database"
        >
          {{ internetConnection }}
        </p>
      </div>
      <!-- Banco de dados -->
      <div class="container-bd-i">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 16 18"
          xml:space="preserve"
          height="1em"
        >
          <path
            style="fill: #fc7826"
            d="M8,0C3.6,0,0,1.8,0,4s3.6,4,8,4s8-1.8,8-4S12.4,0,8,0 M0,6v3c0,2.2,3.6,4,8,4s8-1.8,8-4V6c0,2.2-3.6,4-8,4S0,8.2,0,6 M0,11
	v3c0,2.2,3.6,4,8,4s8-1.8,8-4v-3c0,2.2-3.6,4-8,4S0,13.2,0,11z"
          />
        </svg>
        <p style="color: #fc7826;" class="class-p-database">
          Banco de dados funcionando.
        </p>
      </div>
    </div>

    <p class="class-version">Versão: {{ versionApplication }}</p>
  </footer>
</template>

<script>
import pkg from "../../../../package.json";

export default {
  name: "Footer",
  data: () => ({
    iConnection: null,
    versionApplication: pkg.version,
  }),
  computed: {
    internetConnection: function() {
      if (navigator.onLine) {
        this.iConnection = true;
        console.log("Online");
        return "Conectado a internet.";
      } else {
        this.iConnection = false;
        console.log("Offline");
        return "Desconectado a internet.";
      }
    },
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 2em;

  background-color: #282828;

  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

footer,
.container-bd-i {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container-bd-i {
  margin: 0.2em 0.7em;
}

.container-bd-i .class-p-database {
  padding: 0;
  margin: 0 0.3em;
}

.class-version {
  margin: 0 2em;
  color: white;
}
</style>
