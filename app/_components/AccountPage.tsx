"use client";
import React from "react";
import AccountCryptoCard from "../_components/AccountCryptoCard";
import { useMyContext } from "../_context/context";
import SpinnerComponent from "../_components/Spinner";
import Line from "../_components/Line";

const AccountPage = () => {
  const { setIsLoading, isLoading, accumulatedBalance, isLogged, coins } =
    useMyContext();
  if (!isLogged) {
    setIsLoading(true);
  }
  return (
    <>
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
    </>
  );
};

export default AccountPage;
