import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSections } from "../../../api/data";

const ProductPage = () => {
  const { subcategoryId } = useParams(); // Get subcategoryId from the URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchSections(); // Fetch data asynchronously
        const subcategory = data
          .flatMap((section) => section.subcategories)
          .find((sub) => sub.id === parseInt(subcategoryId)); // Find the selected subcategory

        if (subcategory) {
          setProducts(subcategory.products);
        } else {
          setProducts([]); // Reset products if subcategory not found
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, [subcategoryId]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-green-100 hover:bg-green-200 rounded-md shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
              <p className="text-gray-500">Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
