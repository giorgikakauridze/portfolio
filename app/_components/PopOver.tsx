import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { useMyContext } from "../_context/context";

const PopOver = () => {
  const { setSelectedCrypto, balance } = useMyContext();
  // console.log(balance);
  const content = (
    <PopoverContent className="w-[240px]">
      {(titleProps) => (
        <div className="px-1 py-2 w-full">
          <p
            className="text-medium text-white font-bold text-foreground"
            {...titleProps}
          ></p>
          <div className="mt-2 flex flex-col gap-2">
            <Button
              onClick={() => setSelectedCrypto("BTC")}
              className="bg-[rgb(40,36,85)] pl-5 pr-5 text-white rounded-xl text-sm "
            >
              BTC ≈ {Number(balance[0].total.toFixed(6))}
            </Button>
            <Button
              onClick={() => setSelectedCrypto("USDT")}
              className="bg-[rgb(40,36,85)] pl-5 pr-5 text-white rounded-xl text-sm "
            >
              USDT ≈ {balance.filter((el) => el.name === "USDT")[0].total}
            </Button>
            <Button
              onClick={() => setSelectedCrypto("ETH")}
              className="bg-[rgb(40,36,85)] pl-5 pr-5 text-white rounded-xl text-sm "
            >
              ETH ≈ {balance.filter((el) => el.name === "ETH")[0].total}
            </Button>
            <Button
              onClick={() => setSelectedCrypto("XRP")}
              className="bg-[rgb(40,36,85)] pl-5 pr-5 text-white rounded-xl text-sm "
            >
              XRP ≈ {balance.filter((el) => el.name === "XRP")[0].total}
            </Button>
            <Button
              onClick={() => setSelectedCrypto("USDC")}
              className="bg-[rgb(40,36,85)] pl-5 pr-5 text-white rounded-xl text-sm "
            >
              USDC ≈ {balance.filter((el) => el.name === "USDC")[0].total}
            </Button>
            <Button
              onClick={() => setSelectedCrypto("SOL")}
              className="bg-[rgb(40,36,85)] pl-5 pr-5 text-white rounded-xl text-sm "
            >
              SOL ≈ {balance.filter((el) => el.name === "SOL")[0].total}
            </Button>
          </div>
        </div>
      )}
    </PopoverContent>
  );

  return (
    <div className="flex flex-wrap gap-4">
      <Popover
        classNames={{ content: "bg-[rgb(24,22,51)]" }}
        showArrow
        offset={10}
        placement="bottom"
        backdrop="blur"
      >
        <PopoverTrigger>
          <Button
            color="default"
            variant="flat"
            className="capitalize text-white bg-[rgb(102,57,228)]"
          >
            Choose Crypto
          </Button>
        </PopoverTrigger>
        {content}
      </Popover>
    </div>
  );
};

export default PopOver;
