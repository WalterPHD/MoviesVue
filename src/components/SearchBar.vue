<template>
  <div>
    <input
      type="text"
      v-model="query"
      placeholder="Pesquisar filmes..."
      @input="search"
    />
  </div>
</template>

<script>
export default {
  data() {
    return { query: "" };
  },
  methods: {
    search() {
      this.$emit("search-movies", this.query);
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}
</style>
