import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="border-t border-teal-700 bg-teal-900 px-4 py-6 text-teal-200 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-center">

        <p className="text-xs sm:text-sm">
          © 2026 Movie Explorer. All rights reserved.
        </p>
        <p className="text-xs text-teal-400 sm:text-sm">
          Built with React and TVMaze.
        </p>

        <div className="mt-3 flex gap-5">
          <a
            href="https://www.linkedin.com/in/jahirul12/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl text-teal-200 transition hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/jahir002201"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl text-teal-200 transition hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;