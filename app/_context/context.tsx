"use client";
import { createContext, useContext, ReactNode } from "react";
import NextSvg from "../_svgs/NextSvg";
import TypeScriptSvg from "../_svgs/TypeScriptSvg";
import NextUi from "../_svgs/NextUi";
import ReactSvg from "../_svgs/ReactSvg";
import FramerSvg from "../_svgs/FramerSvg";
import NodeSvg from "../_svgs/NodeSvg";
import TailwindSvg from "../_svgs/TailwindSvg";
import hotdImage from "../../public/hotd.png";
import audiophileImage from "../../public/audiophile.png";
import cryptoapp from "../../public/cryptoapp.png";
import wildOasis from "../../public/wildoasis.png";
import photosnap from "../../public/photosnap.png";
import stamphub from "../../public/stamphub.png";
import pizza from "../../public/pizza.png";
import anisa from "../../public/anisa.jpeg";
import flappingo from "../../public/flappingo.png";
import lucky from "../../public/lucky.jpeg";
import SR from "../../public/SR.jpeg";
import parabl from "../../public/parabl.jpeg";

const projects = [
  {
    id: 245933,
    name: "Standup Republic",
    description: " ",
    siteLink: "https://standup-republic.de/home",
    gitHubLink: "",
    image: SR.src,
    callStack: [
      <NextSvg key={"rame"} />,
      <NextUi key={"rame"} />,
      <ReactSvg key={"rame"} />,
      <TypeScriptSvg key={"rame"} />,
      <FramerSvg key={"rame"} />,
      <NodeSvg key={"rame"} />,
      <TailwindSvg key={"rame"} />,
    ],
  },
  {
    id: 2459,
    name: "Lucky Punch",
    description: " ",
    siteLink: "https://www.luckypunch-comedyclub.de/",
    gitHubLink: "",
    image: lucky.src,
    callStack: [
      <NextSvg key={"rame"} />,
      <NextUi key={"rame"} />,
      <ReactSvg key={"rame"} />,
      <TypeScriptSvg key={"rame"} />,
      <FramerSvg key={"rame"} />,
      <NodeSvg key={"rame"} />,
      <TailwindSvg key={"rame"} />,
    ],
  },

  {
    id: 249,
    name: "Parable Studios",
    description: " ",
    siteLink: "https://events.parable-studios.com/",
    gitHubLink: "",
    image: parabl.src,
    callStack: [
      <NextSvg key={"rame"} />,
      <NextUi key={"rame"} />,
      <ReactSvg key={"rame"} />,
      <TypeScriptSvg key={"rame"} />,
      <FramerSvg key={"rame"} />,
      <NodeSvg key={"rame"} />,
      <TailwindSvg key={"rame"} />,
    ],
  },
  {
    id: 24,
    name: "Flappingo",
    description: " ",
    siteLink: "https://staging.flappingo.com",
    gitHubLink: "",
    image: flappingo.src,
    callStack: [
      <NextSvg key={"rame"} />,
      <NextUi key={"rame"} />,
      <ReactSvg key={"rame"} />,
      <TypeScriptSvg key={"rame"} />,
      <FramerSvg key={"rame"} />,
      <NodeSvg key={"rame"} />,
      <TailwindSvg key={"rame"} />,
    ],
  },
  {
    id: 66,
    name: "Comedy Club Dusseldorf",
    description: " ",
    siteLink: "https://comedyclubduesseldorf.de/",
    gitHubLink: "",
    image: anisa.src,
    callStack: [
      <NextSvg key={"rame"} />,
      <NextUi key={"rame"} />,
      <ReactSvg key={"rame"} />,
      <TypeScriptSvg key={"rame"} />,
      <FramerSvg key={"rame"} />,
      <NodeSvg key={"rame"} />,
      <TailwindSvg key={"rame"} />,
    ],
  },
  {
    id: 2,
    name: "Crypto App",
    description:
      "Stay updated with the latest cryptocurrency prices and trends, all in one place. Crypto App offers real-time updates, detailed charts, and fast, secure transactions, giving you an all-in-one platform to manage and track your favorite cryptocurrencies with ease.",
    siteLink: "https://crytoapp-pi.vercel.app",
    gitHubLink: "https://github.com/giorgikakauridze/CryptoAppPortfolio",
    image: cryptoapp.src,
    callStack: [
      <NextSvg key={"rame"} />,
      <NextUi key={"rame"} />,
      <ReactSvg key={"rame"} />,
      <TypeScriptSvg key={"rame"} />,
      <FramerSvg key={"rame"} />,
      <NodeSvg key={"rame"} />,
      <TailwindSvg key={"rame"} />,
    ],
  },
  {
    id: 4,
    name: "StampHub",
    description:
      "Dive into the fascinating world of stamp collecting with StampHub. This platform allows you to explore, collect, and trade unique stamps from all around the globe. Whether you're a casual hobbyist or a dedicated philatelist, StampHub provides a seamless experience to manage your digital collection.",
    siteLink: "https://www.stamphub.ge/",
    gitHubLink: "https://github.com/datoiashvili713/stamphub-v2",
    image: stamphub.src,
    callStack: [
      <NextUi key={"rame"} />,
      <TypeScriptSvg key={"rame"} />,
      <NextSvg key={"rame"} />,
      <TailwindSvg key={"rame"} />,
      <FramerSvg key={"rame"} />,
      <ReactSvg key={"rame"} />,
      <NodeSvg key={"rame"} />,
    ],
  },
  {
    id: 1,
    name: "Movie App",
    description:
      "Discover an extensive collection of the latest movies and TV series, with detailed information and trailers. Whether you’re into action, drama, or documentaries, Movie App allows you to browse by genre, year, and ratings, making it easy to find something great to watch.",
    siteLink: "https://netflixy-gk.vercel.app/",
    gitHubLink: "https://github.com/giorgikakauridze/Netflixy",
    image: hotdImage.src,
    callStack: [
      <NextUi key={"rame"} />,
      <TypeScriptSvg key={"rame"} />,
      <NextSvg key={"rame"} />,
      <TailwindSvg key={"rame"} />,

      <ReactSvg key={"rame"} />,
    ],
  },
  {
    id: 3,
    name: "The Wild Oasis",
    description:
      "Plan your next nature escape with The Wild Oasis. This platform offers a wide range of cabins nestled in the most beautiful and peaceful environments. Browse through available locations, view detailed information, and book your perfect getaway with just a few clicks.",
    siteLink: "https://the-wild-oasis-opal-kappa.vercel.app/",
    gitHubLink: "https://github.com/giorgikakauridze/the-wild-oasis",
    image: wildOasis.src,
    callStack: [
      <NextUi key={"rame"} />,
      <ReactSvg key={"rame"} />,
      <TypeScriptSvg key={"rame"} />,
      <TailwindSvg key={"rame"} />,
    ],
  },

  {
    id: 5,
    name: "PhotoSnap",
    description:
      "Capture, edit, and share your best moments with the world using PhotoSnap. This platform is designed for photographers of all levels, offering tools to organize your portfolio and share it with a community of like-minded individuals. Whether you're a professional or an enthusiast, PhotoSnap makes sharing memories easy.",
    siteLink: "https://dashing-dodol-8895f7.netlify.app/",
    gitHubLink: "",
    image: photosnap.src,
    callStack: [
      <NextSvg key={"rame"} />,
      <NextUi key={"rame"} />,
      <ReactSvg key={"rame"} />,
      <TypeScriptSvg key={"rame"} />,
    ],
  },
  {
    id: 6,
    name: "E-commerce App",
    description:
      "Shop for high-quality audio gear at unbeatable prices with E-commerce App. From headphones to earphones, explore a range of top-tier products designed to enhance your listening experience. Enjoy seamless browsing, quick checkout, and reliable customer service as you shop for the best audio equipment available.",
    siteLink: "https://audiophileweb.netlify.app/",
    gitHubLink: "",
    image: audiophileImage.src,
    callStack: [
      <ReactSvg key={"rame"} />,
      <TypeScriptSvg key={"rame"} />,
      <TailwindSvg key={"rame"} />,
    ],
  },
  {
    id: 7,
    name: "Pizza App",
    description:
      "Craving pizza? Look no further than Pizza App, where you can browse a wide variety of delicious pizza options and customize your order to suit your taste. With exclusive deals and fast delivery, Pizza App ensures that your favorite pizza is just a few taps away.",
    siteLink: "https://fastreactpiza.netlify.app/",
    gitHubLink: "",
    image: pizza.src,
    callStack: [<ReactSvg key={"rame"} />, <TypeScriptSvg key={"rame"} />],
  },
];

interface Project {
  id: number;
  name: string;
  description: string;
  siteLink: string;
  gitHubLink: string;
  image: string;
  callStack: ReactNode[];
}

interface MyContextType {
  projects: Project[];
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MyContext.Provider value={{ projects }}>{children}</MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
