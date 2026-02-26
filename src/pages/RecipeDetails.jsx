import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const RecipeDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );

        const data = await response.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold text-gray-700">
          Loading recipe details...
        </h2>
      </div>
    );
  }

  const handleFavourite = () => {
    const storedFavourites = localStorage.getItem("favourites");

    let favourites = storedFavourites ? JSON.parse(storedFavourites) : [];

    const alreadyExists = favourites.find(
      (item) => item.idMeal === recipe.idMeal,
    );

    if (!alreadyExists) {
      favourites.push(recipe);
      localStorage.setItem("favourites", JSON.stringify(favourites));
      alert("Added to favourites!");
    } else {
      alert("Recipe already in favourites.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <NavBar />

      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      {/* Image */}
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-md rounded-xl mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>

      <p className="text-gray-600 mb-6">
        {recipe.strCategory} • {recipe.strArea}
      </p>

      <button
        onClick={handleFavourite}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Add to Favourites
      </button>

      {/* Ingredients */}
      <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc list-inside mb-6">
        {Array.from({ length: 20 }, (_, i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];

          if (ingredient && ingredient.trim() !== "") {
            return (
              <li key={i}>
                {measure} {ingredient}
              </li>
            );
          }

          return null;
        })}
      </ul>

      {/* Instructions */}
      <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
      <p className="text-gray-700 whitespace-pre-line mb-6">
        {recipe.strInstructions}
      </p>

      {/* YouTube Video */}
      {recipe.strYoutube && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Video Tutorial</h2>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
            title="YouTube video player"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      )}

      {/* Source Link */}
      {recipe.strSource && (
        <a
          href={recipe.strSource}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View Full Recipe Source
        </a>
      )}
    </div>
  );
};

export default RecipeDetails;
