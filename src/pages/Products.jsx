import React, { useState } from "react"; // Import useState
import products from "."; // Ensure the correct path to your products file
import { NavBar, HorScroller } from "../components";

const Product = () => {
  // State to track the selected category, default to "grills"
  const [selectedCategory, setSelectedCategory] = useState("grills");

  return (
    <div>
      <div className="sticky top-0 w-full z-10">
        <NavBar />
      </div>
      <HorScroller />

      <div className="px-16 pb-8">
        {/* Category Buttons */}
        <div className="rounded-lg p-2 flex justify-center mb-8">
          {Object.keys(products).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mx-2 py-3 px-10 rounded-lg ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "font-bold text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {category.replace("_", " ").charAt(0).toUpperCase() +
                category.replace("_", " ").slice(1)}
            </button>
          ))}
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products[selectedCategory].map((product, index) => {
            const { cover, category, location, name, price, type } = product;
            return (
              <div
                className="shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                key={index}
              >
                <div className="img">
                  <img
                    src={cover}
                    alt={name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-2">
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`px-3 py-1 rounded-sm font-semibold text-sm ${
                        category === "registers & grilles"
                          ? "bg-green-100 text-green-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {category}
                    </span>
                    <i className="fa fa-heart text-gray-400 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg mb-1 text-center">
                    {name}
                  </h4>
                  <p className="text-gray-500 text-center">
                    <i className="fa fa-location-dot text-gray-400 mr-1"></i>
                    {location}
                  </p>
                </div>
                <div className="border-t border-gray-200 p-3 flex justify-between items-center">
                  <div className="flex flex-1 items-center justify-center">
                    <a href="./contact">
                      <button className="bg-blue-500 text-white py-1 px-4 rounded-lg">
                        {price}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
