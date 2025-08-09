import { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function CallWaiterBtn() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setOpen(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="fixed z-50 bottom-18 right-4 md:bottom-6 md:right-6 bg-accent-foreground cursor-pointer text-accent rounded-full p-4 flex items-center gap-2 hover:bg-primary/70 transition-colors"
          aria-label="Call Waiter"
        >
          <PhoneCall size={18} strokeWidth={1.5} />
          <span className="text-xs">Call Waiter</span>
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="top"
        align="end"
        className="bg-muted border border-muted-foreground/50 rounded-lg shadow-lg w-[260px] p-4 text-center"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center">
            <PhoneCall size={18} strokeWidth={1.5} className="text-primary mr-2" />
            <span className="text-sm font-medium">Calling</span>
            <span className="dots-placeholder">
              <span className="animate-dots"></span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Please wait, a waiter will be with you shortly.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
