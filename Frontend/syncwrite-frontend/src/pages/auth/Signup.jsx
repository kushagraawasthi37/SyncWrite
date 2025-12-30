import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import ThemeToggle from "../../components/ThemeToggle";

export default function Signup() {
  const { darkMode } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-[#0B0B0B]" : "bg-white"
      }`}
    >
      {/* Theme Toggle */}
      <div className="flex justify-end px-6 py-4">
        <ThemeToggle />
      </div>

      {/* Center */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div
          className={`w-full max-w-md rounded-2xl p-8 border shadow-sm ${
            darkMode
              ? "bg-[#111] border-neutral-800"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-semibold ${
                darkMode ? "bg-yellow-400 text-black" : "bg-blue-600 text-white"
              }`}
            >
              📄
            </div>
          </div>

          {/* Title */}
          <h1
            className={`text-2xl font-semibold text-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Create an account
          </h1>
          <p
            className={`mt-2 text-center text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Get started with your documents
          </p>

          {/* Form */}
          <form className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label
                className={`block mb-1 text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Full name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full rounded-md px-4 py-2 text-sm outline-none transition
                  ${
                    darkMode
                      ? "bg-[#0B0B0B] border border-neutral-800 text-white placeholder-gray-500 focus:border-yellow-400"
                      : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-600"
                  }`}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className={`block mb-1 text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className={`w-full rounded-md px-4 py-2 text-sm outline-none transition
                  ${
                    darkMode
                      ? "bg-[#0B0B0B] border border-neutral-800 text-white placeholder-gray-500 focus:border-yellow-400"
                      : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-600"
                  }`}
              />
            </div>

            {/* Password */}
            <div>
              <label
                className={`block mb-1 text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full rounded-md px-4 py-2 pr-12 text-sm outline-none transition
                    ${
                      darkMode
                        ? "bg-[#0B0B0B] border border-neutral-800 text-white placeholder-gray-500 focus:border-yellow-400"
                        : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-600"
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute inset-y-0 right-3 flex items-center text-sm font-medium ${
                    darkMode
                      ? "text-gray-400 hover:text-yellow-400"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* CTA */}
            <button
              type="submit"
              className={`w-full rounded-md py-2.5 text-sm font-medium transition ${
                darkMode
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              Create account
            </button>
          </form>

          {/* Footer */}
          <p
            className={`mt-6 text-center text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Already have an account?{" "}
            <span
              className={`cursor-pointer font-medium ${
                darkMode ? "text-yellow-400" : "text-blue-600"
              }`}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
