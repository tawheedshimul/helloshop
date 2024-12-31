import React, { useState } from "react";

const ProductCartPage = () => {
  const [color, setColor] = useState("Red");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: "Stylish Jacket",
    price: 59.99,
    images: [
      "https://via.placeholder.com/400x400/ff0000/ffffff?text=Red",
      "https://via.placeholder.com/400x400/0000ff/ffffff?text=Blue",
      "https://via.placeholder.com/400x400/00ff00/ffffff?text=Green",
    ],
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL"],
    stock: {
      Red: { S: 5, M: 3, L: 7, XL: 10 },
      Blue: { S: 0, M: 4, L: 8, XL: 6 },
      Green: { S: 12, M: 15, L: 10, XL: 0 },
    },
    discount: 0.1, // 10% discount
  };

  const handleAddToCart = () => {
    alert("Added to cart!");
    // Logic to add to cart
  };

  const calculateTotalPrice = () => {
    const basePrice = product.price;
    const totalPrice = basePrice * quantity;
    const discountAmount = totalPrice * product.discount;
    return totalPrice - discountAmount;
  };

  const isOutOfStock = () => {
    const stock = product.stock[color][size];
    return stock <= 0;
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Image Gallery */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="w-full h-96 mb-6 transition-transform duration-500 ease-in-out">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ease-in-out ${
                  selectedImage === index ? "border-blue-600 scale-105" : "border-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-xl text-gray-600">${product.price}</p>

          {/* Color Selection */}
          <div className="flex items-center space-x-4">
            <label className="text-lg font-medium">Color:</label>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
            >
              {product.colors.map((colorOption) => (
                <option key={colorOption} value={colorOption}>
                  {colorOption}
                </option>
              ))}
            </select>
          </div>

          {/* Size Selection */}
          <div className="flex items-center space-x-4">
            <label className="text-lg font-medium">Size:</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
            >
              {product.sizes.map((sizeOption) => (
                <option key={sizeOption} value={sizeOption}>
                  {sizeOption}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity Selection */}
          <div className="flex items-center space-x-4">
            <label className="text-lg font-medium">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, e.target.value))}
              min="1"
              className="border border-gray-300 rounded-lg p-2 w-20 transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Stock Availability */}
          <div className="text-lg font-medium">
            {isOutOfStock() ? (
              <p className="text-red-600">Out of Stock</p>
            ) : (
              <p className="text-green-600">In Stock</p>
            )}
          </div>

          {/* Cart Summary */}
          <div className="space-y-2">
            <p className="text-xl font-medium">
              Subtotal: ${calculateTotalPrice().toFixed(2)}
            </p>
            {product.discount > 0 && (
              <p className="text-lg text-gray-500">
                Discount: {product.discount * 100}% Off
              </p>
            )}
          </div>

          {/* Add to Cart Button */}
          <div>
            <button
              onClick={handleAddToCart}
              disabled={isOutOfStock()}
              className={`w-full py-3 rounded-lg text-white font-medium ${
                isOutOfStock()
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out"
              }`}
            >
              {isOutOfStock() ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCartPage;
