import { useTheme } from "../contexts/ThemeContext";

export default function Hero() {
  const { darkMode } = useTheme();

  return (
    <main
      className={`
        ${darkMode ? "bg-[#121212]" : "bg-[#f8fafc]"}
      `}
    >
      {/* Content wrapper */}
      <div
        className="
          max-w-5xl mx-auto
          px-4 sm:px-6
          pt-20 sm:pt-24 md:pt-28
          pb-16 sm:pb-20
          text-center
        "
      >
        {/* Heading */}
        <h1
          className={`
            ${darkMode ? "text-[#e5e7eb]" : "text-[#0b0b0b]"}
            text-3xl sm:text-4xl md:text-5xl
            font-semibold
            tracking-tight
            leading-tight
          `}
        >
          Collaborate on documents,{" "}
          <span
            className={`${darkMode ? "text-yellow-400" : "text-[#2474F5]"}`}
          >
            in real-time
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          A simple, modern document editor built for teams.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            className={`
              rounded-md font-medium transition
              px-4 py-2.5 text-sm
              sm:px-6 sm:py-3
              ${
                darkMode
                  ? "btn-yellow-dark hover:bg-yellow-300"
                  : "btn-blue-light"
              }
            `}
          >
            Start writing for free
          </button>

          <button
            className={`
              rounded-md font-medium transition
              px-4 py-2.5 text-sm
              sm:px-6 sm:py-3
              ${
                darkMode
                  ? "btn-yellow-dark"
                  : "border text-gray-600 hover:text-black hover:bg-gray-100"
              }
            `}
          >
            Sign in
          </button>
        </div>
      </div>
    </main>
  );
}
