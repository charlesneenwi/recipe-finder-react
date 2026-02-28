import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link
      to={`/recipe/${recipe.idMeal}`}
      className="bg-white rounded-xl shadow-md overflow-hidden 
transition-all duration-300 ease-in-out transform 
hover:scale-105 hover:-translate-y-1 hover:shadow-2xl block"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">{recipe.strMeal}</h3>
              
        <p className="text-sm text-gray-500 mt-1">
          {recipe.strCategory} • {recipe.strArea}
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
