import Image from "next/image";
const parse = require('html-react-parser');
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
const Id = ({post}) => {
        // Check if the post exists
        console.log(post)
        if (!post) {
            return {
            notFound: true,
            props: {
                title: "Post not found",
              },
            };
        }
    return (
        <section className="">
            <div className="container mx-auto px-5 lg:px-52">
                <div className="blog-post">
                    <Image src={post.photo? post.photo : "https://cdn.pixabay.com/photo/2023/03/29/09/12/winter-hike-7884967__340.jpg"} alt={post.title} width={600} height={400} className="mx-auto py-10"></Image>
                    <h2 className="text-3xl font-bold text-black mb-5">{post.title}</h2>
                    <p className='text-black mb-5'></p>
                   { parse(`<div>${post.desc}</div>`)}
                </div>
            </div>
        </section>
    );
};

export default Id;

