import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition block"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {recipe.category} • {recipe.area}
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;
