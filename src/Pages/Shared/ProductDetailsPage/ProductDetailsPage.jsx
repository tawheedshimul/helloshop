import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetailsPage = () => {
  const product = useLoaderData(); // Data fetched from loader in the route
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const discountAmount = product.price * (product.discountPercentage / 100);
    const discountedPrice = product.price - discountAmount;
    setTotalPrice(discountedPrice * quantity); // Update total price based on quantity
  }, [quantity, product.price, product.discountPercentage]);

  const calculateDiscountedPrice = () => {
    const discountAmount = product.price * (product.discountPercentage / 100);
    return (product.price - discountAmount).toFixed(2);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) of ${product.title} to cart.`);
    // Add cart logic here
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${quantity} item(s) of ${product.title}.`);
    // Redirect to checkout page or handle buying logic
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full h-96">
            <img
              src={product.images[selectedImage] || product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 rounded-lg border-2 ${
                  selectedImage === index ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-xl font-semibold text-green-600">
            ${totalPrice.toFixed(2)}{" "}
            <span className="text-gray-500 line-through">${product.price}</span>
          </p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          <p className="text-sm text-gray-500">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500">Stock: {product.stock}</p>

          {/* Quantity Selection */}
          <div className="flex items-center space-x-4">
            <label className="text-lg font-medium">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, +e.target.value))}
              min="1"
              max={product.stock}
              className="border border-gray-300 rounded-lg p-2 w-20"
            />
          </div>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-sm space-y-2"
              >
                <p className="text-lg font-semibold">
                  {review.reviewerName}{" "}
                  <span className="text-sm text-gray-500">
                    ({review.rating}/5)
                  </span>
                </p>
                <p className="text-gray-700">{review.comment}</p>
                <p className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews available.</p>
          )}
        </div>
      </div>

      {/* Additional Product Information */}
      <div className="mt-10 space-y-4">
        <h3 className="text-xl font-semibold">Additional Information</h3>
        <ul className="list-disc pl-5">
          <li>SKU: {product.sku}</li>
          <li>Weight: {product.weight}g</li>
          <li>Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</li>
          <li>Warranty: {product.warrantyInformation}</li>
          <li>Shipping: {product.shippingInformation}</li>
        </ul>
      </div>

      {/* Return and Availability */}
      <div className="mt-10 space-y-4">
        <p className="text-sm text-gray-500">Return Policy: {product.returnPolicy}</p>
        <p className="text-sm text-gray-500">Minimum Order Quantity: {product.minimumOrderQuantity}</p>
        <p className="text-sm text-gray-500">Availability Status: {product.availabilityStatus}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
