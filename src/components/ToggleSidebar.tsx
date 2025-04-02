import { useState } from "react";

function ToggleSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <button onClick={toggleSidebar} className="p-1.5 bg-gray-500 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <nav
        hidden={isOpen}
        className="absolute bg-white py-5 h-80 w-56 rounded-lg shadow-lg border border-gray-200 top-10"
      >
        <h2 className="text-md px-4">Welcome back Alexis</h2>
        <ul className="flex flex-col text-sm mt-4">
          <li>inicio</li>
          <li>Informe y analisis</li>
          <li>profile</li>
        </ul>
      </nav>
    </div>
  );
}

export default ToggleSidebar;
