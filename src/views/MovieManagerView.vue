<template>
  <div class="movie-manager">
    <h1>Gerenciar Filmes</h1>
    <SearchBar @search-movies="filterMovies" />
    <MovieForm
      v-if="showForm"  
      @save-movie="addOrUpdateMovie"
      :movie-to-edit="movieToEdit"
      @cancel-edit="cancelEdit"
      @delete-movie="deleteMovie"
    />
    <div class="movies-section">
      <h2>Filmes</h2>
      <!-- Passa showEdit como true para exibir o botão de editar -->
      <MovieList :movies="filteredMovies" @edit-movie="prepareEdit" :showEdit="true" />
    </div>
  </div>
</template>

<script>
import { loadMovies, saveMovies } from "@/utils/storage";
import MovieForm from "@/components/MovieForm.vue";
import MovieList from "@/components/MovieList.vue";
import SearchBar from "@/components/SearchBar.vue";
import { fetchMovieDetails } from "@/services/omdbServices";

export default {
  components: { MovieForm, MovieList, SearchBar },
  data() {
    return {
      movies: loadMovies(), // Carrega os filmes do armazenamento local
      filteredMovies: [], // Lista de filmes filtrada
      movieToEdit: null, // Filme sendo editado
      showForm: true, // Controle da visibilidade do formulário
    };
  },
  methods: {
    async addOrUpdateMovie(movie) {
      // Tenta buscar detalhes do filme na OMDb
      const movieDetails = await fetchMovieDetails(movie.name);
      if (movieDetails) {
        movie.name = movieDetails.Title;
        movie.category = movieDetails.Genre;
        movie.year = movieDetails.Year;
        movie.image = movieDetails.Poster;
      }

      const index = this.movies.findIndex((m) => m.name === movie.name);
      if (index === -1) {
        this.movies.push(movie);
      } else {
        this.movies[index] = movie;
      }

      saveMovies(this.movies);
      this.updateFilteredMovies();
      this.cancelEdit();
    },

    updateFilteredMovies(query = "") {
      this.filteredMovies = query
        ? this.movies.filter((movie) =>
            movie.name.toLowerCase().includes(query.toLowerCase())
          )
        : [...this.movies];
    },

    filterMovies(query) {
      this.updateFilteredMovies(query);

      // Se houver pesquisa, esconde o formulário
      if (query) {
        this.showForm = false;
      } else {
        this.showForm = true; // Se não houver pesquisa, o formulário fica visível
      }
    },

    prepareEdit(movie) {
      this.movieToEdit = { ...movie };
      this.showForm = true; // Exibe o formulário ao clicar em editar
      window.scrollTo(0, 0);
    },

    cancelEdit() {
      this.movieToEdit = null;
    },

    deleteMovie(movie) {
      const index = this.movies.findIndex((m) => m.name === movie.name);
      if (index !== -1) {
        this.movies.splice(index, 1);
        saveMovies(this.movies);
        this.movieToEdit = null;
        this.updateFilteredMovies();
      }
    },
  },
  mounted() {
    this.updateFilteredMovies();
  },
};
</script>

<style scoped>
.movie-manager {
  padding: 20px;
}

.movies-section {
  margin-top: 40px;
}

.search-bar {
  margin-bottom: 20px;
}

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
}

.movie-poster {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
