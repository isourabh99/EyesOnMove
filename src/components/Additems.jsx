import React, { useEffect, useState } from "react";

const Additems = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    if (input.trim() !== "") {
      setItems((prev) => [...prev, input.trim()]);
      setInput("");
    }
  };
  // It will print the array of items whenever the state of items is changed if no item then blank array
  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <div className="bg-blue-100 p-4">
      <h1 className="text-2xl">Hi👋 Add items here...</h1>
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="text-xl px-2 py-1 my-4 outline-none"
      />
      <button
        className="bg-blue-500 block px-4 py-1 rounded text-white active:scale-95"
        onClick={handleSubmit}
      >
        Add item
      </button>
      <ul className="my-4 px-5 list-decimal text-xl">
   {
    items.length>0?(items.map((item,idx)=>(<li key={idx}>{item}</li>))):(<p className="text-red-500">No items available..</p>)
   }
      </ul>
    </div>
  );
};

export default Additems;
