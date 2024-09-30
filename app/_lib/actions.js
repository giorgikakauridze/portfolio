"use server";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export async function createUser(formData) {
  const newUser = {
    email: formData.get("email"),
    fullName: formData.get("fullName"),
    password: formData.get("password"),
  };
  const { data } = await supabase.from("CryptoAppUsers").select("email");
  const duplicate = data.filter((email) => email.email === newUser.email);

  if (duplicate.length) {
    throw new Error("Email already registered");
  }

  const {} = await supabase.from("CryptoAppUsers").insert(newUser);
  redirect("/signup/success");
}

export async function getUsers(formData) {
  const currentLog = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const { data } = await supabase.from("CryptoAppUsers").select("*");

  const isValid = data.filter(
    (user) =>
      user.email === currentLog.email && user.password === currentLog.password
  );
  if (isValid.length) {
    return { success: true, isValid };
  } else {
    throw new Error("Try again later");
  }
}

export async function createWithdraw(formData) {
  let payment = formData.get("paymentMethod");
  let cryptoName;
  for (let [key] of formData.entries()) {
    if (
      key === "BTC" ||
      key === "ETH" ||
      key === "USDT" ||
      key === "USDC" ||
      key === "XRP" ||
      key === "SOL"
    )
      cryptoName = key;
  }

  const newTransaction = {
    address: `${payment.split(" ")[0]}:${formData.get("paymentDetails")}`,
    type: "Withdraw",
    status: "Processing...",
    amount: +formData.get(cryptoName),
    crypto: cryptoName,
  };
  try {
    const {} = await supabase.from("CryptoTransactions").insert(newTransaction);
    return { success: true };
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
