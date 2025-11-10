import React from "react";
import { motion } from "framer-motion";
import partnerslogo1 from "../assets/images/cedacrest.png";
import partnerslogo2 from "../assets/images/cedacrest2.png";
import partnerslogo3 from "../assets/images/cedarcrest3.png";

const Partners: React.FC = () => {
  const partners = [partnerslogo1, partnerslogo2, partnerslogo3];
  const allPartners = [...partners, ...partners, ...partners]; 

  return (
    <div className="bg-white mx-auto py-10 page-container font-sans">
      <p className="text-gray-700 text-center mb-8 text-lg font-medium">
        Supported by partner hospitals like
      </p>

      {/* Scrolling Logos */}
      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex items-center gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {allPartners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`partner-${index}`}
              className="w-[100px] h-[77px] object-contain shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
