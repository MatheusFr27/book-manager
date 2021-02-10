<template>
  <section class="container-base">
    <div class="container-logo-title">
      <img
        class="logo"
        src="../assets/Icons/Logo-book-manager.svg"
        alt="Logo do Gerenciador de Livros"
      />
    </div>

    <div class="container-noticies">
      Aqui será abordado noticias e o que pretende para o futuro do projeto.
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
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
  margin-top: 5em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: black 3px solid;

  animation: 1.5s VisibleLogo forwards;
}

.container-logo-title .logo {
  height: 10em;
  padding: 1em 2em;

  animation: 4s VisibleLogo forwards;
}

/* css dos botões */
.container-noticies {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 10em;

  border: black 1px solid;
}

/* / */

@keyframes VisibleLogo {
  0% {
    opacity: 0;
    position: relative;
    top: 3em;
  }

  100% {
    opacity: 100%;
    position: relative;
    top: 0;
  }
}
</style>
