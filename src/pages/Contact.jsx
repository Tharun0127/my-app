import React from "react";
import { NavBar } from "../components";
const FreeConsultation = () => {
  return (
    <div>
      <div className="sticky top-0 w-full z-10">
        <NavBar />
      </div>
      <div className="flex w-4/5 pb-9 justify-between items-center">
        <h1 className="px-10 py-4">kk</h1>
        <div className=" flex justify-center pr-10">
          <section className="bg-gray-100 px-10 py-4">
            <div className="max-w-xl  mx-auto bg-slate-500-secondary-dark shadow-md rounded-lg p-8">
              {/* Header Section */}
              <h2 className="text-2xl font-semibold text-center mb-6">
                GET A FREE CONSULTATION
              </h2>
              <p className="text-gray-500 text-center mb-6">
                Ventilation air grille diffuser air vent manufacturer since 2002
              </p>

              {/* Form */}
              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-primary-light"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* How can we help */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium"
                  >
                    How can we help
                  </label>
                  <textarea
                    id="message"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-primary-light"
                    placeholder="Describe your needs"
                    rows="4"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-light transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation;
