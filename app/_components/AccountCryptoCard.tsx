"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import SnippetUI from "./Snippet";
import ButtonMain from "./ButtonMain";
import Line from "./Line";
import { useRouter } from "next/navigation";
import TableComponent from "./TableComponent";
import { useMyContext } from "../_context/context";
import { motion } from "framer-motion";
import { supabase } from "../_lib/supabase";

interface Coin {
  name: string;
  price: number;
  logo: StaticImageData;
  fullName: string;
  id: number;
  gain: string;
  address: string;
}

interface CryptoCardProps {
  coin: Coin;
}
interface ChildrenProps {
  type: string;
  crypto: string;
  amount: number;
  address: string;
  status: string;
  id: number;
  userId: number;
}
const AccountCryptoCard: React.FC<CryptoCardProps> = ({ coin }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { balance } = useMyContext();
  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  const correctCrypto = balance.filter((el) => el.name === coin.name);

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

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <div
        className={`mt-10 ${
          isOpen ? "rounded-b-none" : ""
        }  p-8  bg-[rgba(29,27,64,0.46)]  rounded-[24px] shadow-2xl hover:shadow-black  transition-shadow duration-300 ease-in-out`}
      >
        <div className="mobile:flex-col mobile:gap-5 flex items-center justify-between verybig:text-medium text-xl  ">
          <div className="flex 1700:text-[14px] verybig:gap-20   gap-28 items-center">
            <Image width={60} height={60} alt="btc" src={coin.logo} />
            <div className="w-10">
              <div className="font-[1000] pb-1"> {coin.name}</div>
              <div className="text-[18px]">{coin.fullName}</div>
            </div>
            <div className="font-[700]">
              Total: {Math.round(correctCrypto[0].total * coin.price)}$ ≈{" "}
              {Number(correctCrypto[0].total.toFixed(6))} {coin.name}
            </div>
          </div>
          <div className="mobile:gap-2 flex items-center gap-10">
            <div className="flex items-center gap-5">
              <SnippetUI>{coin.address}</SnippetUI>
            </div>
            <div className="flex gap-5">
              <ButtonMain
                active={true}
                type="primary"
                onClick={() => router.push("/account/withdraw")}
              >
                Withdraw
              </ButtonMain>
              <div>
                <ButtonMain
                  active={true}
                  type="primary"
                  onClick={isOpenHandler}
                >
                  Transactions
                </ButtonMain>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen ? (
        <motion.div
          className="box"
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <TableComponent coin={coin} transactions={transactions} />
        </motion.div>
      ) : (
        <Line />
      )}
    </>
  );
};

export default AccountCryptoCard;
