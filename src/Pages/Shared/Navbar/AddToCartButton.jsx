// AddToCartButton.jsx
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const AddToCartButton = () => {
  const handleClick = () => {
    // Add your add to cart logic here
    console.log("Item added to cart");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center rounded-md hover:text-green-300 duration-200"
    >
      <FiShoppingCart className="text-xl" />
    </button>
  );
};

export default AddToCartButton;