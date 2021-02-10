<template>
  <footer>
    <!-- botão de informações -->
    <router-link
      to="/information"
      title="Página de informações. (Alt + 5)"
      accesskey="5"
      class="button-information"
    >
      <p>Informações</p>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 20 20"
        xml:space="preserve"
        class="icon-information"
      >
        <path
          style="fill: #282828"
          d="M11,7H9V5h2 M11,15H9V9h2 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z"
        />
      </svg>
    </router-link>
    <p class="class-version">Versão: {{ versionApplication }}</p>
  </footer>
</template>

<script>
import pkg from "../../../../package.json";

export default {
  name: "Footer",
  data: () => ({
    versionApplication: pkg.version,
  }),
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 2em;

  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.button-information {
  margin: 0 0.5rem;
  padding: 0.1em 0.3em;

  background-color: #dddddd;

  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.button-information p {
  color: #282828;
}

.icon-information {
  height: 1.3em;
  width: 1.3em;
  margin-left: 0.5em;
}

.class-version {
  color: #282828;
  font-weight: 700;

  background-color: #dddddd;

  padding: 0.1em 0.3em;

  margin: 1em;
}
</style>
