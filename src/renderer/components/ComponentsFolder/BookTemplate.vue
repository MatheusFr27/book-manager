<!-- O que fazer nesta página?

- Estilização das páginas;

Tags deve ter um tamanho de letras padrão, ela servirá como comentários breves para o usuário ter uma noção de como está o livro.

Existirá Observações onde o usuário poderá escrever o que desejar sobre o livro.

- Deve conter até 3 tags;
- Não deve passar de 32 caracteres;
- Cor definida pelo usuário.

-->

<template>
  <div class="container-base">
    <div
      @click="$emit('send-data', book)"
      class="container-book-template"
      v-for="book in bookStructure"
      :key="book.id"
    >
      <div class="container-title-tag">
        <h1 title="Título">{{ book.title }}</h1>
        <div v-if="book.tags.length >= 1" class="container-tag">
          <div
            class="tag"
            v-for="(tag, i) in book.tags"
            :key="i"
            :style="{ backgroundColor: tag.color }"
          >
            <p>{{ tag.tagName }}</p>
          </div>
        </div>
      </div>

      <div class="container-title-tag">
        <p title="Gênero e autor do livro">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 16 20"
            xml:space="preserve"
            height="1.3em"
          >
            <path
              style="fill: rgb(0, 0, 0);"
              d="M9.6,20H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h1v7l2.5-1.5L8,7V0h6c1.1,0,2,0.9,2,2v11.5c-0.7-0.4-1.5-0.7-2.4-0.7
	c-2.6,0-4.7,2.1-4.7,4.7C8.9,18.4,9.2,19.3,9.6,20z M14.8,17.8v0.9c-0.1,0.1-0.3,0.2-0.6,0.4s-0.6,0.2-0.8,0.2
	c-0.3,0-0.6-0.1-0.9-0.2c-0.3-0.1-0.5-0.4-0.7-0.7c-0.2-0.3-0.2-0.7-0.2-1.1c0-0.4,0.1-0.7,0.2-1c0.1-0.2,0.2-0.3,0.3-0.5
	s0.3-0.3,0.5-0.4c0.2-0.1,0.5-0.1,0.8-0.1c0.3,0,0.5,0,0.7,0.1s0.4,0.2,0.5,0.4s0.2,0.3,0.3,0.6l0.6-0.2c-0.1-0.3-0.2-0.6-0.4-0.8
	s-0.4-0.4-0.7-0.5s-0.6-0.2-1-0.2c-0.5,0-0.9,0.1-1.3,0.3s-0.7,0.5-0.9,0.9s-0.3,0.9-0.3,1.4c0,0.5,0.1,0.9,0.3,1.3
	c0.2,0.4,0.5,0.7,0.9,0.9s0.8,0.3,1.3,0.3c0.4,0,0.7-0.1,1.1-0.2s0.7-0.3,1-0.6v-1.9l-2.1,0v0.6H14.8z"
            />
          </svg>
          {{ book.genre }} &ensp;
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 16 20"
            xml:space="preserve"
            height="1.3em"
          >
            <path
              style="fill: rgb(0, 0, 0);"
              d="M14,0H8v7L5.5,5.5L3,7V0H2C0.9,0,0,0.9,0,2v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V2C16,0.9,15.1,0,14,0 M10,10
	c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S8.9,10,10,10 M14,18H6v-1c0-1.3,2.7-2,4-2s4,0.7,4,2V18z"
            />
          </svg>
          {{ book.author }}
        </p>

        <p title="Data em que o livro foi publicado">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 18.7 30.1"
            xml:space="preserve"
            height="1.3em"
          >
            <path
              style="fill: rgb(0, 0, 0);"
              d="M15.1,30.1c1.1,0,2-0.9,2-2v-16c0-1.1-0.9-2-2-2h-6v7l-2.5-1.5l-2.5,1.5v-7h-1c-1.1,0-2,0.9-2,2v16c0,1.1,0.9,2,2,2H15.1z
	 M1.5,2.2L2.7,8c0.1,0.3-0.1,0.7-0.5,0.8L2,8.8C1.7,8.9,1.3,8.6,1.2,8.3L0,2.5c-0.1-0.3,0.1-0.7,0.5-0.8l0.2,0
	C1.1,1.6,1.4,1.8,1.5,2.2z M18.7,2.6l-1.8,5.7c-0.1,0.3-0.5,0.5-0.8,0.4l-0.2-0.1c-0.3-0.1-0.5-0.5-0.4-0.8l1.8-5.7
	c0.1-0.3,0.5-0.5,0.8-0.4l0.2,0.1C18.6,1.9,18.8,2.3,18.7,2.6z M9.8,0.6l0,5.9c0,0.3-0.3,0.6-0.6,0.6H9c-0.3,0-0.6-0.3-0.6-0.6
	l0-5.9C8.3,0.3,8.6,0,9,0h0.2C9.5,0,9.8,0.3,9.8,0.6z"
            />
          </svg>
          {{ book.launch }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookTemplate",
  props: {
    bookStructure: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped>
/* Container base */
.container-base,
.container-book-template .container-title-tag,
.container-book-template .container-title-tag .container-tag {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Container do template de livros */
.container-book-template {
  width: 100%;
}

.container-book-template:hover {
  background-color: rgb(233, 233, 233);
}

.container-book-template .container-title-tag,
.container-book-template .container-title-tag .container-tag {
  flex-direction: row;
  justify-content: space-between;

  margin: 0 0.5em;
}

.container-book-template .container-title-tag h1 {
  font-size: 18pt;
}

/* container que suporta a tag */
.container-book-template .container-title-tag .container-tag {
  justify-content: flex-end;
  width: 40%;
}

/* class Tag onde o elemento tag é renderizado */
.container-book-template .container-title-tag .container-tag .tag {
  margin: 0 0.2em;
  padding: 0.3em 0.2em;

  border-radius: 0px 0px 10px 10px;
}

.container-book-template .container-title-tag .container-tag .tag p {
  text-align: center;
  font-size: 11pt;
  margin: 0;
  padding: 0;
}
/* / */

/* / */
</style>
