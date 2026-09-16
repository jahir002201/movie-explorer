import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gray-500 text-gray-200 px-4 py-6 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-center">
        <div className="text-lg font-semibold">Movie Explorer</div>
        <p className="text-xs sm:text-sm">
          © 2026 Movie Explorer. All rights reserved.
        </p>

        <p className="text-xs text-gray-200 sm:text-sm">
          Built with React and TVMaze.
        </p>
        <div className="flex space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/jahirul12/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/jahir002201"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer