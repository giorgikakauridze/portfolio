import { Input } from "@nextui-org/react";
import { useMyContext } from "../_context/context";

interface InputComponentProps {
  children: string;
}

const InputComponent: React.FC<InputComponentProps> = ({ children }) => {
  const { paymentDetails, setPaymentDetails } = useMyContext();
  return (
    <>
      {children ? (
        <div className="flex w-96 flex-wrap md:flex-nowrap gap-4">
          <Input
            id="paymentDetails"
            name="paymentDetails"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            className="font-[1000] text-[rgba(244,244,244,0.64)]"
            classNames={{
              input: "group-data-[has-value=true]/input:text-white",
              label: "pl-0 focus:pb-3",
              inputWrapper:
                "pl-7 pr-7 group-data-[filled-within=false]/input:text-black bg-[rgb(24,22,51)] data-[hover=true]:bg-[rgb(24,22,51)] group-data-[focus=true]/input:bg-[rgb(24,22,51)]",
            }}
            type={
              children === "Paypal"
                ? "Email"
                : children === "Bank / Wire transfer "
                ? "Account Number"
                : children === "Venmo"
                ? "Venmo Username"
                : ""
            }
            label={
              children === "Paypal"
                ? "Your Paypal Email"
                : children === "Bank / Wire transfer "
                ? "Account Number"
                : children === "Venmo"
                ? "Venmo Username"
                : children === "Mastercard"
                ? "Card Number"
                : children === "Visa"
                ? "Card Number"
                : children === "Binance"
                ? "Crypto Address"
                : ""
            }
            startContent={children === "Venmo" ? "@" : ""}
            placeholder={
              children === "Paypal"
                ? "paypal@example.com"
                : children === "Bank / Wire transfer "
                ? "USA500CB0400440116242"
                : children === "Venmo"
                ? "venmo"
                : children === "Mastercard"
                ? "4600 0000 0000 0000"
                : children === "Visa"
                ? "4600 0000 0000 0000"
                : ""
            }
            isRequired
          />
        </div>
      ) : null}
    </>
  );
};
export default InputComponent;
