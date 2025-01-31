import React, { useEffect, useState } from "react";
import Eyes from "./components/Eyes";
import { slidesData } from "./slides";
import Additems from "./components/Additems";
import Slider from "./components/Slider";
import CodeReviewFeedback from "./components/CodeReviewFeedback";
import Contactform from "./components/Contactform";
import Home from "./components/Home";
import Home1 from "./components/Home1";
import Sidenav from "./components/Sidenav";
import { Routes, Route } from "react-router-dom";
import Createpost from "./components/Createpost";
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
    });
  });

  return (
    <div className="bg-neutral-800">
      <Eyes rotate={rotate} />

      {/* HACKER RANK */}
      <Additems/>
      <Slider slidesData={slidesData}/>
      <CodeReviewFeedback/>
      <Contactform/>
      <Home/>
      <Sidenav />
      
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/create" element={<Createpost />} />
      </Routes>
    </div>
  );
}

export default App;
