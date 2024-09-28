import React from "react";
import AboutCard from "../_components/AboutCard";
import OpenSourceSvg from "../svgs/openSourceSvg";
import DecentrelizedSvg from "../svgs/decentrelizedSvg";
import TransparentSvg from "../svgs/transparentSvg";
import CommunityDriven from "../svgs/communityDrivenSvg";

export const metadata = { title: "Crypto: About" };
const page = () => {
  return (
    <div className="verybig:ml-10 verybig:mr-10 ml-36 mr-36">
      <div className="pt-36  justify-center flex items-center  flex-col">
        <h1 className="pb-32 font-[1000] text-6xl ">About Crypto</h1>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-[1000] text-4xl ">What drives Crypto?</h1>
        <p className="text-xl pr-32">
          Decentralization , Transparency , Accessibility and Security
        </p>
      </div>
      <div className="  mt-10 grid-cols-2 grid gap-10">
        <AboutCard
          content="Cryptocurrencies like Bitcoin are developed with open-source software, allowing anyone to view, verify, and contribute to the code. This fosters innovation and transparency across the ecosystem."
          header="OPEN SOURCE"
        >
          {<OpenSourceSvg />}
        </AboutCard>
        <AboutCard
          content="Unlike traditional currencies, cryptocurrencies operate without a central authority. Decentralized networks run on thousands of computers, providing autonomy and removing intermediaries like banks or governments."
          header="DECENTRALIZED"
        >
          {<DecentrelizedSvg />}
        </AboutCard>
        <AboutCard
          content="Transactions made on the blockchain are immutable and publicly verifiable. This transparency ensures trust and reduces corruption, as every action is traceable by anyone with access to the blockchain."
          header="TRANSPARENT"
        >
          {<TransparentSvg />}
        </AboutCard>
        <AboutCard
          content="Many cryptocurrencies thrive because of strong community support. Developers, miners, and enthusiasts collaborate to enhance the technology, making decisions through consensus rather than centralized authority."
          header="COMMUNITY DRIVEN"
        >
          {<CommunityDriven />}
        </AboutCard>
      </div>
    </div>
  );
};

export default page;
