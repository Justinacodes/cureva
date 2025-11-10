import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import ivfImg from "../assets/images/ivf-package.png";
import womensHealthImg from "../assets/images/womens-health.png";
import diabetesImg from "../assets/images/diabetes.png";
import generalcheckup from "../assets/images/generalcheckup.png"
import Button from "./Button";

const packages = [
  {
    id: 1,
    hospital: "Cedarcrest Hospital",
    title: "IVF Package",
    price: 220000,
    rating: 5.0,
    image: ivfImg,
  },
  {
    id: 2,
    hospital: "Big House Hospital",
    title: "Women’s Health Package",
    price: 220000,
    rating: 5.0,
    image: womensHealthImg,
  },
  {
    id: 3,
    hospital: "Evercare Hospital",
    title: "Diabetes Management Package",
    price: 220000,
    rating: 5.0,
    image: diabetesImg,
  },
  {
    id: 4,
    hospital: "Lagoon Hospital",
    title: "General Health Check",
    price: 150000,
    rating: 4.9,
    image: generalcheckup,
  },
  {
    id: 5,
    hospital: "Cedarcrest Hospital",
    title: "IVF Package",
    price: 220000,
    rating: 5.0,
    image: ivfImg,
  },
  {
    id: 6,
    hospital: "Big House Hospital",
    title: "Women’s Health Package",
    price: 220000,
    rating: 5.0,
    image: womensHealthImg,
  },
  {
    id: 7,
    hospital: "Evercare Hospital",
    title: "Diabetes Management Package",
    price: 220000,
    rating: 5.0,
    image: diabetesImg,
  },
  {
    id: 8,
    hospital: "Lagoon Hospital",
    title: "General Health Check",
    price: 150000,
    rating: 4.9,
    image: generalcheckup,
  },
];

const FeaturedPackages: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= packages.length ? 0 : prev + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerView < 0
        ? Math.max(packages.length - itemsPerView, 0)
        : prev - itemsPerView
    );
  };

  return (
    <div className="bg-white py-16 page-container font-sans">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-primary text-2xl font-semibold">
          Featured Packages
        </h2>
        <button className="text-primary font-medium hover:underline">
          Browse all
        </button>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: `-${currentIndex * (344 + 32)}px` }} // width + gap
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm shrink-0 w-[344px] overflow-hidden"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4 space-y-3">
                  <span className="text-sm bg-lightblue text-primary px-3 py-1 rounded-md">
                    {pkg.hospital}
                  </span>

                  <div className="flex justify-between items-center">
                    <h3 className="text-primary font-semibold">{pkg.title}</h3>
                    <div className="flex items-center gap-1">
                      <Star
                        size={16}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span className="text-gray-700 text-sm font-medium">
                        {pkg.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <p className="text-primary font-semibold text-lg">
                    ₦
                    {pkg.price.toLocaleString("en-NG", {
                      minimumFractionDigits: 2,
                    })}
                  </p>

                  <Button
                    className="w-full border border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    text="Book Now"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

   
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <ArrowLeft />
          </button>
           <div className="flex justify-center mt-4 gap-2">
          {Array.from({
            length: Math.ceil(packages.length / itemsPerView),
          }).map((_, idx) => (
            <div
              key={idx}
              className={`w-2.5 h-2.5 rounded-full ${
                idx === Math.floor(currentIndex / itemsPerView)
                  ? "bg-primary"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <ArrowRight />
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default FeaturedPackages;
