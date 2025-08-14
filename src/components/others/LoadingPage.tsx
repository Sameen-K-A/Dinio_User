import { Loader } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="h-[100dvh] w-full relative overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <div className="inline-block text-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <img
              src="/svgs/logo.svg"
              alt="Dinio Logo"
              className="h-[1em] inline-block"
            />
          </h1>
          <Loader className="animate-spin mt-5 mx-auto" size={25} />
        </div>
      </div>
    </div>
  );
}