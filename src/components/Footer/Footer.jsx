import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full  text-white">
      {/* <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#02203cd5] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-primary-light">Request</span> Call from the us
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-primary-light hover:bg-primary-dark duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request call
          </button>
        </div>
      </div> */}

      <div
        className="flex justify-between	items-center sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-4 px-6 text-gray-400 text-sm pb-8"
      >
        <span> Copyright © 2020 Sri Sai Enterprises. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        {/* <SocialIcons Icons={Icons} /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.051795385968!2d78.44304911536598!3d17.467927188033188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90f71799bff7%3A0x6f59bafe5327d2be!2sSri%20Sai%20Enterprises!5e0!3m2!1sen!2sin!4v1696948498291!5m2!1sen!2sin"
          width="25%"
          height="100"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
