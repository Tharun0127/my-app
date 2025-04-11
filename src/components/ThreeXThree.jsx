import React, { useState } from "react";
import products from "../pages";

const ProductMenu = () => {
  // Set default category to 'grills'
  const [selectedCategory, setSelectedCategory] = useState("grills");

  return (
    <div className="flex  flex-col items-center bg-primary-white">
      {/* Main Title */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[45px] font-bold mb-[10px] text-[#02203c]">
          PRODUCTS CENTER
        </h1>
        <p className="pb-8">
          Leading Manufacturer of Ventilation Grilles, Diffusers, and Air Vents
        </p>
      </div>
      <div className="flex flex-col items-center justify-center ">
        {/* Category Menu */}
        <div className="flex  flex-row justify-between w-full">
          {Object.keys(products).map((category) => (
            <div
              key={category}
              onMouseEnter={() => setSelectedCategory(category)}
              className="cursor-pointer p-2 mr-2 w-full rounded-md text-primary hover:bg-primary hover:text-white flex items-center ml-[5rem] justify-center"
            >
              <span className="font-bold">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </div>
          ))}
        </div>

        {/* Products Section */}
        <div className="w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {products[selectedCategory].slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="p-4 border w-full rounded-md flex flex-col items-center"
            >
              <a href="./products">
                <img
                  src={product.cover}
                  alt={product.name}
                  className="w-full object-cover h-40"
                />
              </a>
              <h4 className="font-semibold mt-2 text-center">{product.name}</h4>
              <p className="text-gray-600 text-center">
                {product.location}
              </p>{" "}
              {/* Description under the name */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
