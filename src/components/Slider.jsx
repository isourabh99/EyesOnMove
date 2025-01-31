import React, { useState } from "react";

function Slider({ slidesData }) {
    const [currentIdx,setCurrentIdx]=useState(0)
  const handleRestart = () => {
    setCurrentIdx(0)
  };
  const handlePrev = () => {
    //finding which one is greater and ensuring which one is greater
    setCurrentIdx((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    // finding which one is lower and ensuring it does'nt exceeds the array length
    setCurrentIdx((prev) => Math.min(prev + 1, slidesData.length - 1));
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="border-2 p-20 text-center shadow-lg ">
        <h1 className="text-5xl my-4 text-sky-700">{slidesData[currentIdx].title}</h1>
        <h1 className="text-2xl my-4">{slidesData[currentIdx].text}</h1>
      </div>
      <div className="space-x-10 my-10">
        <button
          className="bg-blue-200 px-4 py-1 active:scale-95 font-semibold text-xl"
          onClick={handleRestart}
          disabled={currentIdx===0}
        >
          Restart
        </button>
        <button
          className="bg-blue-200 px-4 py-1 active:scale-95 font-semibold text-xl"
          onClick={handlePrev}
          disabled={currentIdx===0}
        >
          Prev
        </button>
        <button
          className="bg-blue-200 px-4 py-1 active:scale-95 font-semibold text-xl"
          onClick={handleNext}
          disabled={currentIdx===slidesData.lenght-1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
