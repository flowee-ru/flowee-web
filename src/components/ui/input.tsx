import React, { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

export const Input = React.memo(
  forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    function Input({ children, ...props }, ref) {
      return (
        <input
          {...props}
          ref={ref}
          className="py-2 px-4 rounded-md font-medium bg-neutral-800 outline-none focus:outline-purple-400"
        >
          {children}
        </input>
      );
    }
  )
);
