import { useNavigate } from "react-router-dom";

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
    <div className="bg-orange-50">
      
    <section className="py-16 px-6 text-center  border-t border-gray-300 border-b border-gray-300">
      <h2 className="text-2xl md:text-4xl font-bold text-green-800" style={{ fontFamily: 'var(--font-kaushan)' }}>
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
      </div>
  );
};

export default Categories;
