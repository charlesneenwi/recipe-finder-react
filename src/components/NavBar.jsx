import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const stored = localStorage.getItem("favourites");
      const parsed = stored ? JSON.parse(stored) : [];
      setCount(parsed.length);
    }

    updateCount();
    window.addEventListener("storage", updateCount);

    return () => {
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  return (
    <nav className="bg-green-700 px-6 py-4">
      <div className="flex justify-between items-center">
        
        <h1 className="text-white font-bold text-xl">
          RecipeRoot
        </h1>

        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="text-orange-600">
            Home
          </Link>
          <Link to="/categories" className="text-white hover:text-orange-600">
            Categories
          </Link>
          <Link to="/favourites" className="text-white hover:text-orange-600">
            Favourites
            {count > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2">
                {count}
              </span>
            )}
          </Link>
        </div>

        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
      >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="#" onClick={() => setIsOpen(false)}>
            Categories
          </Link>
          <Link to="#" onClick={() => setIsOpen(false)}>
            Favourites
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
