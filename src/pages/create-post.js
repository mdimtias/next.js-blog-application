import axios from "axios";
import dynamic from "next/dynamic";
import React, { useState } from "react";

import {  toast } from "react-hot-toast";
const Toaster = dynamic(() => import('react-hot-toast').then((mod) => mod.Toaster), {
  ssr: false,
});
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://blogapi-developertanbir-gmailcom.vercel.app/api/posts", {
        title,
        desc: content,
        photo,
        categories: [category],
        username: "imtias",
      });
      if (response.status === 200) {
        return toast.success("Post Successful!");
      }
    } catch (error) {
      if (error.response.status === 403) {
        return toast.error(error.response.data.message);
      }
      console.error("Failed to save blog post:", error);
      return toast.error("Post Fail!");
    }
  };

  return (
    <section className="py-12">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto px-5">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-5 py-3 w-full outline-none mb-10 border-2 rounded-md font-bold text-xl border-gray-500"
          />
          <input
            type="text"
            placeholder="Provide Photo link only Pexels and Pixabay site"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="px-5 py-3 w-full outline-none mb-10 border-2 rounded-md font-bold text-xl border-gray-500"
          />
          <input
            type="text"
            placeholder="Category Name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-5 py-3 w-full outline-none mb-10 border-2 rounded-md font-bold text-xl border-gray-500"
          />
          <ReactQuill
            value={content}
            onChange={handleChange}
            className="mb-5 h-48 lg:h-96"
          />

          <br />
          <button
            type="submit"
            className="py-2 px-8 border rounded-md bg-green-500 text-white font-bold mt-5"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
