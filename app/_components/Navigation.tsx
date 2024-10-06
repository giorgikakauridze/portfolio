"use client";
import React from "react";
import LogoSvg from "../svgs/logoSvg";
import Link from "next/link";
import ButtonMain from "./ButtonMain";
import LoginModal from "./LoginModal";
import { useMyContext } from "../_context/context";
import { usePathname, useRouter } from "next/navigation";
import AccountSvg from "../svgs/accountSvg";
import { motion } from "framer-motion";
import LineNav from "./LineNav";
import Line from "./Line";

const Navigation = () => {
  const { isLogged, user } = useMyContext();
  const currentPath = usePathname();
  const router = useRouter();

  const userName = user.fullName.split(" ")[0];
  const firstLetter = userName[0].toUpperCase();
  const other = user.fullName.split(" ")[0].slice(1, userName.length);
  const optimizedName = firstLetter + other;

  return (
    <>
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
        {" "}
        <div className="font-semibold mobile:hidden  text-lg flex items-center justify-between">
          <div>
            <Link href="/">
              <motion.div
                whileHover={{ scale: 0.92 }}
                initial={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <LogoSvg />
              </motion.div>
            </Link>
          </div>
          <div className="flex items-center  gap-7 ">
            <Link href="/">
              <span
                className={`${
                  currentPath === "/" ? "text-[rgb(108,107,158)]" : ""
                } text-xl`}
              >
                <motion.div
                  whileHover={{ scale: 0.92 }}
                  initial={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Home
                </motion.div>
              </span>
            </Link>
            <LineNav />
            <Link href="/about">
              <span
                className={`${
                  currentPath === "/about" ? "text-[rgb(108,107,158)]" : ""
                } text-xl`}
              >
                <motion.div
                  whileHover={{ scale: 0.92 }}
                  initial={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  About
                </motion.div>
              </span>
            </Link>
            <LineNav />
            <Link href="/blog">
              <span
                className={`${
                  currentPath === "/blog" ? "text-[rgb(108,107,158)]" : ""
                } text-xl`}
              >
                <motion.div
                  whileHover={{ scale: 0.92 }}
                  initial={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Blog
                </motion.div>
              </span>
            </Link>
            <LineNav />
            <Link href="/tokens">
              <span
                className={`${
                  currentPath === "/tokens" ? "text-[rgb(108,107,158)]" : ""
                } text-xl`}
              >
                <motion.div
                  whileHover={{ scale: 0.92 }}
                  initial={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Tokens
                </motion.div>
              </span>
            </Link>
          </div>
          <div>
            <span
              className={`${
                currentPath === "/account" ? "text-[rgb(108,107,158)]" : ""
              } text-xl flex gap-5 items-center`}
            >
              {isLogged ? (
                <Link href={"/account"}>
                  <div className="flex cursor-pointer items-center gap-5 ">
                    {optimizedName}
                    <div className="bg-[rgb(102,57,228)] p-3 rounded-[50%]">
                      <AccountSvg />
                    </div>
                  </div>
                </Link>
              ) : (
                <>
                  <LoginModal />
                  <ButtonMain
                    active={true}
                    onClick={() => router.push("/signup")}
                    type="primary"
                  >
                    Sign up
                  </ButtonMain>
                </>
              )}
            </span>
          </div>
        </div>
        {/* Mobile nav */}
        <div className="pt-2 lg:hidden flex justify-around">
          <div>
            <Link href="/">
              <LogoSvg />
            </Link>
          </div>
          <div>
            <span
              className={`${
                currentPath === "/account" ? "text-[rgb(108,107,158)]" : ""
              } text-xl flex gap-5`}
            >
              {isLogged ? (
                <Link href={"/account"}>
                  <div className="flex cursor-pointer items-center gap-5 ">
                    {optimizedName}
                    <div className="bg-[rgb(102,57,228)] p-3 rounded-[50%]">
                      <AccountSvg />
                    </div>
                  </div>
                </Link>
              ) : (
                <>
                  <LoginModal />
                  <ButtonMain
                    active={true}
                    onClick={() => router.push("/signup")}
                    type="primary"
                  >
                    Sign up
                  </ButtonMain>
                </>
              )}
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
