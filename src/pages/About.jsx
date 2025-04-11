// src/pages/CombinedComponent.jsx
import React from "react";
import { banner1, Icon1, Icon2, Icon3 } from "../assets"; // Adjust paths as needed
import { motion } from "framer-motion";
import { SlideUp, SlideLeft, SlideRight } from "../util/animation"; // Adjust paths as needed
import { NavBar, InfScroller, AboutScroller } from "../components";

const Card = ({ icon, heading, text }) => {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-300 text-center py-12">
      <div className="bg-brandWhite p-4 rounded-full w-fit mx-auto">
        <img src={icon} alt={heading} className="w-12 mx-auto" />
      </div>
      <h4 className="my-4 text-lg font-bold">{heading}</h4>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
};

const CombinedComponent = () => {
  return (
    <div className="">
      {/* NavBar - full width */}
      <div className="sticky top-0 w-full z-10">
        <NavBar />
      </div>

      {/* Main content container with consistent spacing */}
      <div className="flex flex-col w-full">
        {/* About Section */}
        <section className="w-full bg-brandWhite py-8 mt-8">
          <div className="w-full max-w-screen-xl px-4 md:px-6 lg:px-8 mx-auto text-center">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="py-4 text-4xl font-bold text-darkBlue"
            >
              Why you can trust us
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="space-y-4 px-4 md:px-16 mx-auto md:mx-0"
              >
                <img
                  src={Icon2}
                  alt="Reliable Sources"
                  className="mx-auto md:mx-0 w-auto max-w-full"
                />
                <p className="text-3xl font-semibold">
                  Based on reliable sources
                </p>
                <p>
                  We want our tool to be safe and reliable, so its logic is
                  based on the official global information provided by the WHO.
                </p>
                <p className="text-sm text-gray-400">
                  Enhance your preliminary diagnosis and triage with pediatric
                  content <span className="text-primary"> Learn more</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Helps Section */}
        <section className="w-full py-8 mt-8">
          <div className="w-full max-w-screen-xl px-4 md:px-6 lg:px-8 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="col-span-1 md:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <motion.div
                    variants={SlideRight(0.2)}
                    whileInView="animate"
                    initial="initial"
                  >
                    <Card
                      icon={Icon1}
                      heading="Symptoms"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                    />
                  </motion.div>
                  <motion.div
                    variants={SlideRight(0.4)}
                    whileInView="animate"
                    initial="initial"
                  >
                    <Card
                      icon={Icon2}
                      heading="Recommendations"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                    />
                  </motion.div>
                  <motion.div
                    variants={SlideRight(0.6)}
                    whileInView="animate"
                    initial="initial"
                    className="sm:col-span-2 lg:col-span-1"
                  >
                    <Card
                      icon={Icon3}
                      heading="Local information"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                    />
                  </motion.div>
                </div>
              </div>
              <motion.div
                variants={SlideLeft(0.8)}
                whileInView="animate"
                initial="initial"
                className="flex flex-col justify-center mt-6 md:mt-0"
              >
                <h1 className="text-3xl font-bold text-darkBlue">
                  How it Helps People
                </h1>
                <p className="text-gray-400 mt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  esse ab natus.
                </p>
                <p className="text-sm text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <a href="#" className="text-primary">
                    Learn More
                  </a>
                </p>
                <button className="w-fit mt-3 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
                  Get in Touch
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CombinedComponent;
