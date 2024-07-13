import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-gray-600 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-gray-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className={cn("relative z-20")}>
        <h1 className="text-gray-100">Tailwind is Awesome</h1>
      </div>
    </div>
  );
};

export default Hero;
