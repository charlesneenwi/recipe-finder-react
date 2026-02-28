import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm, fetchRecipes }) => {

  const handleSubmit = (e) => {
    e.preventDefault();  
    fetchRecipes();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex shadow-md rounded-lg overflow-hidden"
    >
      <div className="relative w-full">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          size={18}
        />

        <input
          type="text"
          id="search"
          name="recipe-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Recipe..."
          className="w-full pl-10 pr-3 py-2 text-gray-700 border border-gray-400 rounded-l-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
      </div>

      <button
        type="submit"
        className="bg-green-700 text-white px-5"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;