import RecipeCard from "./RecipeCard";
import bgImage from "../assets/food-bg.jpg";

const RecipeList = ({ recipes }) => {
  return (
    <div>

      {/*Header Section with Background*/}
      <section
        data-aos="fade-up"
        className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/*Overlay*/}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center">
          <h2
            className="text-5xl font-medium text-white"
            style={{ fontFamily: "var(--font-kaushan)" }}
          >
            Popular Recipes
          </h2>

          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            Use the search bar above to discover our most popular recipes.
            Click on any recipe to see detailed instructions and ingredients.
          </p>
        </div>
      </section>

      {/*Recipe Grid Section */}
      <section
        data-aos="fade-up"
        className="py-16 px-6 bg-gray-50">
        {recipes.length === 0 ? (
          <p className="text-center text-gray-500">
            No recipes found. Try searching for something else.
          </p>
        ) : (
            <div
              data-aos="fade-up"
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.map((meal) => (
              <RecipeCard key={meal.idMeal} recipe={meal} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default RecipeList;