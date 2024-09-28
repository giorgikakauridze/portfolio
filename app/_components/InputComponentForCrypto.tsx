import { Input } from "@nextui-org/react";
import { useMyContext } from "../_context/context";

interface InputComponentProps {
  children: string;
  avaliableBalance: number;
}

const InputComponentForCrypto: React.FC<InputComponentProps> = ({
  children,
  avaliableBalance,
}) => {
  const { withdrawAmount, setWithdrawAmount } = useMyContext();
  return (
    <>
      {children ? (
        <div className="flex w-96 flex-wrap md:flex-nowrap gap-4">
          <Input
            name={`${children}`}
            id="cryptoAmount"
            value={withdrawAmount.toString()}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            startContent={
              children === "BTC" ||
              children === "USDT" ||
              children === "SOL" ||
              children === "ETH" ||
              children === "XRP" ||
              children === "USDC"
                ? children
                : ""
            }
            className=" font-[1000] text-[rgba(244,244,244,0.64)]"
            classNames={{
              input:
                "group-data-[has-value=true]/input:text-white no-spinner appearance-none",
              label: "pl-0 focus:pb-3",
              inputWrapper:
                "pl-7 pr-7 group-data-[filled-within=false]/input:text-black bg-[rgb(24,22,51)] data-[hover=true]:bg-[rgb(24,22,51)] group-data-[focus=true]/input:bg-[rgb(24,22,51)]",
            }}
            type="number"
            label=""
            placeholder=""
            isRequired
          />
        </div>
      ) : null}
    </>
  );
};
export default InputComponentForCrypto;
