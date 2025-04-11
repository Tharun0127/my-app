import React from "react";
import { list } from "./index";
import { NavBar } from "../components";

const Products = () => {
  return (
    <>
      <div className="sticky top-0 w-full z-10">
        <NavBar />
      </div>
      <div className="pt-3 pb-5 px-10 ">
        {" "}
        <div className="bg-primary w-full text-white "></div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((val, index) => {
            const { cover, category, location, name, price, type } = val;
            return (
              <div
                className="  shadow-lg rounded-lg overflow-hidden"
                key={index}
              >
                <div className="img">
                  <img
                    src={cover}
                    alt=""
                    className="w-full h-48 object-contain	"
                  />
                </div>
                <div className="p-2">
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`px-3 py-1 rounded-sm font-semibold text-sm ${
                        category === "For Sale"
                          ? "bg-green-100 text-green-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {category}
                    </span>
                    <i className="fa fa-heart text-gray-400 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{name}</h4>
                  <p className="text-gray-500">
                    <i className="fa fa-location-dot text-gray-400 mr-1"></i>{" "}
                    {location}
                  </p>
                </div>
                <div className="border-t border-gray-200 p-3 flex justify-between items-center">
                  <div className="flex flex-1 items-center justify-center">
                    <button className="bg-blue-500 text-white py-1 px-4 rounded-lg">
                      {price}
                    </button>{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
