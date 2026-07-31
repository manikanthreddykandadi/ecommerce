import type { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}

export default Input;