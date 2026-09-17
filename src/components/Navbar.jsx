import { TbMovie } from "react-icons/tb";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-teal-700 bg-teal-800 px-4 py-3 text-white sm:py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-lg font-bold sm:text-2xl"
        >
          <TbMovie className="mr-2 text-4xl sm:text-5xl" />
          <span>Movie Explorer</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-3 sm:gap-6">
          < Link to="/" className="font-medium text-white transition hover:text-teal-200">
            Home
          </Link>

          <Link to="/movies" className="font-medium text-white transition hover:text-teal-200">
            Movies
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;