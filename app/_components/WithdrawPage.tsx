"use client";
import ButtonMain from "@/app/_components/ButtonMain";
import InputComponent from "@/app/_components/InputComponent";
import PopOver from "@/app/_components/PopOver";
import SelectComponent from "@/app/_components/SelectComponent";
import { useMyContext } from "@/app/_context/context";
import MastercardSvg from "@/app/svgs/mastercardSvg";
import PaypalSvg from "@/app/svgs/paypalSvg";
import VisaSvg from "@/app/svgs/visaSvg";
import VenmoSvg from "@/app/svgs/venmoSvg";
import WireTransferSvg from "@/app/svgs/wireTransferSvg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InputComponentForCrypto from "@/app/_components/InputComponentForCrypto";
import { createWithdraw } from "@/app/_lib/actions";
import { useRouter } from "next/navigation";
import BinanceSvg from "@/app/svgs/binanceSvg";
import WechatSvg from "@/app/svgs/wechatSvg";
import AlipaySvg from "@/app/svgs/alipaySvg";
import SpinnerComponent from "@/app/_components/Spinner";
import { motion } from "framer-motion";
import { supabase } from "../_lib/supabase";
import Line from "./Line";
import TabsComponent from "./TabsComponent";

interface ChildrenProps {
  type: string;
  crypto: string;
  amount: number;
  address: string;
  status: string;
  id: number;
  userId: number;
}

const WithdrawPage = () => {
  // TEST
  const {
    paymentDetails,
    withdrawAmount,
    selectedCrypto,
    selectedPayment,
    setIsLoading,
    cryptoData,
    isLoading,
    isLogged,
    coins,
  } = useMyContext();
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

  const router = useRouter();
  const currentCrypto = coins.filter((coin) => coin.name === selectedCrypto);
  const avaliableCrypto = balance.filter(
    (el) => el.name === currentCrypto[0]?.name
  )[0]?.total;
  if (!isLogged) setIsLoading(true);
  const payments = [
    {
      name: "Binance",
    },
    {
      name: "Paypal",
    },
    {
      name: "Bank / Wire transfer ",
    },
    {
      name: "Venmo",
    },
    {
      name: "Visa",
    },
    {
      name: "Mastercard",
    },
    { name: "WeChat" },
    { name: "Alipay" },
  ];

  const handleWithdraw = async (formData: FormData) => {
    const userId = localStorage.getItem("UserID");
    try {
      const result = await createWithdraw(formData, userId);

      if (result.success) {
        return router.push("/account/withdraw/success");
      }
    } catch (err) {
      throw new Error(`Something went wrong: ${err}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <form action={handleWithdraw}>
        {isLoading ? (
          <div className="flex items-center justify-center pt-96">
            <SpinnerComponent />
          </div>
        ) : (
          <div className="pt-16">
            <div>
              <div className="flex text-2xl justify-center font-[1000]">
                <div>
                  <span className="opacity-75"> Account Balance: </span>
                  <span className="ml-5 opacity-80">
                    {" "}
                    $ {accumulatedBalance}
                  </span>
                </div>
              </div>
              <Line />
            </div>
            <div className="mobile:flex-col mobile:gap-5 pt-10  flex items-center justify-around">
              <div
                className={`flex items-center gap-5 ${
                  selectedCrypto ? "w-96" : ""
                } `}
              >
                <SelectComponent payments={payments}></SelectComponent>

                {selectedCrypto && selectedPayment === "Mastercard" ? (
                  <MastercardSvg />
                ) : selectedCrypto && selectedPayment === "Visa" ? (
                  <VisaSvg />
                ) : selectedCrypto && selectedPayment === "Paypal" ? (
                  <PaypalSvg />
                ) : selectedCrypto &&
                  selectedPayment === "Bank / Wire transfer " ? (
                  <WireTransferSvg />
                ) : selectedCrypto && selectedPayment === "Venmo" ? (
                  <VenmoSvg />
                ) : selectedCrypto && selectedPayment === "Binance" ? (
                  <BinanceSvg />
                ) : selectedCrypto && selectedPayment === "WeChat" ? (
                  <WechatSvg />
                ) : selectedCrypto && selectedPayment === "Alipay" ? (
                  <AlipaySvg />
                ) : (
                  " "
                )}
              </div>
              <div className="mobile:justify-center mobile:items-start mobile:gap-5 flex  w-96 justify-between items-center">
                {selectedCrypto ? (
                  <>
                    {" "}
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <div className="flex gap-5 items-center">
                        <Image
                          width={50}
                          height={50}
                          alt="coin"
                          src={currentCrypto[0].logo}
                        />
                        <span className="bg-[rgb(40,36,85)] p-3 rounded-xl text-sm font-[1000]">
                          {currentCrypto[0].name}
                        </span>
                      </div>{" "}
                    </motion.div>
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <div className="font-[1000] text-[16px]">
                        ≈ {currentCrypto[0].price} USD
                      </div>
                    </motion.div>
                    <PopOver balance={balance} />
                  </>
                ) : (
                  <PopOver balance={balance} />
                )}
              </div>
            </div>
            {selectedCrypto ? (
              <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="mobile:justify-center flex justify-around ">
                  <div></div>
                  <div className="font-[1000] pt-8">
                    Avaliable:{" "}
                    <span className="font-[1000]">
                      {Number(avaliableCrypto.toFixed(6))}{" "}
                      {currentCrypto[0].name} ≈{" "}
                      {Math.floor(currentCrypto[0].price * avaliableCrypto)} USD
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              ""
            )}{" "}
            <div className="mobile:flex-col mobile:gap-5 flex items-center mt-8 justify-around">
              <InputComponent>{selectedPayment}</InputComponent>
              <div
                className={`${
                  currentCrypto[0]?.name ? "" : "opacity-0"
                }  flex gap-8 w-96 items-center`}
              >
                {currentCrypto[0] && selectedPayment ? (
                  <InputComponentForCrypto avaliableBalance={avaliableCrypto}>
                    {currentCrypto[0]?.name}
                  </InputComponentForCrypto>
                ) : null}
              </div>
            </div>
            <div className="flex justify-center mt-10">
              {currentCrypto[0]?.name ? (
                <ButtonMain
                  active={
                    +withdrawAmount <= avaliableCrypto &&
                    +withdrawAmount > 0.00005 &&
                    paymentDetails.length > 3
                      ? true
                      : false
                  }
                  type="primary"
                  onClick={() => console.log("")}
                >
                  {"Withdraw ( $" +
                    Math.floor(
                      currentCrypto[0]?.price * +withdrawAmount
                    ).toString() +
                    " )"}
                </ButtonMain>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default WithdrawPage;
