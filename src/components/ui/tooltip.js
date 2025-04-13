// src/components/ui/tooltip.js
import { useState } from "react";
import { cn } from "../../lib/utils";

export function TooltipProvider({ children }) {
  return <>{children}</>;
}

export function Tooltip({ children, content, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
      {isOpen && (
        <div
          className={cn(
            "absolute z-10 mt-2 rounded-md bg-black text-white text-xs p-2 shadow-lg",
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export function TooltipTrigger({ children }) {
  return <>{children}</>;
}

export function TooltipContent({ children, className }) {
  return <div className={cn("p-2", className)}>{children}</div>;
}