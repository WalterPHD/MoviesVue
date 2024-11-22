<template>
  <form @submit.prevent="saveMovie" class="movie-form">
    <input type="text" v-model="movie.name" placeholder="Título do Filme" required />
    <input type="text" v-model="movie.category" placeholder="Categoria" />
    <input type="number" v-model="movie.year" placeholder="Ano" />
    <input type="url" v-model="movie.image" placeholder="URL da Imagem" />
    <button type="submit">{{ isEditing ? "Atualizar Filme" : "Adicionar Filme" }}</button>
    <button type="button" v-if="isEditing" @click="cancelEdit">Cancelar</button>
    <button type="button" v-if="isEditing" @click="deleteMovie">Apagar Filme</button>
  </form>
</template>

<script>
export default {
  props: {
    movieToEdit: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      movie: {
        name: "",
        category: "",
        year: "",
        image: "",
      },
    };
  },
  computed: {
    isEditing() {
      return !!this.movieToEdit;
    },
  },
  watch: {
    movieToEdit: {
      handler(newMovie) {
        if (newMovie) {
          this.movie = { ...newMovie };
        } else {
          this.resetForm();
        }
      },
      immediate: true,
    },
  },
  methods: {
    saveMovie() {
      this.$emit("save-movie", this.movie);
      this.resetForm();
    },
    cancelEdit() {
      this.$emit("cancel-edit");
      this.resetForm();
    },
    deleteMovie() {
      this.$emit("delete-movie", this.movie); // Emite evento para apagar o filme
      this.resetForm();
    },
    resetForm() {
      this.movie = { name: "", category: "", year: "", image: "" };
    },
  },
};
</script>

<style scoped>
.movie-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
.movie-form input {
  padding: 10px;
  font-size: 1rem;
}
.movie-form button {
  padding: 10px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.movie-form button:hover {
  background-color: #0056b3;
}
</style>
