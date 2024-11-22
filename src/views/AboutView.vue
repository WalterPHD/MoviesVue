<template>
  <div class="about">
    <div class="about-content">
      <div class="about-image">
        <img src="https://clipartcraft.com/images/imdb-logo-app-2.png" alt="Imagem representativa" />
      </div>
      <div class="about-text">
        <h1>Sobre o IMDb-Vue</h1>
        <p>
          O IMDb-Vue é um projeto voltado para o gerenciamento de filmes, oferecendo funcionalidades
          como adicionar, editar, pesquisar e visualizar filmes favoritos. Com integração local
          e interface amigável, ele é ideal para quem deseja organizar sua coleção.
        </p>
        <p>
          Este projeto foi desenvolvido com Vue.js 3, Vue Router e armazenamento local
          (<i>Session Storage</i>). Além disso, há a possibilidade de verificar informações
          de filmes diretamente da IMDb.
        </p>
        <p>
          Colabore com este projeto ou veja mais detalhes no
          <a href="https://github.com/WalterPHD/MoviesVue" target="_blank">GitHub</a>.
        </p>
      </div>
    </div>
    <footer>
      <p>&copy; {{ currentYear }} IMDb-Vue. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(), // Ano dinâmico para o footer
    };
  },
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 20px auto;
  gap: 20px;
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.about-text {
  text-align: center;
}

.about h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;
}

.about p {
  font-size: 1.2rem;
  color: #666;
  margin: 10px 0;
}

.about a {
  color: #007bff;
  text-decoration: none;
}

.about a:hover {
  text-decoration: underline;
}

footer {
  text-align: center;
  margin-top: 20px;
  font-size: 1rem;
  color: #777;
}

@media (min-width: 1024px) {
  .about-content {
    flex-direction: row;
    text-align: left;
  }

  .about-image {
    flex: 1;
  }

  .about-text {
    flex: 2;
    padding-left: 20px;
  }
}
</style>
