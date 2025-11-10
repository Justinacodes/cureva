import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../src/assets/images/cureva-landing.jpg";
import SearchInput from "./SearchInput";

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-cover bg-center flex items-center font-sans page-container"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-white/10"></div>

            <div className="max-w-7xl mt-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 text-left"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-950 leading-tight mb-6 drop-shadow-lg">
                        Your Health Is Our Priority Anywhere, <br /> Anytime
                    </h1>
                    <p className="text-lg text-blue-950 mb-8 drop-shadow-md">
                        Discover a seamless way to connect with healthcare services, curated to bring convenience and peace of mind to your daily life.</p>
                    <SearchInput />
                   
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
