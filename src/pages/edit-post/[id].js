import axios from "axios";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const Toaster = dynamic(() => import('react-hot-toast').then((mod) => mod.Toaster), {
  ssr: false,
});
import { toast } from "react-hot-toast";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";

const EditPost = ({post}) => {
  const [title, setTitle] = useState(post.title);
  const [photo, setPhoto] = useState(post.photo);
  const [category, setCategory] = useState(post.categories[0]);
  const [content, setContent] = useState(post.desc);

  const handleChange = (value) => {
    setContent(value);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`https://blogapi-developertanbir-gmailcom.vercel.app/api/posts/${post._id}`, {
        title,
        desc: content,
        photo,
        categories: [category],
        username: "imtias",
      });
      if (response.status === 200) {
        return toast.success("Post Update Successful!");
      }
    } catch (error) {
      console.error("Failed to update blog post:", error);
      return toast.error("Post Update Fail!");
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
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;

export async function getServerSideProps(context) {
    // Get the dynamic ID from the URL
    const { id } = context.query;
    // Fetch blog post data from a database or API using the ID
    const res = await fetch(`https://blogapi-developertanbir-gmailcom.vercel.app/api/posts/${id}`);
    const post = await res.json();

    // Check if the post exists
    if (!post || post.name === "CastError") {
        return {
        notFound: true,
        props: {
            title: "Post not found",
          },
        };
    }
    // Pass the blog post data as props to the page component
    return {
      props: {
        post
      },
    };
  }