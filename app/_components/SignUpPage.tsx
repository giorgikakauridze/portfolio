"use client";
import React from "react";
import SignUpInput from "../_components/SignUpInput";
import ButtonMain from "../_components/ButtonMain";
import { createUser } from "../_lib/actions";
import { useMyContext } from "../_context/context";
import SuccesSvg from "../svgs/successSvg";
import LoginModal from "../_components/LoginModal";
import { redirect, useRouter } from "next/navigation";
const SignUpPage = () => {
  const { inputCheck } = useMyContext();

  return (
    <>
      <form action={createUser}>
        <div className="pt-20">
          <div className="opacity-50 flex justify-center font-[1000] text-3xl">
            {" "}
            Registration form
          </div>

          <SignUpInput>Paypal</SignUpInput>

          <div className=" flex justify-center mt-10">
            <ButtonMain active={inputCheck} type="primary" onClick={() => {}}>
              Sign account
            </ButtonMain>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpPage;
