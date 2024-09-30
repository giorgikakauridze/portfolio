"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import SnippetUI from "./Snippet";
import ButtonMain from "./ButtonMain";
import Line from "./Line";
import { useRouter } from "next/navigation";
import TableComponent from "./TableComponent";
import { useMyContext } from "../_context/context";
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
const AccountCryptoCard: React.FC<CryptoCardProps> = ({ coin }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { transactions, balance } = useMyContext();
  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  const correctCrypto = balance.filter((el) => el.name === coin.name);

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
        <TableComponent coin={coin} transactions={transactions} />
      ) : (
        <Line />
      )}
    </>
  );
};

export default AccountCryptoCard;
