<template>
  <header>
    <div class="container-logo-nav">
      <router-link
        title="Voltar para a interface inicial. (Alt + 1)"
        accesskey="1"
        to="/"
      >
        <img
          src="../../assets/Icons/Logo-book-manager.svg"
          alt="Logo do aplicativo"
          class="logo"
        />
      </router-link>

      <nav>
        <ul>
          <li>
            <router-link title="Ver livros. (Alt + 2)" accesskey="2" to=""
              >Livros</router-link
            >
          </li>
          <li>
            <router-link title="Gerenciar livros. (Alt + 3)" accesskey="3" to=""
              >Gerenciar</router-link
            >
          </li>
        </ul>
      </nav>
    </div>

    <router-link title="Configurações. (Alt + 4)" accesskey="4" to=""
      ><svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 14 14.4"
        xml:space="preserve"
        class="class-config"
      >
        <path
          style="fill: rgb(250, 250, 250)"
          d="M12.4,7.9c0-0.2,0-0.5,0-0.7c0-0.2,0-0.5-0.1-0.7l1.5-1.2C14,5.2,14,5,14,4.9l-1.4-2.5c-0.1-0.2-0.3-0.2-0.4-0.2l-1.8,0.7
	C9.9,2.6,9.5,2.4,9.1,2.2L8.8,0.3C8.8,0.1,8.6,0,8.4,0H5.6C5.4,0,5.2,0.1,5.2,0.3L4.9,2.2C4.5,2.4,4.1,2.6,3.7,2.9L1.9,2.2
	c-0.2-0.1-0.4,0-0.4,0.2L0.1,4.9C0,5,0,5.2,0.1,5.3l1.5,1.2c0,0.2-0.1,0.5-0.1,0.7c0,0.2,0,0.5,0.1,0.7L0.1,9.1C0,9.2,0,9.4,0,9.5
	L1.5,12c0.1,0.2,0.3,0.2,0.4,0.2l1.8-0.7c0.4,0.3,0.8,0.5,1.2,0.7l0.3,1.9c0,0.2,0.2,0.3,0.4,0.3h2.9c0.2,0,0.3-0.1,0.4-0.3l0.3-1.9
	c0.4-0.2,0.8-0.4,1.2-0.7l1.8,0.7c0.2,0.1,0.4,0,0.4-0.2L14,9.5C14,9.4,14,9.2,13.9,9.1L12.4,7.9z M7,9.9c-1.5,0-2.7-1.2-2.7-2.7
	S5.5,4.5,7,4.5s2.7,1.2,2.7,2.7S8.5,9.9,7,9.9z"
        /></svg
    ></router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  width: 100%;
  height: 2.5em;

  background-color: #282828;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
}

.logo {
  height: 3em;
  margin: 0.5em 1em;

  border-radius: 50%;

  position: relative;
  top: 1em;

  animation: 0.5s borderLogo forwards;
}

.container-logo-nav,
nav,
nav ul {
  display: flex;
  flex-direction: row;

  height: 100%;
}

.container-logo-nav {
  height: auto;
  margin: 0;
  padding: 0;

  align-items: center;
}

nav ul {
  list-style-type: none;
  margin: 0;
}

nav ul li {
  text-align: center;
}

nav ul li:hover a,
.class-config:hover {
  background-color: rgb(59, 59, 59);
}

nav ul li a {
  margin: 0 0.5em;
  padding: 0.5em 0.5em;
  color: white;

  text-decoration: none;
}

.class-config {
  height: 1em;
  margin: 0 1em;

  padding: 0.9em 0.5em;
}

@keyframes borderLogo {
  0% {
  }

  100% {
    -webkit-box-shadow: 0px 0px 18px 0px rgba(138, 138, 138, 1);
    -moz-box-shadow: 0px 0px 18px 0px rgba(138, 138, 138, 1);
    box-shadow: 0px 0px 18px 0px rgba(138, 138, 138, 1);
  }
}
</style>
