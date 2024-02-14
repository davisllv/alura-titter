import React, { InputHTMLAttributes, useState } from "react";
import Input from "../input";

const InputPassword: React.FC<
  Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type">
> = ({ ...rest }) => {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <div className="w-full relative">
      <Input
        type={isClosed ? "password" : "text"}
        placeholder="Password"
        {...rest}
      />
      <button>
        <img
          src={`eye-${isClosed ? "closed" : "open"}.png`}
          className="h-5 hover:cursor-pointer absolute top-2 right-2"
          alt=""
          onClick={() => {
            setIsClosed(!isClosed);
          }}
        />
      </button>
    </div>
  );
};

export default InputPassword;
