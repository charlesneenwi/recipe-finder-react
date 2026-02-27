import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Favourites from "./pages/Favourites";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;