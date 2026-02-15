import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  // Dummy data for layout testing
  const dummyRecipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      category: "Dinner",
      area: "Italian",
      image: "https://source.unsplash.com/400x300/?pasta",
    },
    {
      id: 2,
      title: "Chicken Salad",
      category: "Lunch",
      area: "American",
      image: "https://source.unsplash.com/400x300/?salad",
    },
    {
      id: 3,
      title: "Pancakes",
      category: "Breakfast",
      area: "French",
      image: "https://source.unsplash.com/400x300/?pancakes",
    },
    {
      id: 4,
      title: "Chocolate Cake",
      category: "Dessert",
      area: "Belgian",
      image: "https://source.unsplash.com/400x300/?cake",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Popular Recipes
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default RecipeList;
