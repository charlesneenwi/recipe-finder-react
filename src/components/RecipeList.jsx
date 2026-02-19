import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
   

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Popular Recipes
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((meal) => (
          <RecipeCard key={meal.idMeal} recipe={meal} />
        ))}
      </div>
    </section>
  );
};

export default RecipeList;
