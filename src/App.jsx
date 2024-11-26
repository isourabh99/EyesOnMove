import React, { useEffect, useState } from "react";
import Eyes from "./components/Eyes";

function App() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angleRadians = Math.atan2(deltaY, deltaX);
      let angleDegrees = angleRadians * (180 / Math.PI);
      setRotate(angleDegrees - 180);
      console.log(Math.atan2(0, 2));
    });
  });
  return (
    <div className="h-screen w-full flex justify-center items-center ">
   <Eyes rotate={rotate}/>
    </div>
  );
}

export default App;
