import React from "react";

const products = [
  {
    id: 1,
    name: "Product Name",
    brand: "Brand",
    price: 149,
    originalPrice: 199,
    image:
      "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Product Name",
    brand: "Brand",
    price: 149,
    originalPrice: 199,
    image:
      "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Product Name",
    brand: "Brand",
    price: 149,
    originalPrice: 199,
    image:
      "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Product Name",
    brand: "Brand",
    price: 149,
    originalPrice: 199,
    image:
      "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Product Name",
    brand: "Brand",
    price: 149,
    originalPrice: 199,
    image:
      "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Product Name",
    brand: "Brand",
    price: 149,
    originalPrice: 199,
    image:
      "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const NewArrival = () => {
  return (
    <div className="bg-zinc-100 py-2 border-solid border-2 border-zinc-400">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 bg-green-100 text-green-500 text-center font mono px-6 mx-auto py-4">
        New Arrival Product ...
      </div>

      <section
        id="Projects"
        className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-sm shadow-sm"
          >
            <a href="#">
              <div className="relative"> {/* Added relative positioning */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-t-sm" // Smaller rounded corners
                  style={{ aspectRatio: "3/4" }}
                />

              </div>
              <div className="p-4">
                <span className="text-gray-400 uppercase text-xs">
                  {product.brand}
                </span>
                <p className="text-lg font-bold text-black truncate">
                  {product.name}
                </p>
                <div className="flex items-center mt-3">
                  <p className="text-lg font-semibold text-black">
                    ${product.price}
                  </p>
                  <del className="text-sm text-gray-600 ml-2">
                    ${product.originalPrice}
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default NewArrival;
