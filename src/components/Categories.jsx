const Categories = () => {
  const categoryList = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Vegan",
  ];

  return (
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
            className="px-6 py-2 rounded-[5px] text-green-700 font-medium hover:bg-green-700 hover:text-white transition border border-green-800"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
