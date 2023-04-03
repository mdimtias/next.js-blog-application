import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Author1 from "./../images/Author/1.jpg";
import Author2 from "./../images/Author/2.jpg";
import Author3 from "./../images/Author/3.jpg";

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
         <div className='text-center mt-10'>
         <Link href="blog" className="text-xl font-bold bg-indigo-700 text-white py-2 px-8 rounded-xl">Blog</Link>
         </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from an API or database
  const res = await fetch('http://localhost:5000/api/posts/');
  const posts = await res.json();

  // Pass the data to the page component as props
  return {
    props: {
      posts,
    },
  };
}