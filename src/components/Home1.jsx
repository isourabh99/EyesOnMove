import React from "react";
import Sidenav from "./Sidenav";
import Postcard from "./Postcard";

function Home1() {
  return (
    <div className="conatiner relative mx-auto p-4 bg-neutral-900  min-h-screen w-full overflow-x-hidden">
      <h1 className="text-4xl text-center text-neutral-400">Sarahah</h1>
      <div className="min-h-screen w-full md:w-1/2 mx-auto py-10">
      <Postcard/>
      </div>

    </div>
  );
}

export default Home1;
