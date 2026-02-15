import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import RecipeList from "../components/RecipeList";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Categories />
      <RecipeList />
    </div>
  );
};

export default Home;
