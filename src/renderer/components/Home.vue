<template>
  <section class="container-base">
    <div class="container-logo-title">
      <img
        class="logo"
        src="../assets/logo-book-manager-img.png"
        alt="Logo do Gerenciador de Livros"
      />
      <h1>Gerenciador de Livros</h1>
    </div>

    <div class="container-buttons">
      <!-- Botão de Ver Livros -->
      <router-link to="" class="button-menu">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 12 15"
          xml:space="preserve"
          class="class-icon"
        >
          <path
            style="fill: rgb(0, 0, 0);"
            d="M10.5,0h-9C0.7,0,0,0.7,0,1.5v12C0,14.3,0.7,15,1.5,15h9c0.8,0,1.5-0.7,1.5-1.5v-12C12,0.7,11.3,0,10.5,0z M1.5,1.5h3.8v6
	L3.4,6.4L1.5,7.5V1.5z"
          />
        </svg>
        <p>Livros</p>
      </router-link>
      <!-- Botão para gerenciar os livros -->
      <router-link to="" class="button-menu">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 19 20"
          xml:space="preserve"
          class="class-icon"
        >
          <path
            style="fill: rgb(0,0,0)"
            d="M15.4,8.7L7,17.1V20H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h1v7l2.5-1.5L8,7V0h6c1.1,0,2,0.9,2,2v6.3
	C15.8,8.4,15.6,8.6,15.4,8.7 M9,18v2h2l6.1-6.1l-2-2.1L9,18 M18.9,11.5l-1.3-1.3c-0.2-0.2-0.5-0.2-0.7,0l-1,1l2,2l1-1
	C19,12,19,11.7,18.9,11.5z"
          />
        </svg>
        <p>Gerenciar</p>
      </router-link>
      <!-- Botão de configuração -->
      <router-link to="" class="button-menu">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 14 14.4"
          xml:space="preserve"
          class="class-icon"
        >
          <path
            style="fill: rgb(0, 0, 0)"
            d="M12.4,7.9c0-0.2,0-0.5,0-0.7c0-0.2,0-0.5-0.1-0.7l1.5-1.2C14,5.2,14,5,14,4.9l-1.4-2.5c-0.1-0.2-0.3-0.2-0.4-0.2l-1.8,0.7
	C9.9,2.6,9.5,2.4,9.1,2.2L8.8,0.3C8.8,0.1,8.6,0,8.4,0H5.6C5.4,0,5.2,0.1,5.2,0.3L4.9,2.2C4.5,2.4,4.1,2.6,3.7,2.9L1.9,2.2
	c-0.2-0.1-0.4,0-0.4,0.2L0.1,4.9C0,5,0,5.2,0.1,5.3l1.5,1.2c0,0.2-0.1,0.5-0.1,0.7c0,0.2,0,0.5,0.1,0.7L0.1,9.1C0,9.2,0,9.4,0,9.5
	L1.5,12c0.1,0.2,0.3,0.2,0.4,0.2l1.8-0.7c0.4,0.3,0.8,0.5,1.2,0.7l0.3,1.9c0,0.2,0.2,0.3,0.4,0.3h2.9c0.2,0,0.3-0.1,0.4-0.3l0.3-1.9
	c0.4-0.2,0.8-0.4,1.2-0.7l1.8,0.7c0.2,0.1,0.4,0,0.4-0.2L14,9.5C14,9.4,14,9.2,13.9,9.1L12.4,7.9z M7,9.9c-1.5,0-2.7-1.2-2.7-2.7
	S5.5,4.5,7,4.5s2.7,1.2,2.7,2.7S8.5,9.9,7,9.9z"
          />
        </svg>
        <p>Configurações</p>
      </router-link>
      <!-- botão de informações -->
      <router-link to="/information" class="button-menu">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 20 20"
          xml:space="preserve"
          class="class-icon"
        >
          <path
            style="rgb(0, 0, 0)"
            d="M11,7H9V5h2 M11,15H9V9h2 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z"
          />
        </svg>
        <p>Informações</p>
      </router-link>
    </div>

    <Footer />
  </section>
</template>

<script>
import Footer from "./ComponentsFolder/Footer";

export default {
  name: "Home",
  components: {
    Footer,
  },
};
</script>

<style scoped>
/* Css do container base */
.container-base {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* estilo do container do logo e título */
.container-logo-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* animação do título */
.container-logo-title:hover h1 {
  animation: 2s animationH1 forwards;
}

.container-logo-title .logo {
  margin-top: 3em;
}

/* estilo do título */
.container-logo-title h1 {
  text-align: center;
  font-size: 2em;

  visibility: hidden;
}

/* css dos botões */
.container-buttons {
  margin-top: 5em;
}

.container-buttons,
.button-menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.container-buttons .button-menu {
  height: 7em;
  width: 7em;
  margin: 0 1em;

  border: none;
  background-color: white;

  text-decoration: none;
  flex-direction: column;
}

.button-menu:hover {
  animation: 0.5s shadowHover forwards;
}

.button-menu:hover p {
  animation: 0.5s visibilityElement forwards;
}

.button-menu .class-icon {
  height: 3em;
  padding: 0.5em;
}

.button-menu p {
  padding: 0;
  margin: 0;

  color: black;
  font-size: 14pt;

  visibility: hidden;
}
/* / */

@keyframes shadowHover {
  0% {
    box-shadow: 0;
  }

  100% {
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }
}

@keyframes visibilityElement {
  0% {
    visibility: hidden;
  }

  100% {
    visibility: visible;
  }
}

/* Animação do título */
@keyframes animationH1 {
  0% {
    transform: scale(0, 0);
    visibility: hidden;
    position: relative;
    bottom: 3em;
  }

  100% {
    transform: scale(1, 1);
    visibility: visible;
    position: relative;
    bottom: 0em;
  }
}
</style>
