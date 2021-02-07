<!-- O que fazer nesta página?

- Estilização das páginas;

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
        <h1>{{ book.title }}</h1>
        <div class="container-title-tag">
          <div
            v-for="(tag, i) in book.tags"
            :key="i"
            :style="{ backgroundColor: tag.color }"
          >
            {{ tag.tagName }}
          </div>
        </div>
      </div>

      <p>{{ book.genre }} || {{ book.author }}</p>

      <p>Lançado: {{ book.launch }}</p>
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
.container-book-template .container-title-tag {
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

.container-book-template .container-title-tag {
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0.5em;
}

.container-book-template .container-title-tag h1 {
  font-size: 18pt;
}

/* / */
</style>
