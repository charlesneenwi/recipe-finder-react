import SearchBar from "./SearchBar";

const Hero = ({ searchTerm, setSearchTerm, fetchRecipes }) => {
  return (
    <section className="bg-orange-50 py-16 px-6 text-center">
      <h1 className="text-5xl font-medium text-green-700" style={{ fontFamily: 'var(--font-kaushan)' }}>
        Recipe Finder
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Discover delicious recipes from around the world.
        Search by dish name and explore detailed cooking instructions.
      </p>

      <div className="mt-8">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          fetchRecipes={fetchRecipes}
        />
      </div>
    </section>
  );
};

export default Hero;
