// src/components/ui/toaster.js
import { useState, useEffect } from "react";
import { Toast } from "./toast";

export function Toaster() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToast = (event) => {
      setToasts((prev) => [
        ...prev,
        { id: Date.now(), message: event.detail.message, variant: event.detail.variant || "default" },
      ]);
    };

    window.addEventListener("toast", handleToast);
    return () => window.removeEventListener("toast", handleToast);
  }, []);

  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
        >
          {toast.message}
        </Toast>
      ))}
    </>
  );
}

// Utility function to trigger toasts
export function toast(message, options = {}) {
  window.dispatchEvent(new CustomEvent("toast", { detail: { message, ...options } }));
}