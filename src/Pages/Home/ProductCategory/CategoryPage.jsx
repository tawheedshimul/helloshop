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
    <div className="  py-8 ">
      <div className="border-solid border-2 border-zinc-400">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-left bg-zinc-400 px-6 mx-auto py-2">
          Categories
        </div>
        <div className="grid mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-6 py-10 bg-zinc-100 hover:bg-zinc-200 hover:skew-y-6 cursor-pointer rounded shadow-lg transition-transform transform"
              onClick={() => handleCategoryClick(category)}
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default CategoryPage;
