import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import NavBar from "../components/NavBar";

const CategoryPage = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchByCategory = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        );

        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchByCategory();
  }, [name]);

  return (
      <>

      <h1 className="text-3xl font-medium text-green-700 mt-2.5 mb-2.5" style={{ fontFamily: 'var(--font-kaushan)' }}>
        {name} Meals
      </h1>

      {meals.length === 0 ? (
        <p>No meals found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <RecipeCard key={meal.idMeal} recipe={meal} />
          ))}
        </div>
      )}
     </>
  );
};

export default CategoryPage;