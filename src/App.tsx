

import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <div
      className={`flex items-center justify-center h-screen transition-colors duration-500 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={() => setDark((prev) => !prev)}
        className="px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition font-bold"
      >
        {dark ? "Black" : "White"}
      </button>
    </div>
  );
}
