import React from "react";
import { banner1, banner2, banner3 } from "../assets"; // Ensure paths are correct
import Slider from "react-slick"; // Import Slider
const ImageList = [
  {
    id: 1,
    img: banner1,
    // title:
    //   "Over Two Decades of Excellence in Manufacturing of HVAC Air Distribution ",
    // description:
    //   "Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be found as well.",
  },
  {
    id: 2,
    img: banner2,
    // title:
    //   "Proven Expertise Across Key Commercial Sectors, Including Office Spaces, Malls, Retail Environments, and Pharmaceuticals",
    // description:
    //   "Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be found as well.",
  },
  {
    id: 3,
    img: banner3,
    // title: "Trusted Across India by Our Valued Customers ",
    // description:
    //   "Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be found as well.",
  },
];

const HorScroller = () => {
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
    <div className="flex justify-center items-center w-full pb-5">
      <Slider
        {...settings} // Use the defined settings
        className="flex justify-center items-center w-full"
      >
        {ImageList.map((image) => (
          <div
            key={image.id}
            className="relative w-full h-full flex justify-center items-center"
          >
            <img
              src={image.img}
              className="w-full h-[550px] object-scale-down"
              alt={image.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorScroller;
