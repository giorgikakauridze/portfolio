import React from "react";
import { Button } from "@nextui-org/react";

interface ButtonProps {
  active: boolean;
  onClick: () => void;
  children: string;
  type: "secondary" | "primary" | "default" | "success" | "warning" | "danger";
}

const ButtonMain: React.FC<ButtonProps> = ({
  active,
  onClick,
  children,
  type,
}) => {
  return (
    <div className="flex   flex-wrap gap-4 items-center">
      <Button
        isDisabled={(children === "Sign account" || "Send") && !active}
        size="lg"
        type="submit"
        onClick={onClick}
        color={type}
        className={type === "primary" ? "bg-[rgb(40,37,83)] " : "font-[1000]"}
      >
        {children}
      </Button>
    </div>
  );
};

export default ButtonMain;
