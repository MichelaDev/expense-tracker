"use client"

import React from "react";
import { useFormStatus } from "react-dom";
import Button from "./Button";
import Spinner from "./Spinner";

interface FormButtonProps {
  children: React.ReactNode;
}

const FormButton = ({ children }: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button attributes={{type: "submit"}}>
      {!pending && children}
      {pending && <Spinner />}
    </Button>
  );
};

export default FormButton;