import React, { useEffect } from 'react'
import { MdOutlineExplore } from "react-icons/md";
function Explore({posts,ondelete}) {
   
  return (
    <div className='flex overflow-x-hidden'>
      <button className=" px-4 py-1 text-xl active:scale-95 flex items-center gap-1 w-fit h-fit">
        <MdOutlineExplore size={30}/>
        Explore
      </button>
      <div className=' w-3/4 flex justify-center items-center flex-col '>
    {posts.length>0?(posts.map((post,index)=>( <div key={index} className='bg-zinc-800  rounded p-4 my-4'>
           
                <h1 className='text-xl mb-4'>{post.title}</h1>
                <img src={post.image} alt={post.title} className='w-80 h-96 object-contain my-2'/>
                <p className='mt-4 italic'>{post.caption}</p>
                <button onClick={()=>{ondelete(index)}} className='px-4 py-1 bg-red-400 text-zinc-900 rounded mt-2'>Delete</button>
            </div>))):(<p className='text-2xl'>no posts yet</p>)}
    
      </div>
    </div>
  );
}

export default Explore