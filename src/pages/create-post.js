import axios from 'axios';
import dynamic from "next/dynamic";
import React, {useEffect, useState} from 'react';
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css';
const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChange = (value) => {
      setContent(value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:5000/api/posts', {
            title,
            desc: content,
            username: "imtias"
          });
    
          console.log('Blog post saved:', response.data);
          // Do something with the saved blog post, such as updating the UI
        } catch (error) {
          console.error('Failed to save blog post:', error);
        }
      };

    return (
       <section className='py-12'> 
        <div className="container mx-auto px-5">
            <form action="" onSubmit={handleSubmit}>
            <input
        type="text"
        placeholder="Write Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='px-5 py-3 w-full outline-none mb-10 border-2 rounded-md font-bold text-xl border-gray-500'
      />
                 <ReactQuill value={content} onChange={handleChange}  className='mb-5 h-48 lg:h-96'  />
                 <br />
      <button type="submit" className='py-2 px-8 border rounded-md bg-green-500 text-white font-bold mt-5'>Save</button>
            </form>
        </div>
       </section>
    );
};

export default CreatePost;