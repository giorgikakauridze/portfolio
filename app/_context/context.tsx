// context.tsx
"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import btc from "../images/btc.png";
import eth from "../images/eth.png";
import usdt from "../images/usdt.png";
import usdc from "../images/usdc.png";
import xrp from "../images/xrp.png";
import solana from "../images/solana.png";
import { StaticImageData } from "next/image";
import { supabase } from "../_lib/supabase";
import toast from "react-hot-toast";

const defaultUser: User = {
  email: "john@example.com",
  password: "password",
  fullName: "John Smith",
  id: 1,
};

interface Coin {
  id: number;
  name: string;
  price: number;
  gain: string;
  logo: StaticImageData;
  fullName: string;
  address: string;
}

const defaultCryptoData: CryptoData = {
  BTC: { USD: 0, EUR: 0 },
  ETH: { USD: 0, EUR: 0 },
  XRP: { USD: 0, EUR: 0 },
  USDT: { USD: 0, EUR: 0 },
  USDC: { USD: 0, EUR: 0 },
  SOL: { USD: 0, EUR: 0 },
};
interface Currency {
  USD: number;
  EUR: number;
}
interface CryptoData {
  BTC: Currency;
  ETH: Currency;
  XRP: Currency;
  USDT: Currency;
  USDC: Currency;
  SOL: Currency;
}

interface User {
  id: number;
  email: string;
  password: string;
  fullName: string;
}
interface Transactions {
  crypto: string;
  userId: number;
  id: number;
  address: string;
  type: string;
  amount: number;
  status: string;
}

// Define the shape of your context
interface MyContextType {
  transactions: Transactions[];
  setTransactions: React.Dispatch<React.SetStateAction<Transactions[]>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  selectedPayment: string;
  setSelectedPayment: React.Dispatch<React.SetStateAction<string>>;
  inputCheck: boolean;
  setInputCheck: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCrypto: string;
  setSelectedCrypto: React.Dispatch<React.SetStateAction<string>>;
  coins: Coin[];
  isLoading: boolean;
  withdrawAmount: string;
  setWithdrawAmount: React.Dispatch<React.SetStateAction<string>>;
  isLogged: boolean; // Replace 'YourStateType' with the actual type
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  cryptoData: CryptoData;
  setCryptoData: React.Dispatch<React.SetStateAction<CryptoData>>;
  paymentDetails: string;
  setPaymentDetails: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context with a default value
const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [paymentDetails, setPaymentDetails] = useState<string>("");
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [user, setUser] = useState<User>(defaultUser);
  const [inputCheck, setInputCheck] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [cryptoData, setCryptoData] = useState<CryptoData>(defaultCryptoData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedCrypto, setSelectedCrypto] = useState<string>("");
  const [withdrawAmount, setWithdrawAmount] = useState<string>("");
  const coins = [
    {
      id: 1,
      fullName: "Bitcoin",
      name: "BTC",
      price: cryptoData.BTC.USD,
      gain: "1.65",
      logo: btc,
      address: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    },
    {
      id: 2,
      fullName: "Ethereum",
      name: "ETH",
      price: cryptoData.ETH.USD,
      gain: "2.15",
      logo: eth,
      address: "0x3fA1Dcb1b5e8C87b7C1F9f84972322e7BcFc9915",
    },
    {
      id: 3,
      fullName: "Thether USDT",
      name: "USDT",
      price: cryptoData.USDT.USD,
      gain: "0.05",
      logo: usdt,
      address: "0x2F2a6b3A9F9385Dd13E64b9A6cA601F5DDBA3b56",
    },
    {
      id: 4,
      fullName: "Solana",
      name: "SOL",
      price: cryptoData.SOL.USD,
      gain: "3.36",
      logo: solana,
      address: "5K3dZbcRgDPtVkg2YgHs3NmAVmeRKr9xAvZqwaZZQTRs",
    },
    {
      id: 5,
      fullName: "USDC",
      name: "USDC",
      price: cryptoData.USDC.USD,
      gain: "0.03",
      logo: usdc,
      address: "0x89D24A6b4CcB1B6fAA2625fE562bDD9a23260359",
    },
    {
      id: 6,
      fullName: "XRP",
      name: "XRP",
      price: cryptoData.XRP.USD,
      gain: "2.65",
      logo: xrp,
      address: "r3KMx4rR1FjBLD3xWfVKtrKBRmUMsLNe4m",
    },
  ];

  useEffect(() => {
    const cryptos = async () => {
      const res = await fetch(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,USDT,USDC,SOL&tsyms=USD,EUR&api_key=7704062ed4e57a816b179be51defae085cbf4dc477fae13dab3b14c96d47c2cc"
      );
      const data = await res.json();
      setCryptoData(data);
      setIsLoading(false);
    };
    cryptos();
  }, [setIsLoading]);

  useEffect(() => {
    type CryptoTransaction = {
      id: number;
      amount: number;
      type: string;
      address: string;
      status: string;
      crypto: string;
      userId: number;
    };

    type SupabaseInsertPayload = {
      new: CryptoTransaction;
    };

    const channel = supabase
      .channel("crypto-transactions-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "CryptoTransactions" },
        (payload: SupabaseInsertPayload) => {
          const newTransaction = payload.new;
          if (newTransaction.type === "Deposit")
            toast.success(
              `Deposit of ${newTransaction.amount} ${newTransaction.crypto} has been confirmed!`,
              {
                style: {
                  background: "rgb(87, 55, 173)",
                  color: "white",
                  padding: "20px",
                  gap: "20px",
                },
                duration: 5000,
              }
            );
          if (newTransaction.type === "Withdraw")
            toast.success(
              `Withdraw of ${newTransaction.amount} ${
                newTransaction.crypto
              } on ${newTransaction.address.split(":")[0]} has been confirmed!`,
              {
                style: {
                  fontSize: "16px",
                  background: "rgb(87, 55, 173)",
                  color: "white",
                  padding: "20px",
                  gap: "20px",
                },
                duration: 5000,
              }
            );
          setTransactions((prev) => [...prev, newTransaction]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <MyContext.Provider
      value={{
        cryptoData,
        paymentDetails,
        setPaymentDetails,
        withdrawAmount,
        setWithdrawAmount,
        transactions,
        setTransactions,
        selectedPayment,
        setSelectedPayment,
        user,
        setUser,
        setIsLoading,
        isLoading,
        inputCheck,
        setInputCheck,
        selectedCrypto,
        setSelectedCrypto,
        isLogged,
        setIsLogged,

        setCryptoData,
        coins,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

// Custom hook for using the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
