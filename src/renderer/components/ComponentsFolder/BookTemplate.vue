<template>
  <div>
    <div v-for="book in bookStructure" :key="book.id">
      <h1>{{ book.title }}</h1>
      <p>{{ book.genre }} || {{ book.author }}</p>
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

<style></style>
