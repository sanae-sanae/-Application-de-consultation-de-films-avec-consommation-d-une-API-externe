// src/components/ui/toast.js
import { cn } from "../../lib/utils";

export function Toast({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-background text-foreground",
    destructive: "bg-destructive text-destructive-foreground",
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 flex items-center rounded-lg border p-4 shadow-lg",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}