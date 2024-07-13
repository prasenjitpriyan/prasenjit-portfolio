import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full bg-slate-200">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <h1>hello</h1>
    </div>
  );
};

export default Hero;
