<script setup>
import { loadMovies } from "@/utils/storage"; // Carrega os filmes do sessionStorage
import MovieList from "@/components/MovieList.vue"; // Componente para exibir a lista de filmes
import { ref, onMounted } from "vue"; // Importando funções do Vue

const movies = ref([]); // Definir filmes como uma variável reativa

// Carregar filmes ao montar o componente
onMounted(() => {
  movies.value = loadMovies(); // Carrega filmes do sessionStorage
});
</script>

<template>
  <div class="home">
    <h1>Bem-vindo à IMDB-Vue</h1>
    <p>Gerencie seus filmes favoritos e confira dados da IMDb!</p>
    <router-link to="/movies" class="manage-link">Gerenciar Filmes</router-link>

    <!-- Exibe os filmes ou uma mensagem caso não haja filmes -->
    <div v-if="movies.length > 0">
      <!-- Passando showEdit como false para não exibir a opção de editar -->
      <div class="movies-container">
        <MovieList :movies="movies" :showEdit="false" />
      </div>
    </div>
    <div v-else class="no-movies">
      <p>Nenhum filme encontrado. Adicione alguns filmes na página de gerenciamento.</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

p {
  font-size: 1.2rem;
  color: #666;
}

.manage-link {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
}

.manage-link:hover {
  background-color: #0056b3;
}

h2 {
  margin-top: 30px;
  font-size: 2rem;
  color: #333;
}

.no-movies {
  font-size: 1.2rem;
  color: #999;
  margin-top: 20px;
}

.movies-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  padding-top: 30px; /* Adicionando padding separado */
}
</style>
