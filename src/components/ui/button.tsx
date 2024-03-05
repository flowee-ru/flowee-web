import React, { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

export const Button = React.memo(
  forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
    function Button({ children, ...props }, ref) {
      return (
        <button
          {...props}
          ref={ref}
          className="py-2 px-4 rounded-md font-medium transition-colors bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-600"
        >
          {children}
        </button>
      );
    }
  )
);

export const GhostButton = React.memo(
  forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
    function GhostButton({ children, ...props }, ref) {
      return (
        <button
          {...props}
          ref={ref}
          className="py-2 px-4 rounded-md font-medium transition-colors hover:bg-neutral-700 focus:bg-neutral-600"
        >
          {children}
        </button>
      );
    }
  )
);
