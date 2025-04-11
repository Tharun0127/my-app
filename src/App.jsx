import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Product, Services, Contact } from "./pages"; // Ensure this path is correct
import { NavBar, Footer } from "./components"; // Ensure this path is correct
import "../src/fonts/fonts.css";

const App = () => {
  return (
    <Router>
      <div className=" bg-white w-full flex flex-col min-h-screen">
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
