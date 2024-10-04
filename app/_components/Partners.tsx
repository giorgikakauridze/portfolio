"use client";
import React from "react";
import BinanceSvg from "../svgs/binanceSvg";
import VisaSvg from "../svgs/visaSvg";
import MastercardSvg from "../svgs/mastercardSvg";
import PaypalSvg from "../svgs/paypalSvg";
import ZenSvg from "../svgs/zenSvg";
import VenmoSvg from "../svgs/venmoSvg";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
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
