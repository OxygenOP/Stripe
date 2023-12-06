import { useEffect } from "react";
import { Gradient } from "../Utils/Gradient.js";

function LavaLamp() {
  useEffect(() => {
    //Using Whatamash Script to initiate Gradient
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="absolute top-0 left-0 z-[1]  w-screen h-[40%] md:h-2/3 overflow-hidden ">
      <div className="hero_transform_mobile md:hero_transform ">
        <canvas id="gradient-canvas" data-transition-in />
      </div>
    </div>
  );
}

export default LavaLamp;
