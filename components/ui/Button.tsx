import React, { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  attributes,
  onClick,
  full,
}: {
  children?: React.ReactNode;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  onClick?: () => void;
  full?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      {...attributes}
      className={`flex ${
        full ? "w-full" : "min-w-24"
      } justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {children}
    </button>
  );
};

export default Button;
