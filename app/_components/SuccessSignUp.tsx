"use client";
import ButtonMain from "@/app/_components/ButtonMain";
import LoginModal from "@/app/_components/LoginModal";
import SuccessSvg from "@/app/svgs/successSvg";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useMyContext } from "../_context/context";
import SpinnerComponent from "./Spinner";

const SuccessSignUp = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useMyContext();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center pt-96">
          <SpinnerComponent />
        </div>
      ) : (
        <div className="pt-48">
          <div className="flex flex-col gap-10 items-center justify-center font-[1000] text-3xl">
            <SuccessSvg />
            <div className="opacity-70">Succesfully Registered !</div>
            <div className="flex gap-5">
              <ButtonMain
                active={true}
                type="primary"
                onClick={() => router.push("/")}
              >
                Go back
              </ButtonMain>
              <LoginModal />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessSignUp;
