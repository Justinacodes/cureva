import React from "react";
import wellness from "../assets/images/wellness.png";
import generalCheckup from "../assets/images/checkup1.png";
import bariatricSurgery from "../assets/images/bariartric.png";
import fertility from "../assets/images/fertility.png";
import plasticSurgery from "../assets/images/surgery2.png";
import generalSurgery from "../assets/images/checkup2.png";
import ortho from "../assets/images/orthopedic.png";
import plastic from "../assets/images/plastic.png";
import { motion } from "framer-motion";

const categories = [
    { name: "Wellness", image: wellness },
    { name: "General Checkup", image: generalSurgery },
    { name: "Bariatric Surgery", image: bariatricSurgery },
    { name: "Fertility", image: fertility },
    { name: "General Surgery", image: plastic },
    { name: "General Checkup", image: generalCheckup },
    { name: "Plastic Surgery", image: plasticSurgery },
    { name: "Orthopedic Surgery", image: ortho },

];

const Categories: React.FC = () => {
    return (
        <motion.div className="bg-bg-categories py-14 page-container font-sans">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-primary text-2xl font-semibold">Categories</h2>
                <button className="text-primary font-medium hover:underline">
                    Browse all
                </button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((cat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all w-full">
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-44 object-cover"
                            />
                        </div>
                        <p className="text-center py-3 font-medium text-primary">
                            {cat.name}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Categories;
