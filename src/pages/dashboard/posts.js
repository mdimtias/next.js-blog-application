import dynamic from "next/dynamic";
import React, { useState } from "react";
const DashboardLayout = dynamic(
  () => import("../../component/DashboardLayout"),
  {
    ssr: false,
  }
);
import axios from "axios";
import DeleteModal from "../../component/DeleteModal";
import Link from "next/link";

const Posts = ({ posts }) => {
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState(null);
  const handleDelete = (id) => {
    setPostId(id);
    setShowModal(true);
  };

  return (
    <DashboardLayout>
      {showModal && (
        <DeleteModal
          postId={postId}
          showModal={showModal}
          setShowModal={setShowModal}
        ></DeleteModal>
      )}

      <div>
        <h2 className="text-lg font-medium mb-4">All Posts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">SL</th>
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Author</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {posts.map((post, i) => (
                <tr
                  key={post._id}
                  className="border-b border-gray-300 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {i + 1}
                  </td>
                  <td className="py-3 px-6 text-left">{post.title}</td>
                  <td className="py-3 px-6 text-left">{post.username}</td>
                  <td className="py-3 px-6 text-left">
                    {post.categories.slice(0, 1).map((category, i) => (
                      <span key={i}>{category}</span>
                    ))}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {post.createdAt.slice(0, 10)}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <Link href={`../edit-post/${post._id}`}>
                        <button className="w-4 mr-2 pr-5 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="2em"
                            width="2em"
                          >
                            <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                          </svg>
                        </button>
                      </Link>
                      <button
                        className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        onClick={() => handleDelete(post._id)}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="2em"
                          width="2em"
                        >
                          <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Posts;

export async function getServerSideProps() {
  const response = await axios.get("https://blogapi-developertanbir-gmailcom.vercel.app/api/posts");
  const posts = response.data;
  return {
    props: {
      posts,
    },
  };
}
