"use client";
import React from "react";
import LogoSvg from "../svgs/logoSvg";
import VisaSvg from "../svgs/visaSvg";
import MastercardSvg from "../svgs/mastercardSvg";
import HeadPhonesSvg from "../svgs/headphonesSvg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentPath = usePathname();

  return (
    <>
      <footer className="1700:flex-col  mt-40 flex items-center justify-around text-white  bg-[rgb(29,27,64)] text-xl mobile:text-sm">
        <div>
          <div className="mobile:gap-10 flex items-center gap-20 mobile:pr-0 pr-[25svh] pt-10 pb-10">
            <LogoSvg />
            <div className="flex gap-7 ">
              <Link href="/">
                <span
                  className={`${
                    currentPath === "/" ? "text-[rgb(108,107,158)]" : ""
                  } text-xl`}
                >
                  Home
                </span>
              </Link>
              <Link href="/about" className="mobile:hidden">
                <span
                  className={`${
                    currentPath === "/about" ? "text-[rgb(108,107,158)]" : ""
                  } text-xl`}
                >
                  About
                </span>
              </Link>
              <Link href="/blog">
                <span
                  className={`${
                    currentPath === "/blog" ? "text-[rgb(108,107,158)]" : ""
                  } text-xl`}
                >
                  Blog
                </span>
              </Link>
              <Link href="/tokens">
                <span
                  className={`${
                    currentPath === "/tokens" ? "text-[rgb(108,107,158)]" : ""
                  } text-xl`}
                >
                  Tokens
                </span>
              </Link>
            </div>
          </div>
          <div className=" pb-20 font-[500]">
            Copyright By CoinStonks © 2015-2024 , Powered By Blockchain
          </div>
        </div>
        <div className="1700:hidden flex gap-7 items-center">
          <div className="flex mr-10 gap-3">
            <HeadPhonesSvg />
            <span>support@coinstonk.com</span>
          </div>
          <VisaSvg />
          <MastercardSvg />
        </div>
        <div className="hidden 1700:gap-0 1700:flex flex-col gap-5 items-center">
          <div className="flex mr-10 gap-3">
            <HeadPhonesSvg />
            <span>support@coinstonk.com</span>
          </div>
          <VisaSvg />
        </div>
      </footer>
    </>
  );
};

export default Footer;
