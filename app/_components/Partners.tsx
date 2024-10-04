"use client";
import React from "react";
import BinanceSvg from "../svgs/binanceSvg";
import VisaSvg from "../svgs/visaSvg";
import MastercardSvg from "../svgs/mastercardSvg";
import PaypalSvg from "../svgs/paypalSvg";
import ZenSvg from "../svgs/zenSvg";
import VenmoSvg from "../svgs/venmoSvg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Partners = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once when it enters the viewport
    threshold: 0.2, // triggers when 20% of the component is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} // Conditional animation
      transition={{
        delay: 0,
        ease: [0.71, 0.2, 0.2, 1.01],
        duration: 1.5,
      }}
    >
      <div className="flex flex-col text-center pt-5 pb-16 bg-[rgba(29,27,64,0.46)]  rounded-[24px] shadow-2xl hover:shadow-black  transition-shadow duration-300 ease-in-out">
        <div className="font-[1000]  pt-5 text-2xl">OUR PARTNERS</div>
        <div className="mobile:grid mobile:pl-5 mobile:pt-10 mobile:gap-28  mobile:grid-cols-2  flex gap-16 pt-20 justify-center">
          <BinanceSvg />
          <VisaSvg />
          <MastercardSvg />
          <ZenSvg />
          <VenmoSvg />
          <PaypalSvg />
        </div>
      </div>
    </motion.div>
  );
};

export default Partners;
