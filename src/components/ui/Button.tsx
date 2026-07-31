import type { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold transition hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;