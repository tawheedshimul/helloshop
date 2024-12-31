import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSections } from "../../../api/data";
// import { fetchSections } from "../api/data";

const SubcategoryPage = () => {
  const { categoryId } = useParams(); // Get categoryId from the URL
  const navigate = useNavigate();
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const data = fetchSections();
    const category = data.find((section) => section.id === parseInt(categoryId)); // Find the selected category
    if (category) {
      setSubcategories(category.subcategories);
    }
  }, [categoryId]);

  const handleSubcategoryClick = (subcategory) => {
    navigate(`/products/${subcategory.id}`); // Navigate to Products Page
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Subcategories</h2>
      <div className="grid grid-cols-2 gap-4">
        {subcategories.map((subcategory) => (
          <div
            key={subcategory.id}
            className="p-4 bg-pink-100 hover:bg-pink-200 cursor-pointer rounded-md shadow-md"
            onClick={() => handleSubcategoryClick(subcategory)}
          >
            <h3 className="text-xl font-semibold text-gray-700">{subcategory.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryPage;
