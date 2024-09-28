import React from "react";
import BinanceSvg from "../svgs/binanceSvg";
import VisaSvg from "../svgs/visaSvg";
import MastercardSvg from "../svgs/mastercardSvg";
import PaypalSvg from "../svgs/paypalSvg";
import ZenSvg from "../svgs/zenSvg";
import VenmoSvg from "../svgs/venmoSvg";

const Partners = () => {
  return (
    <div className="flex flex-col text-center pt-5 pb-16 bg-[rgba(29,27,64,0.46)]  rounded-[24px] shadow-2xl hover:shadow-black  transition-shadow duration-300 ease-in-out">
      <div className="font-[1000]  pt-5 text-2xl">OUR PARTNERS</div>
      <div className="flex gap-16 pt-20 justify-center">
        <BinanceSvg />
        <VisaSvg />
        <MastercardSvg />
        <ZenSvg />
        <VenmoSvg />
        <PaypalSvg />
      </div>
    </div>
  );
};

export default Partners;
