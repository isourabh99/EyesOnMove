import React, { useEffect, useState } from 'react';

function Createpost() {
    const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
    const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID;

    const [image, setImage] = useState('');
    const [username, setUsername] = useState('');
    const [caption, setCaption] = useState('');
    const [posts, setPosts] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {username, caption, image};
        setPosts([...posts, newPost]);
setUsername('');
setCaption('');
setImage('');
    }
    
    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <div className='container relative mx-auto p-4 bg-neutral-900 min-h-screen w-full overflow-x-hidden'>
            <form className='w-full md:w-1/3 bg-neutral-800 rounded mx-auto my-12 p-4' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='my-4 px-2 py-1 bg-transparent w-full border border-neutral-500 text-neutral-400'
                    placeholder='Image URL'
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                />
                <input
                    type="text"
                    className='my-4 px-2 py-1 bg-transparent w-full border border-neutral-500 text-neutral-400'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <input
                    type="text"
                    className='my-4 px-2 py-1 bg-transparent w-full border border-neutral-500 text-neutral-400'
                    placeholder='Caption'
                    onChange={(e) => setCaption(e.target.value)}
                    value={caption}
                />
                <button className='bg-neutral-300 px-6 py-1 my-6 rounded-3xl active:scale-95 object-scale-down duration-500 font-semibold transition-all ease-in-out'>
                    Post
                </button>
            </form>
        </div>
    );
}

export default Createpost;
