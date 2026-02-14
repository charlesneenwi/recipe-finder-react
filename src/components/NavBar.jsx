import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        
        <h1 className="text-orange-600 font-bold text-xl">
          RecipeRoot
        </h1>

        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="text-orange-600">
            Home
          </Link>
          <Link to="#" className="text-gray-700 hover:text-orange-600">
            Categories
          </Link>
          <Link to="#" className="text-gray-700 hover:text-orange-600">
            Favourites
          </Link>
        </div>

        <button
          className="md:hidden text-2xl"
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
