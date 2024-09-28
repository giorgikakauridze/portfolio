import Image, { StaticImageData } from "next/image";
import React from "react";
interface Coin {
  name: string;
  price: number;
  logo: StaticImageData;
  id: number;
  gain: string;
}

interface CryptoCardProps {
  coin: Coin;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ coin }) => {
  return (
    <div className="bg-[rgb(29,27,64)]  rounded-[24px] shadow-2xl hover:shadow-black  transition-shadow duration-300 ease-in-out w-[200px] h-[200px]  mobile:w-[180px] mobile:h-[200px]">
      <div className="pl-8 pt-5">
        <Image width={50} height={50} alt="btc" src={coin.logo} />
      </div>
      <div className="pl-6 pt-4 font-[600]">
        <div className="font-bold pb-1">{coin.name}</div>
        <div className="opacity-65">USD {coin.price}</div>
        <div className="font-[1000] pt-4 text-xl text-[rgb(7,133,81)]">
          + {coin.gain}%
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
