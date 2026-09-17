import { MdClose } from "react-icons/md";

const MovieModal = ({ movie, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-teal-100 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-2xl text-white transition hover:bg-teal-600"
          aria-label="Close"
        >
          <MdClose />
        </button>

        {movie.image?.original ? (
          <img
            src={movie.image.original}
            alt={movie.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-teal-800 text-white">
            No Image
          </div>
        )}

        <div className="p-5 sm:p-7">
          <h2 className="text-2xl font-bold text-teal-950 sm:text-3xl">
            {movie.name}
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-800">
              ⭐ {movie.rating?.average || "N/A"}
            </span>

            <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-800">
              📅 {movie.premiered || "N/A"}
            </span>
          </div>

          {movie.genres?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-md bg-teal-700 px-3 py-1 text-sm text-white"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          {/* Overview */}
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-bold text-teal-900">
              Overview
            </h3>

            <p className="text-gray-600">
              {movie.summary.replace(/<[^>]*>/g, "") ||
                "No summary available."}
            </p>
          </div>

          {/* Close */}
          <div className="mt-7 flex justify-end">
            <button
              onClick={onClose}
              className="flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-2.5 font-semibold text-white transition hover:bg-teal-600"
            >
              <MdClose />
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;