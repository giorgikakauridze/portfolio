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
import React from "react";
import InputComponentForCrypto from "@/app/_components/InputComponentForCrypto";
import { createWithdraw } from "@/app/_lib/actions";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import BinanceSvg from "@/app/svgs/binanceSvg";
import SpinnerComponent from "@/app/_components/Spinner";

const WithdrawPage = () => {
  const {
    paymentDetails,
    withdrawAmount,
    selectedCrypto,
    selectedPayment,
    accumulatedBalance,
    coins,
    balance,
    setIsLoading,
    isLoading,
    isLogged,
  } = useMyContext();
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
  ];

  const handleLogin = async (formData: FormData) => {
    try {
      const result = await createWithdraw(formData);

      if (result.success) {
        return router.push("/account/withdraw/success");
      }
    } catch (err) {
      throw new Error(`Something went wrong: ${err}`);
    }
  };

  return (
    <form action={handleLogin}>
      {isLoading ? (
        <div className="flex items-center justify-center pt-96">
          <SpinnerComponent />
        </div>
      ) : (
        <div className="pt-36">
          <div className="flex pb-16 text-2xl justify-center  font-[1000]">
            Withdrawable Balance: {accumulatedBalance} $
          </div>
          <div className="mobile:flex-col mobile:gap-5  flex items-center justify-around">
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
              ) : (
                ""
              )}
            </div>
            <div className="mobile:justify-center mobile:items-start mobile:gap-5 flex  w-96 justify-between items-center">
              {selectedCrypto ? (
                <>
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
                  </div>
                  <div className="font-[1000] text-[16px]">
                    ≈ {currentCrypto[0].price} USD
                  </div>
                  <PopOver />
                </>
              ) : (
                <PopOver />
              )}
            </div>
          </div>
          {selectedCrypto ? (
            <div className="mobile:justify-center flex justify-around ">
              <div></div>
              <div className="font-[1000] pt-8">
                Avaliable:{" "}
                <span className="font-[1000]">
                  {Number(avaliableCrypto.toFixed(6))} {currentCrypto[0].name} ≈{" "}
                  {Math.floor(currentCrypto[0].price * avaliableCrypto)} USD
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
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
  );
};

export default WithdrawPage;
