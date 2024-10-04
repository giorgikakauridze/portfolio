"use client";
import React from "react";
import AccountCryptoCard from "../_components/AccountCryptoCard";
import { useMyContext } from "../_context/context";
import SpinnerComponent from "../_components/Spinner";
import Line from "../_components/Line";
import { motion } from "framer-motion";

const AccountPage = () => {
  const { setIsLoading, isLoading, accumulatedBalance, isLogged, coins } =
    useMyContext();
  if (!isLogged) {
    setIsLoading(true);
  }
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {isLoading ? (
        <div className="flex items-center justify-center pt-96">
          <SpinnerComponent />
        </div>
      ) : (
        <div>
          <div className="  flex text-2xl justify-center pt-36 font-[1000]">
            <span className="opacity-75"> Account Balance: </span>
            <span className="ml-5 opacity-80"> $ {accumulatedBalance}</span>
          </div>
          <Line />
          {coins.map((coin) => (
            <AccountCryptoCard coin={coin} key={coin.id} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default AccountPage;
