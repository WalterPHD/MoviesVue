// Salva os filmes no sessionStorage
export const saveMovies = (movies) => {
  sessionStorage.setItem("movies", JSON.stringify(movies));
};

// Carrega os filmes do sessionStorage
export const loadMovies = () => {
  const data = sessionStorage.getItem("movies");
  return data ? JSON.parse(data) : [];  // Retorna um array vazio se não houver dados
};

// Apaga todos os filmes do sessionStorage
export const clearMovies = () => {
  sessionStorage.removeItem("movies");
};
