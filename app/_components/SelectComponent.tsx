"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { useMyContext } from "../_context/context";

interface Payments {
  name: string;
}

interface SelectComponentProps {
  payments: Payments[];
}
const SelectComponent: React.FC<SelectComponentProps> = ({ payments }) => {
  const { setSelectedPayment } = useMyContext();

  const selectPaymentHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPayment(e.target.value);
  };

  return (
    <div className=" w-96 flex  flex-wrap md:flex-nowrap gap-4">
      <Select
        id="paymentMethod"
        name="paymentMethod"
        onChange={selectPaymentHandler}
        data-hover={false}
        classNames={{
          //   value: "font-[1000]",
          popoverContent: "bg-[rgb(24,22,51)]",
          listbox: "text-white font-[1000] ",
          trigger: "bg-[rgb(24,22,51)] p-7  ",
          value: "group-data-[has-value=true]/select:text-white",
          //   label: "text-md",
        }}
        isRequired
        label="Select Payment Method"
        className="max-w-sm "
      >
        {payments.map((payment) => (
          <SelectItem key={payment.name}>{payment.name}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
export default SelectComponent;
