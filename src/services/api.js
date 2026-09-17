const API_URL = "https://api.tvmaze.com";
// try catch use
export const moviesList = async () => {
  const response = await fetch(`${API_URL}/shows`);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return response.json();
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${API_URL}/search/shows?q=${query}`
  );

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }

  const data = await response.json();
  //   console.log("Search results:", data);
  const shows = data.map((item) => item.show);
  //   console.log("Mapped shows:", shows);
  return shows;
};

export const movieDetails = async (id) => {
  const response = await fetch(`${API_URL}/shows/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return response.json();
};