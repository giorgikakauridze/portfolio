"use client";
import React from "react";
import SignUpInput from "../_components/SignUpInput";
import ButtonMain from "../_components/ButtonMain";
import { createUser } from "../_lib/actions";
import { useMyContext } from "../_context/context";
import { motion } from "framer-motion";

const SignUpPage = () => {
  const { inputCheck } = useMyContext();

  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
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
    </motion.div>
  );
};

export default SignUpPage;
