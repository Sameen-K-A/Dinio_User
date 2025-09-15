import { ListFilter } from "lucide-react";

export default function MenuHeader() {
  return (
    <div className="flex justify-end items-center gap-2 mb-4">
      <input
        type="text"
        placeholder="Search food..."
        className="w-full max-w-lg border rounded-lg px-3 py-2 h-10 text-sm bg-card focus:outline-none"
      />
      <button className="p-2.5 rounded-lg border bg-card cursor-pointer hover:bg-muted transition-colors"><ListFilter size={18} /></button>
    </div>
  );
};