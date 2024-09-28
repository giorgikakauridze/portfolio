"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
} from "@nextui-org/react";
import MailIcon from "../svgs/MailIcon";
import LockIcon from "../svgs/LockIcon";
import { getUsers } from "../_lib/actions"; // Server-side action
import { useMyContext } from "../_context/context";

const LoginModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setIsLogged, setUser } = useMyContext(); // Access to context
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (formData: FormData) => {
    try {
      // Call server action to validate login
      const result = await getUsers(formData);

      if (result.success) {
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("LoggedUser", result.isValid[0].fullName);
        setUser(result.isValid[0]);
        setIsLogged(true); // Update context if login is successful
      } else {
        setError("Invalid credentials, please try again.");
      }
    } catch (err) {
      setError("Invalid credentials, please try again.");
    }
  };
  useEffect(() => {
    const storedIsLogged = localStorage.getItem("isLogged");
    const storedUser = localStorage.getItem("LoggedUser");
    const storedUserObject = {
      fullName: storedUser || "",
      email: "example@gmail.com",
      password: "password",
      id: 900,
    };
    if (storedIsLogged === "true") {
      setUser(storedUserObject);
      setIsLogged(true); // Restore login state from local storage
    }
  }, [setIsLogged]); // Only run once when the component mounts

  return (
    <>
      <Button onPress={onOpen} size="lg" color="secondary">
        Log in
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
        <ModalContent className="text-white bg-[rgb(29,27,64)]">
          {(onClose) => (
            <>
              {/* Form submission is handled by server-side action */}
              <form action={handleLogin}>
                <ModalHeader className="flex flex-col gap-1">
                  Log in
                </ModalHeader>
                <ModalBody>
                  <Input
                    name="email"
                    id="email"
                    classNames={{
                      inputWrapper:
                        "border-[rgb(63,63,70)] group-data-[focus=true]/input:border-[rgba(213, 211, 224, 0.425)]",
                    }}
                    className="border-none"
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                  <Input
                    name="password"
                    id="password"
                    classNames={{
                      inputWrapper:
                        "border-[rgb(63,63,70)] group-data-[focus=true]/input:border-violet",
                    }}
                    endContent={
                      <LockIcon className="text-2xl  text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                  />
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      color="secondary"
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox>
                  </div>
                  {error && <p className="text-red-500">{error}</p>}{" "}
                  {/* Show error if exists */}
                </ModalBody>
                <ModalFooter className="flex gap-5">
                  <Button
                    size="md"
                    color="default"
                    className="bg-[rgb(40,37,83)] text-white"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                  <Button
                    type="submit"
                    size="md"
                    color="secondary"
                    onPress={onClose}
                  >
                    Sign in
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
