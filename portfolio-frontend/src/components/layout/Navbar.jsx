import { useEffect, useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-[#020617]/70 border-b border-gray-200 dark:border-white/10 px-10 py-4 flex items-center justify-between">

      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        MyPortfolio
      </h1>

      {/* Center Links */}
      <ul className="hidden md:flex gap-8 text-sm text-gray-600 dark:text-gray-300 absolute left-1/2 -translate-x-1/2">
        {["home", "about", "skills", "projects", "certificates", "contact"].map((item) => (
          <li key={item}>
            <a href={`#${item}`} className="hover:text-teal-400 transition">
              {item.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>

      {/* Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="px-3 py-1 rounded-lg border border-gray-300 dark:border-white/20 text-sm"
      >
        {dark ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;