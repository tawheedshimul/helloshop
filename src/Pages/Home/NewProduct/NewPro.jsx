import { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661"
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050"
  },
  {
    id: 3,
    name: "Home & Garden",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  {
    id: 4,
    name: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
  },
  {
    id: 5,
    name: "Books",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
  },
  {
    id: 6,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2"
  }
];

const CategoryCard = ({ category, onClick }) => (
  <motion.div
    // whileHover={{ opacity: 2 }}
    className="relative min-w-[250px] h-[350px] mx-2 rounded-lg overflow-hidden shadow-lg cursor-pointer"
    onClick={onClick}
    role="button"
    tabIndex={0}
    aria-label={`${category.name} category`}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
    <img
      src={category.image}
      alt={category.name}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute top-4 left-4">
      <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-semibold shadow-md">
        {category.name}
      </span>
    </div>
  </motion.div>
);

const NewProduct = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  const [error, setError] = useState(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const { current } = carouselRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") scroll("left");
    if (e.key === "ArrowRight") scroll("right");
  };

  useEffect(() => {
    const handleError = () => {
      setError("Failed to load categories. Please try again later.");
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-[350px] bg-gray-100 rounded-lg">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8" role="region" aria-label="Categories carousel">
      <div
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => console.log(`Selected category: ${category.name}`)}
          />
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
        aria-label="Scroll left"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
        aria-label="Scroll right"
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default NewProduct;