import React, { InputHTMLAttributes } from "react";

const Input: React.FC<
  Omit<InputHTMLAttributes<HTMLInputElement>, "className">
> = ({ ...rest }) => {
  return (
    <input
      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      {...rest}
    />
  );
};

export default Input;