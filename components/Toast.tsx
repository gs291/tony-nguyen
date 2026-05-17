"use client";

interface ToastProps {
  message: string;
  visible: boolean;
}

export default function Toast({ message, visible }: ToastProps) {
  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-surface-tint text-on-primary font-mono text-label-sm px-6 py-3 rounded-full z-[100] shadow-[0_0_20px_rgba(0,218,243,0.3)] pointer-events-none transition-all duration-300 ${
        visible ? "toast-visible" : "toast-enter"
      }`}
    >
      {message}
    </div>
  );
}
