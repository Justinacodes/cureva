import React, { useState } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/cureva-logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full fixed top-0 left-0 z-50 bg-lightblue shadow-md"
    >
      <div className="flex items-center justify-between page-container py-4 font-sans">
        {/* Logo */}
        <img src={logo} alt="Cureva Logo" className="w-28 md:w-36" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-primary font-medium">
          <li><a href="#home" className="hover:text-secondary hover:underline transition-none">Home</a></li>
          <li><a href="#categories" className="hover:text-secondary hover:underline transition-none">Categories</a></li>
          <li><a href="#book" className="hover:text-secondary hover:underline transition-none">Book</a></li>
          <li><a href="#hospitals" className="hover:text-secondary hover:underline transition-none">Hospitals</a></li>
          <li><a href="#partners" className="hover:text-secondary hover:underline transition-none">Partners</a></li>
          <li><a href="#faq" className="hover:text-secondary hover:underline transition-none">FAQs</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 justify-between">
          <Button className="bg-white text-primary cursor-pointer" text="Log In" />
          <Button className="bg-primary text-white cursor-pointer" text="Sign Up" />
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary text-3xl cursor-pointer select-none"
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-primary shadow-md rounded-b-2xl px-6 py-4 space-y-4"
          >
            <ul className="flex flex-col gap-4 font-medium">
              <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-secondary">Home</a></li>
              <li><a href="#categories" onClick={() => setMenuOpen(false)} className="hover:text-secondary">Categories</a></li>
              <li><a href="#book" onClick={() => setMenuOpen(false)} className="hover:text-secondary">Book</a></li>
              <li><a href="#hospitals" onClick={() => setMenuOpen(false)} className="hover:text-secondary">Hospitals</a></li>
              <li><a href="#partners" onClick={() => setMenuOpen(false)} className="hover:text-secondary">Partners</a></li>
              <li><a href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-secondary">FAQs</a></li>
            </ul>

            <div className="flex flex-col gap-3 pt-4">
              <Button className="bg-white text-primary border border-primary cursor-pointer" text="Log In" />
              <Button className="bg-primary text-white cursor-pointer" text="Sign Up" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
