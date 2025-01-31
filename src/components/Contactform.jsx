import React, { useEffect, useState } from "react";

function Contactform() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [data, setdata] = useState(null);
  const [error, seterror] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      seterror("All fields are required");
      return
    }
    seterror("");
    setdata({ name, email, message });
    setname("");
    setemail("");
    setmessage("");
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="bg-blue-100 p-4">
      <form className="" onSubmit={handlesubmit}>
        <h1 className="text-4xl text-center ">Contact Form</h1>
        <input
          type="text"
          className="block text-xl px-2 py-1 my-4 outline-none"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="email"
          className="block text-xl px-2 py-1 my-4 outline-none"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <textarea
          className="block text-xl px-2 py-1 my-4 outline-none resize-none"
          placeholder="Enter description"
          cols={23}
          rows={2}
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        ></textarea>
        <button className="px-4 py-1 bg-green-500 text-white rounded active:scale-95">
          Submit
        </button>
      </form>
      <div>
        {error && <p className="text-red-500 my-4 text-xl">{error}</p>}
        {data && (
          <div className="my-4 ">
            <h2 className="my-6 text-2xl">Submitted Information</h2>
            <p className="">
            Name: {data.name}
            </p>
            <p className="">
            Email: {data.email}
            </p>
            <p className="">
            Message: {data.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contactform;
