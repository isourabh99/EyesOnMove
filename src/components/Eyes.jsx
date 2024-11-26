// import React, { useEffect, useState } from "react";

function Eyes({rotate}) {

  return (
    <div className="bg-red-800 flex gap-10 p-10 rounded-full">
      <div className="relative h-[16vw] w-[16vw] bg-zinc-100 rounded-full ">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-[10vw] w-[10vw] bg-zinc-900 rounded-full ">
          <div
            style={{
              transform: `translate(-50% ,-50% ) rotate(${rotate}deg)`,
            }}
            className={`line   absolute top-1/2 left-1/2  w-full`}
          >
            <div className="h-[3vw] w-[3vw] rounded-full bg-zinc-100 "></div>
          </div>
        </div>
      </div>

      <div className="relative h-[16vw] w-[16vw] bg-zinc-100 rounded-full ">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-[10vw] w-[10vw] bg-zinc-900 rounded-full ">
          <div
            style={{
              transform: `translate(-50% ,-50% ) rotate(${rotate}deg)`,
            }}
            className={`line   absolute top-1/2 left-1/2  w-full`}
          >
            <div className="h-[3vw] w-[3vw] rounded-full bg-zinc-100 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
