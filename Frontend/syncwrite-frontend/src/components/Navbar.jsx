import ThemeToggle from "./ThemeToggle";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`sticky top-0 z-50 border-b border-gray-200 ${
        darkMode
          ? "text-white bg-[#0b0b0b] border-neutral-800"
          : "text-black  bg-white"
      }  `}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          📄 Docs
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button
            className={`px-4 py-2 rounded-md font-medium
          ${
            darkMode
              ? "btn-yellow-dark"
              : "text-gray-600 hover:text-black hover:bg-gray-100"
          } transition `}
          >
            Sign in
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium
            ${darkMode ? "btn-yellow-dark" : "btn-blue-light"} transition`}
          >
            Get started
          </button>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
}
