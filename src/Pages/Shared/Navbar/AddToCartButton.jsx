// AddToCartButton.jsx
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const AddToCartButton = () => {
  const handleClick = () => {
    // Add your add to cart logic here
    console.log("Item added to cart");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center rounded-md  hover:text-green-300 duration-200"
    >
      <FaShoppingCart className="text-xl" />
    </button>
  );
};

export default AddToCartButton;