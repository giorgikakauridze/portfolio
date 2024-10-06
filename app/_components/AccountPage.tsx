"use client";
import React, { useEffect, useState } from "react";
import AccountCryptoCard from "../_components/AccountCryptoCard";
import { useMyContext } from "../_context/context";
import SpinnerComponent from "../_components/Spinner";
import Line from "../_components/Line";
import { motion } from "framer-motion";
import { supabase } from "../_lib/supabase";

interface ChildrenProps {
  type: string;
  crypto: string;
  amount: number;
  address: string;
  status: string;
  id: number;
  userId: number;
}
const AccountPage = () => {
  const { setIsLoading, cryptoData, isLoading, isLogged, coins } =
    useMyContext();
  const [transactions, setTransactions] = useState<ChildrenProps[]>([]);

  const fetchTransactions = async () => {
    const userID = localStorage.getItem("UserID");
    if (userID) {
      try {
        const { data, error } = await supabase
          .from("CryptoTransactions")
          .select("*");

        if (error) throw error;

        const filteredTransactions = data.filter(
          (transc) => transc.userId === +userID
        );

        setTransactions(filteredTransactions || []); // Set transactions
      } catch (err) {
        console.error("Error fetching transactions:", err);
      }
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const balance = [
    {
      name: "BTC",
      total:
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "BTC" && transaction.type === "Deposit"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0) -
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "BTC" && transaction.type === "Withdraw"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0),
    },
    {
      name: "ETH",
      total:
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "ETH" && transaction.type === "Deposit"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0) -
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "ETH" && transaction.type === "Withdraw"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0),
    },
    {
      name: "USDT",
      total:
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "USDT" && transaction.type === "Deposit"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0) -
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "USDT" && transaction.type === "Withdraw"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0),
    },
    {
      name: "SOL",
      total:
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "SOL" && transaction.type === "Deposit"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0) -
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "SOL" && transaction.type === "Withdraw"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0),
    },
    {
      name: "XRP",
      total:
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "XRP" && transaction.type === "Deposit"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0) -
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "XRP" && transaction.type === "Withdraw"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0),
    },
    {
      name: "USDC",
      total:
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "USDC" && transaction.type === "Deposit"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0) -
        transactions
          .filter(
            (transaction) =>
              transaction.crypto === "USDC" && transaction.type === "Withdraw"
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0),
    },
  ];

  const balancesArray = balance.map((crypto) =>
    crypto.name === "BTC"
      ? crypto.total * cryptoData.BTC.USD
      : crypto.name === "ETH"
      ? crypto.total * cryptoData.ETH.USD
      : crypto.name === "USDT"
      ? crypto.total * 1
      : crypto.name === "SOL"
      ? crypto.total * cryptoData.SOL.USD
      : crypto.name === "USDC"
      ? crypto.total * 1
      : crypto.name === "XRP"
      ? crypto.total * cryptoData.XRP.USD
      : 0
  );

  const accumulatedBalance = Math.floor(
    balancesArray.reduce((acc, cur) => acc + cur, 0)
  );

  if (!isLogged) {
    setIsLoading(true);
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0,
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
            <AccountCryptoCard
              balance={balance}
              transactions={transactions}
              coin={coin}
              key={coin.id}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default AccountPage;
