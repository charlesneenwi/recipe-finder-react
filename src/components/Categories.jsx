import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const Categories = () => {
  const navigate = useNavigate();
  const categoryList = [
    "Breakfast",
    "Chicken",
    "Seafood",
    "Dessert",
    "Vegetarian",
    'Beef',
    'Pasta',
    'Vegan',
    'Lamb',
    'Pork'
  ];

  return (
    <>
      
    <section className="py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Top Categories
      </h2>

      <p className="mt-3 text-gray-600 max-w-lg mx-auto">
        Explore our most popular meal categories.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {categoryList.map((category, index) => (
          <button
            key={index}
            onClick={() => navigate(`/category/${category}`)}
            className="px-6 py-2 rounded-[5px] text-green-700 font-medium hover:bg-green-700 hover:text-white transition border border-green-800"
          >
            {category}
          </button>
        ))}
      </div>
      </section>
      </>
  );
};

export default Categories;
