<template>
  <div class="movie-list">
    <!-- Exibe cada item da lista de filmes -->
    <div v-for="movie in movies" :key="movie.name" class="movie-item">
      <!-- Exibe a imagem do filme -->
      <img :src="movie.image" alt="Poster" class="movie-poster" />
      <!-- Exibe o nome do filme -->
      <h3>{{ movie.name }}</h3>
      <!-- Exibe a categoria e o ano -->
      <p>{{ movie.category }}</p>
      <p>{{ movie.year }}</p>

      <!-- Botão de edição, visível quando showEdit for true -->
      <button v-if="showEdit" @click="editMovie(movie)">Editar</button>
    </div>
  </div>
</template>

<script>
export default {
  // Recebe as propriedades 'movies' e 'showEdit' do componente pai
  props: {
    movies: Array,     // Lista de filmes
    showEdit: Boolean, // Controla a visibilidade do botão de edição
  },
  methods: {
    // Método chamado ao clicar no botão de edição
    editMovie(movie) {
      this.$emit('edit-movie', movie); // Emite o evento 'edit-movie' com o filme
    },
  },
};
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.movie-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  max-width: 200px;
  min-width: 180px;  /* Garante que a largura mínima não se estique demais */
  background-color: #fff;
  box-sizing: border-box;
}

.movie-poster {
  width: 100%;
  height: auto;
  max-height: 250px;  /* Limita a altura máxima da imagem */
  object-fit: cover;  /* Garantir que a imagem cubra a área sem distorcer */
  border-radius: 5px;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
