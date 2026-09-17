import { useEffect, useState } from "react";
import { moviesList, searchMovies, movieDetails } from "../services/api";
import MovieModal from "../components/MovieModal";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await moviesList();
        // console.log("Movies list:", data);
        setMovies(data);
      } catch (error) {
        console.error("Failed to load movies:", error);
      }
    };

    getMovies();
  }, []);

  const handleSearch = async () => {
    try {
      if (search.trim() === "") {
        const data = await moviesList();
        // console.log("Movies list:", data);
        setMovies(data);
        return;
      }

      const data = await searchMovies(search);
      // console.log("Search results:", data);
      setMovies(data);
    } catch (error) {
      console.error("Search failed:", error);
      setMovies([]);
    }
  };

  const handleDetailsClick = async (id) => {
    try {
      const data = await movieDetails(id);
      // console.log("Movie details:", data);
      setSelectedMovie(data);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    }
  };

  return (
    <>
    <section className="min-h-screen w-full bg-teal-200 px-4 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-3xl text-black font-bold">
            Explore Movies
          </h1>

          <p className="mt-2 text-gray-600">
            Search and discover your favorite shows.
          </p>
        </div>

        {/* Search */}
        <div className="mb-10 flex gap-3">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="w-full rounded-lg border border-teal-700 bg-white px-4 py-3 text-teal-800 outline-none placeholder:text-teal-700 focus:border-teal-700"
          />

          <button
            onClick={handleSearch}
            className="rounded-lg bg-teal-700 px-6 py-3 font-semibold hover:bg-teal-600"
          >
            Search
          </button>
        </div>

        {/* Movie List */}
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {movies.map((movie) => (
              <div
                key={movie.id}
                className="overflow-hidden rounded-lg bg-teal-900 shadow-lg"
              >

                {/* Movie Image */}
                {movie.image?.medium ? (
                  <img
                    src={movie.image.medium}
                    alt={movie.name}
                    className="h-80 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-80 items-center justify-center bg-teal-800 text-gray-500">
                    No Image
                  </div>
                )}

                {/* Movie card */}
                <div className="p-4">

                  <h2 className="truncate text-xl font-bold">
                    {movie.name}
                  </h2>

                  <div className="mt-3 flex justify-between text-sm text-gray-400">

                    <span>
                      ⭐ {movie.rating?.average || "N/A"}
                    </span>

                    <span>
                      {movie.premiered
                        ? movie.premiered.slice(0, 4)
                        : "N/A"}
                    </span>

                  </div>

                  <button
                    id={`details-${movie.id}`}
                    onClick={() => {
                      handleDetailsClick(movie.id);
                    }}
                    className="mt-4 w-full rounded-lg bg-teal-700 px-4 py-2 font-semibold hover:bg-teal-600"
                  >
                  {/* movie details id based modal show */}
                    See Details
                  </button>

                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="flex min-h-[50vh] w-full items-center justify-center">
            <p className="w-full text-center text-xl font-semibold text-gray-600">
              Not found any movies! Try searching for something else.
            </p>
          </div>
        )}

      </div>
    </section>

    {selectedMovie && (
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    )}
    </>
  );
};

export default Movies;