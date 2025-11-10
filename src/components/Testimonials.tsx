import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

import person1 from "../assets/images/testimonial.png";
import person2 from "../assets/images/testimonial.png";
import person3 from "../assets/images/testimonial.png";
import person4 from "../assets/images/testimonial.png";
import person5 from "../assets/images/testimonial.png";

interface Testimonial {
  text: string;
  name: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "This app has changed my life so much. I can finally pretend to know what I am doing.",
    name: "Orlando Diggs",
    image: person1,
  },
  {
    text: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Cureva.",
    name: "Orlando Diggs",
    image: person2,
  },
  {
    text: "This app has changed my life so much. I can finally pretend to know what I am doing.",
    name: "Orlando Diggs",
    image: person3,
  },
  {
    text: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Cureva.",
    name: "Orlando Diggs",
    image: person4,
  },
  {
    text: "This app has changed my life so much. I can finally pretend to know what I am doing.",
    name: "Orlando Diggs",
    image: person5,
  },
];

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index + 3 < testimonials.length) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="bg-lightblue py-20 font-sans page-container overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
        Trusted by Thousands, Loved by Patients
      </h2>

      {/* Carousel Container */}
      <div className="relative">
        <motion.div
          className="flex gap-6 transition-transform duration-500 ease-out"
          animate={{ x: `-${index * (100 / 3)}%` }} 
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="shrink-0 bg-white rounded-2xl shadow-md p-6 w-full md:w-1/3"
            >
              {/* Stars */}
              <div className="flex justify-start mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="text-yellow-400 fill-yellow-400 w-5 h-5"
                  />
                ))}
              </div>

              <p className="text-gray italic mb-6">“{t.text}”</p>

              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-primary">
                  {t.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
        <div className="flex justify-center items-center mt-10 gap-3">
          <button
            onClick={prev}
            disabled={index === 0}
            className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition ${
              index === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2">
            {Array.from({ length: testimonials.length - 2 }).map((_, dotIdx) => (
              <div
                key={dotIdx}
                onClick={() => setIndex(dotIdx)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                  index === dotIdx ? "bg-primary" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={next}
            disabled={index + 3 >= testimonials.length}
            className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition ${
              index + 3 >= testimonials.length ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
