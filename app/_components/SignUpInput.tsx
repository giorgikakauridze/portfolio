import { Input } from "@nextui-org/react";
import { useState } from "react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useMyContext } from "../_context/context";

interface InputComponentProps {
  children: string;
}

const SignUpInput: React.FC<InputComponentProps> = ({ children }) => {
  const [fullName, setFullName] = useState("");
  const { setInputCheck } = useMyContext();
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);

  if (
    fullName.length &&
    password2.length > 4 &&
    password.length > 4 &&
    password === password2 &&
    email.includes("@")
  ) {
    setInputCheck(true);
  } else {
    setInputCheck(false);
  }

  return (
    <div className="mobile:m-0 mobile:mt-10 ml-96 mr-96 mt-10 items-center justify-center grid grid-cols-2 gap-10">
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="font-[1000] text-[rgba(244,244,244,0.64)]"
        classNames={{
          input: "group-data-[has-value=true]/input:text-white",
          label: "pl-0 focus:pb-3",
          inputWrapper:
            "pl-7 group-data-[filled-within=false]/input:text-black bg-[rgb(24,22,51)] data-[hover=true]:bg-[rgb(24,22,51)] group-data-[focus=true]/input:bg-[rgb(24,22,51)]",
        }}
        type="email"
        label="Enter Your Email"
        isRequired
        name="email"
        id="email"
      />
      <Input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="font-[1000] text-[rgba(244,244,244,0.64)]"
        classNames={{
          input: "group-data-[has-value=true]/input:text-white",
          label: "pl-0 focus:pb-3",
          inputWrapper:
            "pl-7 group-data-[filled-within=false]/input:text-black bg-[rgb(24,22,51)] data-[hover=true]:bg-[rgb(24,22,51)] group-data-[focus=true]/input:bg-[rgb(24,22,51)]",
        }}
        type="fullname"
        label="Your Full Name"
        name="fullName"
        id="fullName"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        className="font-[1000] text-[rgba(244,244,244,0.64)]"
        classNames={{
          input: "group-data-[has-value=true]/input:text-white",
          label: "pl-0 focus:pb-3",
          inputWrapper:
            "pl-7 group-data-[filled-within=false]/input:text-black bg-[rgb(24,22,51)] data-[hover=true]:bg-[rgb(24,22,51)] group-data-[focus=true]/input:bg-[rgb(24,22,51)]",
        }}
        type={isVisible ? "text" : "password"}
        label="Password"
        isRequired
        name="password"
        id="password"
      />
      <Input
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        className="font-[1000] text-[rgba(244,244,244,0.64)]"
        classNames={{
          input: `group-data-[has-value=true]/input:text-white `,
          label: `pl-0 focus:pb-3`,
          inputWrapper:
            "pl-7 group-data-[filled-within=false]/input:text-black bg-[rgb(24,22,51)] data-[hover=true]:bg-[rgb(24,22,51)] group-data-[focus=true]/input:bg-[rgb(24,22,51)]",
        }}
        type={isVisible ? "text" : "password"}
        label="Repeat Password"
        name="password2"
        color={
          password2.length > 1 && password !== password2
            ? "danger"
            : password2.length > 1 && password === password2
            ? "success"
            : "default"
        }
        id="password2"
      />
    </div>
  );
};
export default SignUpInput;
