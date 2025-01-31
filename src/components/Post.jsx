import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
function Post({onsubmit}) {
  const [isModal, setModal] = useState(false);
  const handlecreateposttoogle = () => {
    setModal(true);
  };
  const handleclosetoogle = () => {
    setModal(false);
  };
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const handlesubmit = () => {
        if(title&&image&&caption){
            onsubmit({ title, image, caption });
            setTitle("");
            setImage("");
            setCaption("");
            setModal(false);
        }
  };
  return (
    <div className="">
      <button
        onClick={handlecreateposttoogle}
        className=" px-4 py-1 text-xl active:scale-95 flex items-center gap-1 my-4"
      >
        <MdOutlineAddBox size={30} /> Create post
      </button>
      {isModal && (
        <div className="absolute top-0 left-0  h-full w-full backdrop-blur-sm flex items-center justify-center">
          <div
            className="text-4xl absolute right-10 top-10 active:scale-95 hover:text-zinc-200"
            onClick={handleclosetoogle}
          >
            <IoMdClose />
          </div>

          <div className="modal w-1/3  bg-zinc-800 rounded p-4">
            <input
              type="text"
              className="w-full px-2 py-1 bg-transparent border-2 outline-none border-zinc-600 my-2"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="w-full px-2 py-1 bg-transparent border-2 outline-none border-zinc-600 my-2"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="text"
              className="w-full px-2 py-1 bg-transparent border-2 outline-none border-zinc-600 my-2"
              placeholder="Enter caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <button
              className="w-full my-10 bg-blue-900 text-lg py-1 tracking-wider active:scale-95"
              onClick={handlesubmit}
            >
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
