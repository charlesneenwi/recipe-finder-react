import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import NavBar from "../components/NavBar";

function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    const parsedFavourites = storedFavourites ? JSON.parse(storedFavourites) : [];
    setFavourites(parsedFavourites);
  }, []);

    return (
        <div className="max-w-5xl mx-auto p-6">
        <NavBar />
      
      <h1 className="text-2xl mb-6 mt-4  text-orange-500 text-center text-4xl font-medium" style={{ fontFamily: 'var(--font-kaushan)' }}>Your Favorite Recipes</h1>

      {favourites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {favourites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;