import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-5xl font-medium text-green-700 text-center" style={{ fontFamily: 'var(--font-kaushan)' }}>
              Popular Recipes
          </h2>
          <p className="mt-3 text-gray-600 font-medium mx-auto max-w-lg">
        Use the search bar above to discover our most popular recipes. Click on any recipe to see detailed instructions and ingredients.
      </p>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No recipes found. Try searching for something else.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((meal) => (
            <RecipeCard key={meal.idMeal} recipe={meal} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RecipeList;