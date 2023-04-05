import Head from "next/head";
import Link from "next/link";
// import { Toaster } from "react-hot-toast";
import dynamic from 'next/dynamic';
const Toaster = dynamic(() => import('react-hot-toast').then((mod) => mod.Toaster), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Application</title>
        <meta name="description" content="blog post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Toaster position="top-center" reverseOrder={false} />
       <section className="py-10">
        <div className="container mx-auto px-5">
        <div className="text-center mt-10 flex gap-5 flex-wrap">
          <Link
            href="blog"
            className="text-xl font-bold bg-indigo-700 text-white py-2 px-8 rounded-xl"
          >
            Blog
          </Link>
          <Link
            href="create-post"
            className="text-xl font-bold bg-indigo-700 text-white py-2 px-8 rounded-xl"
          >
            Create Post
          </Link>
          <Link
            href="dashboard"
            className="text-xl font-bold bg-indigo-700 text-white py-2 px-8 rounded-xl"
          >
            Dashboard
          </Link>
          <Link
            href="dashboard/posts"
            className="text-xl font-bold bg-indigo-700 text-white py-2 px-8 rounded-xl"
          >
            Posts
          </Link>
        </div>
        </div>
       </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from an API or database
  const res = await fetch("https://blogapi-developertanbir-gmailcom.vercel.app/api/posts/");
  const posts = await res.json();

  // Pass the data to the page component as props
  return {
    props: {
      posts,
    },
  };
}
