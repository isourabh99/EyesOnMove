import React, { useEffect, useState } from "react";

function Addlist() {
  const [items, setitemss] = useState([]);
  const [input, setInput] = useState("");
  const handleOnclick = () => {
    if (input.trim() !== "") {
      setitemss((previtemss) => [...previtemss, input.trim()]);
      setInput("");
    }
  };
  useEffect(()=>{
console.log(items);

  },[items])
  return (
    <div className="bg-gray-300 p-2 w-full">
      <h1 className="text-4xl ">items List..</h1>
      <input
        className="outline-none border-2 w-72 my-4 px-2 py-1 text-xl"
        type="text"
        placeholder="Enter items"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="block bg-blue-500 px-2 py-1 rounded w-72 text-white text-xl active:scale-95"
        onClick={handleOnclick}
      >
        Add items
      </button>
      <ul className="p-5 list-disc">
  {items.length>0? (items.map((item,idx)=>(
    <li key={idx}>{item}</li>
  ))) :(<p className="text-red-600">No items avialable...</p>)}
      </ul>
    </div>
  );
}

export default Addlist;
