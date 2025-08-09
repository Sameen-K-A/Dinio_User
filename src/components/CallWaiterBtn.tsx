import { Phone } from "lucide-react";

export default function CallWaiterBtn() {
  return (
    <button
      className="fixed z-50 bottom-18 right-4 md:bottom-6 md:right-6 bg-primary cursor-pointer text-primary-foreground rounded-full p-4 flex items-center gap-2 hover:bg-primary/90 transition-colors"
      aria-label="Call Waiter"
    >
      <Phone size={18} strokeWidth={1.5} />
      <span className="text-xs">Call Waiter</span>
    </button>
  );
}