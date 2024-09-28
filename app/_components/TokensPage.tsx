"use client";
import React from "react";
import Line from "../_components/Line";
import Link from "next/link";
import BtcTokenSvg from "../svgs/btcTokenSvg";
import LtcTokenSvg from "../svgs/ltcTokenSvg";
import EthTokenSvg from "../svgs/ethTokenSvg";
import TronTokenSvg from "../svgs/tronTokenSvg";

const TokensPage = () => {
  return (
    <>
      <div className="verybig:m-0 ml-36 mr-36">
        <div className="pt-36  justify-center flex items-center ">
          <h1 className="pb-32 font-[1000] text-6xl ">Tokens</h1>
        </div>
        <div className="flex gap-10 font-[1000] justify-between">
          <div className="w-[20%]">
            <div className="">NAME</div>
          </div>
          <div className="w-[20%]">
            <div className="">DESCRIPTION</div>
          </div>{" "}
          <div className="w-[20%]">
            <div className="">MARKET CAP</div>
          </div>{" "}
          <div className="w-[20%]">
            <div className="">VOLUME</div>
          </div>{" "}
          <div className="mobile:hidden">
            <div className="">WEBSITE</div>
          </div>
        </div>
        <Line />
        <div className="flex justify-between">
          <div className="w-[20%] items-center gap-2 flex">
            <div className="bg-white p-2 rounded-[50%]">
              <BtcTokenSvg />
            </div>
            <div className="font-[1000] pl-2">Bitcoin</div>
            <span className="bg-[rgb(40,36,85)] pl-2 pr-2 rounded-xl text-sm font-[1000]">
              BTC
            </span>
          </div>
          <div className="w-[20%] pr-4 items-center gap-2 flex ">
            <span className="mobile:hidden">
              Bitcoin is the first decentralized cryptocurrency, created in
              2009, often seen as digital gold due to its limited supply.
            </span>
          </div>
          <div className="w-[20%] items-center gap-2 flex">
            <div className="font-[1000]">
              <span className="mobile:hidden">$1,138,356,626,577 USD</span>
            </div>
          </div>
          <div className="w-[20%] items-center gap-2 flex">
            <div className="font-[1000]">
              {" "}
              <span className="mobile:hidden">$33,575,886,556 USD</span>
            </div>
          </div>
          <div className=" items-center gap-2 flex">
            <Link href={"https://bitcoin.org/en/"}>
              <div className="font-[1000] hover:text-[rgb(102,57,228)] transition-all ease-in-out text-xl underline decoration-2 underline-offset-4">
                Visit Website
              </div>
            </Link>
          </div>
        </div>
        <Line />
        <div className="flex justify-between">
          <div className="w-[20%] items-center gap-2 flex">
            <div className="bg-white p-2 rounded-[50%]">
              <EthTokenSvg />
            </div>
            <div className="font-[1000] pl-2">Ethereum</div>
            <span className="bg-[rgb(40,36,85)] pl-2 pr-2 rounded-xl text-sm font-[1000]">
              ETH
            </span>
          </div>
          <div className="w-[20%] pr-4 items-center gap-2 flex ">
            <span className="mobile:hidden">
              Ethereum is a decentralized platform enabling smart contracts and
              DApps, widely used for DeFi and NFTs.
            </span>
          </div>
          <div className="w-[20%] items-center gap-2 flex">
            <div className="font-[1000]">
              <span className="mobile:hidden">$278,165,220,106 USD</span>
            </div>
          </div>
          <div className="w-[20%] items-center gap-2 flex">
            <div className="font-[1000]">
              <span className="mobile:hidden">$14,952,723,900 USD</span>
            </div>
          </div>
          <div className=" items-center gap-2 flex">
            <Link href={"https://ethereum.org/en/"}>
              <div className="font-[1000] hover:text-[rgb(102,57,228)] transition-all ease-in-out text-xl underline decoration-2 underline-offset-4">
                Visit Website
              </div>
            </Link>
          </div>
        </div>
        <Line />
        <div className="flex justify-between">
          <div className="w-[20%] items-center gap-2 flex">
            <div className="bg-white p-2 rounded-[50%]">
              <LtcTokenSvg />
            </div>
            <div className="font-[1000] pl-2">Litecoin</div>
            <span className="bg-[rgb(40,36,85)] pl-2 pr-2 rounded-xl text-sm font-[1000]">
              LTC
            </span>
          </div>
          <div className="w-[20%]  pr-4 items-center gap-2 flex ">
            <span className="mobile:hidden">
              Litecoin is a faster, lighter version of Bitcoin, designed for
              quicker transactions and lower fees.
            </span>
          </div>
          <div className="w-[20%] items-center gap-2 flex">
            <div className="font-[1000]">
              <span className="mobile:hidden">$4,674,896,698 USD</span>
            </div>
          </div>
          <div className="w-[20%] items-center gap-2 flex">
            <div className="font-[1000]">
              <span className="mobile:hidden">$356,029,952 USD</span>
            </div>
          </div>
          <div className=" items-center gap-2 flex">
            <Link href={"https://litecoin.org/"}>
              <div className="font-[1000] hover:text-[rgb(102,57,228)] transition-all ease-in-out text-xl underline decoration-2 underline-offset-4">
                Visit Website
              </div>
            </Link>
          </div>
        </div>
        <Line />
        <div className="flex justify-between">
          <div className="w-[20%] items-center gap-2 flex">
            <div className="bg-white p-2 rounded-[50%]">
              <TronTokenSvg />
            </div>
            <div className="font-[1000] pl-2">Tron</div>
            <span className="bg-[rgb(40,36,85)] pl-2 pr-2 rounded-xl text-sm font-[1000]">
              TRX
            </span>
          </div>
          <div className="w-[20%] pr-4 items-center gap-2 flex ">
            <span className="mobile:hidden">
              TRON is a platform for digital content sharing, allowing creators
              to publish without intermediaries.
            </span>
          </div>
          <div className="w-[20%] items-center gap-2 flex">
            <div className="font-[1000]">
              <span className="mobile:hidden">$7,819,407,234 USD</span>
            </div>
          </div>
          <div className="w-[20%] items-center gap-2 flex">
            <div className="font-[1000]">
              <span className="mobile:hidden">$404,154,638 USD</span>
            </div>
          </div>
          <div className=" items-center gap-2 flex">
            <Link href={"https://tron.network/"}>
              <div className="font-[1000] hover:text-[rgb(102,57,228)] transition-all ease-in-out text-xl underline decoration-2 underline-offset-4">
                Visit Website
              </div>
            </Link>
          </div>
        </div>
        <Line />
      </div>
    </>
  );
};

export default TokensPage;
