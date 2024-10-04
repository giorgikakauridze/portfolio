"use client";
import Image from "next/image";
import React from "react";
import cryptoWorld from "../images/cryptoWorld.png";
import ButtonMain from "../_components/ButtonMain";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Explore = () => {
  const router = useRouter();
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
      <div className="lg:flex justify-between pt-36">
        <div className="mobile:flex mobile:items-center  mobile:flex-col w-[45rem] mobile:w-[100%]">
          <p className="font-[1000] text-2xl pb-5">Our mission :</p>
          <div className="mobile:pl-5 font-[500] text-xl  tracking-wide leading-7">
            As a crypto website, our mission is to empower individuals and
            businesses to navigate the evolving landscape of digital assets with
            confidence and clarity. We aim to provide a user-friendly platform
            that offers accurate, up-to-date information, secure trading
            opportunities, and insightful resources. Our goal is to demystify
            cryptocurrency, making it accessible to everyone, from beginners to
            seasoned investors, while fostering a community of knowledge,
            transparency, and innovation. We are committed to supporting the
            growth of the crypto ecosystem by offering tools, education, and
            services that drive informed decision-making and promote the
            adoption of blockchain technology for a more decentralized and
            equitable future.
          </div>
          <div className="pt-10">
            <ButtonMain
              active={true}
              type="primary"
              onClick={() => router.push("/tokens")}
            >
              Explore Crypto
            </ButtonMain>
          </div>
        </div>
        <Image width={700} alt="World" src={cryptoWorld} />
      </div>
    </motion.div>
  );
};

export default Explore;
