import React, { useEffect, useState } from "react";
import Eyes from "./components/Eyes";
import Contact from "./components/Contact";
// import Additems from "./components/Additems";
import Addlist from "./components/Addlist";

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
      // console.log(Math.atan2(0, 2));
    });
  });
  return (
    <div className="p-6">
      {/* <Eyes rotate={rotate} />
      <Contact /> */}
      {/* <Additems/> */}
    <Addlist/>
    </div>
  );
}

export default App;
