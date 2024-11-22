<template>
  <div class="movie-card">
    <img :src="movie.image" alt="Poster do Filme" />
    <h3>{{ movie.name }}</h3>
    <p>{{ movie.category }} ({{ movie.year }})</p>
    <button v-if="showEdit" @click="editMovie" class="edit-button">Editar</button>
  </div>
</template>

<script>
export default {
  props: ["movie", "showEdit"],

  methods: {
    editMovie() {
      this.$emit("edit-movie", this.movie);
      window.scrollTo(0, 0); // Rola para o topo da página quando o botão de editar for clicado
    },
  },
};
</script>

<style scoped>
.movie-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  display: inline-block;
  width: 200px;
  text-align: center;
  margin-bottom: 20px;
}

.movie-card img {
  width: 100%;
  height: auto;
}

.movie-card h3 {
  font-size: 1.2rem;
  margin-top: 10px;
}

.movie-card p {
  font-size: 1rem;
  color: #666;
}

.edit-button {
  padding: 8px 15px;
  font-size: 1rem;
  background-color: #007bff; /* Cor azul */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.edit-button:hover {
  background-color: #0056b3;
}

.edit-button:focus {
  outline: none;
}
</style>
