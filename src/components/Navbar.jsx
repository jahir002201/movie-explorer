import { Link } from 'react-router'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-teal-800 text-white px-4 py-4 sm:py-6">
        <nav className="flex items-center justify-between">
            <div className="text-xl font-bold">Movie Explorer</div>
            <div className="flex space-x-4">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/movies" className="hover:text-gray-300">Movies</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar