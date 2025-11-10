import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import logo from "../assets/images/cureva-logo.png"

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full fixed top-0 left-0 z-50 bg-lightblue shadow-md"
    >
      <div className="flex items-center justify-between page-container py-4 font-sans">    

        <img src={logo} alt="" />
        <ul className="hidden md:flex items-center space-x-8 text-primary font-medium">
          <li><a href="#home" className="hover:text-secondary hover:underline transition-none">Home</a></li>
          <li><a href="#categories" className="hover:text-secondary hover:underline transition-none">Categories</a></li>
          <li><a href="#book" className="hover:text-secondary hover:underline transition-none">Book</a></li>
          <li><a href="#hospitals" className="hover:text-secondary hover:underline transition-none">Hospitals</a></li>
           <li><a href="#partners" className="hover:text-secondary hover:underline transition-none">Partners</a></li>
            <li><a href="#partners" className="hover:text-secondary hover:underline transition-none">FAQs</a></li>
        </ul>

        <div className="hidden md:flex gap-3 justify-between">
          <Button className="bg-white text-primary cursor-pointer" text="Log In" />
          <Button className="bg-primary text-white cursor-pointer" text="Sign Up" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-primary font-bold text-xl cursor-pointer">
          ☰
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
