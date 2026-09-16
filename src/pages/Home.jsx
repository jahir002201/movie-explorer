import { Link } from "react-router"


const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mt-8">Welcome to Movie Explorer</h1>
        <p className="text-lg text-center mt-4 max-w-md">
            Discover and explore a vast collection of movies and TV shows. Browse through popular titles, search for your favorites, and stay updated with the latest releases.
        </p>
        <div className="mt-8 flex space-x-4">
            <Link to="/movies" className="px-6 py-3 bg-teal-600 text-white rounded hover:bg-teal-700 transition">Explore Movies</Link>
        </div>
    </section>
  )
}

export default Home