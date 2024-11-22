const apiKey = "813dadeb"; // Substitua pelo seu API Key
const baseUrl = "https://www.omdbapi.com/";

// Função para buscar detalhes do filme
export async function fetchMovieDetails(titleOrId) {
  const query = titleOrId.startsWith("tt") ? `i=${titleOrId}` : `t=${titleOrId}`;
  const url = `${baseUrl}?${query}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      return data; // Retorna os dados do filme
    } else {
      console.error("Filme não encontrado:", data.Error);
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar dados do filme:", error);
    return null;
  }
}
