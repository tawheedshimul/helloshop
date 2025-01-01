import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSections } from "../../../api/data";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = fetchSections(); // Fetch categories from the local API
    setCategories(data);
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/subcategory/${category.id}`); // Navigate to Subcategory Page
  };

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">
        Categories
      </h2>
      <div className="grid mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-6 py-10 bg-zinc-100 hover:bg-zinc-200 cursor-pointer rounded shadow-lg transition-transform transform hover:scale-105"
            onClick={() => handleCategoryClick(category)}
          >
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 text-center">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default CategoryPage;
