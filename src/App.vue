<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <h1>IMDB-Vue</h1>
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/movies" class="nav-link">Gerenciar Filmes</RouterLink>
        <RouterLink to="/about" class="nav-link">Sobre</RouterLink>
      </nav>
    </header>
    <router-view /> <!-- Renderiza os componentes com base nas rotas -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Estilos globais */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4; /* Cor de fundo mais clara */
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
}

header {
  background-color: #007bff;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

nav {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.nav-link {
  color: white;
  margin: 0 10px;
  text-decoration: none;
  padding: 10px 20px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #0056b3; /* Altera a cor ao passar o mouse */
}

nav a.active {
  background-color: #0056b3; /* Destaca a página atual */
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}
</style>
