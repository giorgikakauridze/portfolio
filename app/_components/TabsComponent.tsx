"use client";
import { Tabs, Tab } from "@nextui-org/react";
import WithdrawSvg from "../svgs/withdrawSvg";
import DepositSvg from "../svgs/depositSvg";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TabsComponent = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <motion.div
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className=" flex w-full  flex-col">
        <Tabs
          classNames={{
            tab: "px-0",
            tabList: "border-none",
            cursor: "!bg-transparent",
          }}
          aria-label="Options"
          color="secondary"
          variant="bordered"
        >
          <Tab
            className={`${
              pathname === "/account" ? "bg-[rgb(102,57,227)]" : ""
            }`}
            key="deposit"
            title={
              <motion.div
                whileHover={{ scale: 0.96 }}
                initial={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 800 }}
              >
                <Link href={"/account"}>
                  <div className="flex px-3 items-center space-x-2">
                    <DepositSvg />
                    <span className="font-[1000]">Deposit</span>
                  </div>
                </Link>
              </motion.div>
            }
          />

          <Tab
            className={`${
              pathname === "/account/withdraw" ? "bg-[rgb(102,57,227)]" : ""
            }`}
            key="withdraw"
            title={
              <motion.div
                whileHover={{ scale: 0.96 }}
                initial={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 800 }}
              >
                <Link href={"/account/withdraw"}>
                  <div className="flex  px-3 items-center space-x-2">
                    <WithdrawSvg />
                    <span className="font-[1000]">Withdraw</span>
                  </div>
                </Link>
              </motion.div>
            }
          />
        </Tabs>
      </div>
    </motion.div>
  );
};

export default TabsComponent;
