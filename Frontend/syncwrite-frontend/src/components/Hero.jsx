import { useTheme } from "../contexts/ThemeContext";

export default function Hero() {
  const { darkMode } = useTheme();
  return (
    <main
      className={`py-32 text-center ${
        darkMode ? "bg-[#121212]" : "bg-[#f8fafc]"
      }`}
    >
      <h1
        className={`${
          darkMode ? "text-[#e5e7eb]" : "text-[#0b0b0b]"
        } text-4xl md:text-5xl font-bold`}
      >
        Collaborate on documents,{" "}
        <span className={`${darkMode ? "text-yellow-400" : "text-[#2474F5]"}`}>
          in real-time
        </span>
      </h1>

      <p className={`mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto`}>
        A simple, modern document editor built for teams.
      </p>

      <div className={`mt-8 flex justify-center gap-4`}>
        <button
          className={`px-6 py-3 rounded-md font-medium
                        ${
                          darkMode
                            ? " btn-yellow-dark hover:bg-yellow-300"
                            : "btn-blue-light"
                        }  transition  `}
        >
          Start writing for free
        </button>

        <button
          className={`px-6 py-3 rounded-md 
                       ${
                         darkMode
                           ? "btn-yellow-dark "
                           : "border text-gray-600 hover:text-black hover:bg-gray-100"
                       } transition `}
        >
          Sign in
        </button>
      </div>
    </main>
  );
}
