import React from "react";
import { banner1, banner2, banner3 } from "../assets"; // Ensure paths are correct
import Slider from "react-slick"; // Import Slider

const ImageList = [
  {
    id: 1,
    img: banner1,
    title: "Why Choose Us",
    subtitle: "Experience",
    description:
      "Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be found as well.",
  },
  {
    id: 2,
    img: banner2,
    title: "Why Choose Us",
    subtitle: "Experience",
    description:
      "Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be found as well.",
  },
  {
    id: 3,
    img: banner3,
    title: "Why Choose Us",
    subtitle: "Experience",
    description:
      "Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be found as well.",
  },
];

const AboutScroller = () => {
  // Define the settings for the slider
  var settings = {
    dots: false,
    arrows: false,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <Slider
        {...settings}
        className="flex justify-center items-center w-full h-full"
      >
        {ImageList.map((image) => (
          <div
            key={image.id}
            className="relative w-full h-full flex justify-center items-center"
          >
            {/* Set image as a background */}
            <img
              src={image.img}
              className="w-full h-[400px] object-cover"
              alt={image.title}
            />
            {/* Overlay with a semi-transparent background for text readability */}
            <div className="absolute  middile inset-0 z-10 flex justify-center items-center  ">
              <div className="flex flex-col justify-center items-center w-3/4 h-1/2 p-5 bg-white rounded-lg backdrop-blur-3xl">
                {" "}
                <h1 className="text-[35px] font-medium mb-[10px] text-[#02203c] ">
                  {image.title}
                </h1>
                <div className="flex w-full  px-10 py-5  justify-between items-center">
                  <div className="w-1/4 text-[35px] font-medium mb-[10px] text-[#02203c] text-center">
                    {image.subtitle}
                  </div>
                  <div className="w-3/4 text-center">{image.description}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutScroller;
