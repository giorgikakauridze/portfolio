"use client";
import ButtonMain from "@/app/_components/ButtonMain";
import SuccessSvg from "@/app/svgs/successSvg";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useMyContext } from "../_context/context";
import SpinnerComponent from "./Spinner";

const SuccessTransaction = () => {
  const router = useRouter();
  const {
    coins,
    selectedPayment,
    selectedCrypto,
    withdrawAmount,
    isLoading,
    setIsLoading,
  } = useMyContext();

  const currentCrypto = coins.filter((coin) => coin.name === selectedCrypto);
  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  const selectedPaymentOptimized =
    selectedPayment === "Bank / Wire transfer " ? "Bank" : selectedPayment;

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center pt-96">
          <SpinnerComponent />
        </div>
      ) : (
        <div className="pt-48">
          <div className="mobile:pl-3 mobile:pr-3 flex flex-col gap-7 items-center justify-center font-[1000] text-3xl">
            <SuccessSvg />
            <div className="opacity-70">
              ${" "}
              {Math.floor(currentCrypto[0]?.price * +withdrawAmount).toString()}{" "}
              has been successfully sent to your {selectedPaymentOptimized}
            </div>
            <div className="opacity-70">
              it may take up to 1-2 business days to arrive
            </div>
            <div className="flex gap-5">
              <ButtonMain
                active={true}
                type="primary"
                onClick={() => router.push("/")}
              >
                Go back
              </ButtonMain>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessTransaction;
