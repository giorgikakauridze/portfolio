"use client";

import { useRouter } from "next/navigation";
import ButtonMain from "./_components/ButtonMain";

const Error = () => {
  const router = useRouter();

  return (
    <div className="font-[1000] flex-col text-4xl flex gap-5 items-center mt-96 ">
      <div>Error: Try Again</div>
      <ButtonMain active={true} type="primary" onClick={() => router.push("/")}>
        Go Back
      </ButtonMain>
    </div>
  );
};

export default Error;
