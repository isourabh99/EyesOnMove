import React, { useEffect, useState } from "react";
import Post from "./Post";
import Explore from "./Explore";

function Home() {
  const [posts, setposts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  });
  const handlecreatebutton = (post) => {
    setposts([...posts, post]);
  };
  const handledelete = (idxtodel) => {
    setposts(posts.filter((_, idx) => idx !== idxtodel));
  };
  useEffect(() => {
    console.log(posts);
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  return (
    <div className="min-h-screen bg-zinc-900  text-white p-4 overflow-x-hidden ">
      <Post onsubmit={handlecreatebutton} />
      <Explore posts={posts} ondelete={handledelete} />
    </div>
  );
}

export default Home;
