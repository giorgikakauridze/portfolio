"use client";
import CryptoCard from "../_components/CryptoCard";
import Hero from "../_components/Hero";
import { useMyContext } from "../_context/context";
import SpinnerComponent from "../_components/Spinner";

export default function HomePage() {
  const { isLoading, coins } = useMyContext();

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center pt-96">
          <SpinnerComponent />
        </div>
      ) : (
        <div>
          <div className="mobile:flex-col mobile:gap-10     flex justify-between pt-36 items-center">
            <Hero />
            <div className="mobile:grid-cols-2 mobile:gap-5 grid-cols-3 grid gap-10">
              {coins.map((item) => (
                <CryptoCard coin={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
