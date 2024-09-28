"use client";
import React, { useState } from "react";
import ButtonMain from "./ButtonMain";
import LoginModal from "./LoginModal";
import { useMyContext } from "../_context/context";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Hero = () => {
  const router = useRouter();

  const { isLogged } = useMyContext();
  return (
    <div className="w-[26rem] mobile:w-20 flex items-center justify-center">
      <h1 className="text-4xl mobile:text-2xl  ">
        <div className="font-[1000]">
          Buy and trade cryptos like never before.
        </div>
        <div className="text-[24px] pt-5">
          We provide fastest in-app transactions{" "}
        </div>
        <div className="pt-8 flex gap-6">
          <ButtonMain
            active={true}
            type="primary"
            onClick={() => router.push("/tokens")}
          >
            Explore Crypto
          </ButtonMain>

          {isLogged ? (
            <ButtonMain
              active={true}
              type="primary"
              onClick={() => router.push("/account")}
            >
              Portfolio
            </ButtonMain>
          ) : (
            <LoginModal />
          )}
        </div>
      </h1>
    </div>
  );
};

export default Hero;
