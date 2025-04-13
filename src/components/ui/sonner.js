// src/components/ui/sonner.js
import { Toaster as SonnerToaster } from "@sonner/react";

export function Toaster({ ...props }) {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        className: "bg-background border border-input text-foreground",
      }}
      {...props}
    />
  );
}