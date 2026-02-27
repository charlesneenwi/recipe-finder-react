import { useState } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import RecipeList from "../components/RecipeList";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);

      const data = await response.json();
      console.log(data);

      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    
  };
  
  return (
    <div>
      <Hero
      searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        fetchRecipes={fetchRecipes}
      />
      <RecipeList recipes={recipes} />
      <Categories />
    </div>
  );
};

export default Home;
