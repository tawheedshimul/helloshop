import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCardPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data directly from API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block border rounded-lg shadow-sm hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-700">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCardPage;
