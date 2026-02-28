import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    const parsed = storedFavourites ? JSON.parse(storedFavourites) : [];
    setFavourites(parsed);
  }, []);

  const removeFavourite = (id) => {
    const updated = favourites.filter(
      (meal) => meal.idMeal !== id
    );

    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8  text-center bg-orange-50">
      <h1 className="text-4xl font-bold mb-7 text-green-800" style={{ fontFamily: 'var(--font-kaushan)' }}>
        Your Favourites
      </h1>

      {favourites.length === 0 ? (
        <p>No favourites added yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {favourites.map((meal) => (
            <div key={meal.idMeal} className="relative">
              <RecipeCard recipe={meal} />

              <button
                onClick={() => removeFavourite(meal.idMeal)}
                className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-sm rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      </div>
      </>
  );
}

export default Favourites;