import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Lock, MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";

interface LocationPermissionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAllowOnce: () => void;
  onAllowAlways: () => void;
  onDeny: () => void;
}

export default function LocationPermissionModal({
  open,
  onOpenChange,
  onAllowOnce,
  onAllowAlways,
  onDeny,
}: LocationPermissionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm rounded-2xl border border-muted-foreground/50 bg-muted p-4" showCloseButton={false}>

        <div className="mb-4 flex items-center justify-center">
          <div className="p-3 z-10 items-center justify-center rounded-full bg-blue-500">
            <Navigation className="text-white mr-0.5" size={20} fill="white" />
          </div>
          <div className="p-3 -ml-2 items-center justify-center rounded-lg bg-muted-foreground/10 border border-muted-foreground/10">
            <MapPin className="text-accent-foreground" size={24} />
          </div>
        </div>

        <h2 className="text-lg font-semibold text-foreground text-center">
          Allow "Dinio" to use your location?
        </h2>

        <p className="text-sm text-muted-foreground text-center mb-2">
          To confirm you're inside the restaurant and give you the best service,
          Dinio needs permission to access your location.
        </p>

        <div className="flex flex-col gap-1">
          <Button
            onClick={onAllowOnce}
            className="w-full hover:underline underline-offset-2 py-4 h-10 cursor-pointer rounded-lg font-medium text-sm hover:bg-muted-foreground/10 transition flex items-center justify-center gap-2"
            variant="ghost"
          >
            <Lock size={16} />
            Allow Once
          </Button>
          <Button
            onClick={onAllowAlways}
            className="w-full hover:underline underline-offset-2 py-4 h-10 cursor-pointer rounded-lg font-medium text-sm hover:bg-muted-foreground/10 transition"
            variant="ghost"
          >
            Allow While Using App
          </Button>
          <Button
            onClick={onDeny}
            className="w-full hover:underline underline-offset-2 py-4 h-10 cursor-pointer rounded-lg text-red-500 font-medium text-sm hover:bg-muted-foreground/10 transition"
            variant="ghost"
          >
            Don't Allow
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}