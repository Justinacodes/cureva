import { Mail, Facebook, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import curevalogo from "../assets/images/Cureva-logo2.png"
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
    return (
        <motion.footer className="bg-primary text-white font-sans py-12 page-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
                <div>
                    <img src={curevalogo} alt="Cureva" className="w-28 mb-3" />
                    <p>42, Olurumbi Avenue, FCT.</p>
                    <p>Contact@cureva.com</p>
                </div>

                
                <div className="flex flex-col gap-2 text-sm">
                    <h4 className="font-semibold mb-2">ABOUT US</h4>
                    <a href="#" className="hover:underline">
                        CATEGORIES
                    </a>
                    <a href="#" className="hover:underline">
                        PARTNER HOSPITALS
                    </a>
                    <a href="#" className="hover:underline">
                        FAQs
                    </a>
                </div>


                <div className="bg-white rounded-2xl p-3">
                    <h4 className="font-semibold my-3 text-primary mx-5">Join our mailing list. Be the first to know about new offers and discounts.</h4>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-3 mx-3 p-3 max-w-sm"
                    >
                        <input
                            type="text"
                            placeholder="Your first name"
                            className="w-full p-2 rounded-lg text-black border-gray border-1 focus:outline-none text-sm"
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full p-2 rounded-lg text-black border-gray border-1 focus:outline-none text-sm"
                        />

                        <button className="w-full flex items-center justify-center gap-2 border-2 border-primary bg-white text-primary  hover:bg-primary hover:text-white transition rounded-3xl py-2 text-sm font-medium mb-3"> Join Now

                            <span><ArrowUpRight className="w-4 h-4 text-primary" /></span>
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t rounded-2xl border-white mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
                <p>ALL RIGHTS RESERVED. COPYRIGHT © 2025 LTD</p>
                <div className="flex gap-7">
                    <a href="#privacypol">PRIVACY POLICY</a>
                    <a href="terms">TERMS & CONDITIONS</a>
                </div>


                <div className="flex gap-4 mt-3 md:mt-0">
                    <Facebook className="w-4 h-4 hover:text-primary cursor-pointer rounded-2xl" />
                    <Twitter className="w-4 h-4 hover:text-primary cursor-pointer rounded-2xl" />
                    <Instagram className="w-4 h-4 hover:text-primary cursor-pointer rounded-2xl" />
                </div>
            </div>
        </motion.footer>
    );
};
