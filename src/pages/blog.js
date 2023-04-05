import parse from 'html-react-parser';
import Image from "next/image";
import Link from "next/link";
const Blog = ({posts}) => {
    return (
        <>
        <section className="latest-news-section py-10 lg:py-20 bg-[#FAFAFA] dark:bg-[#262626] overflow-hidden">
            <div className="container mx-auto px-5">
                <div className="section-header text-center flex flex-col justify-center">
                    <h4 className="font-bold text-lg text-[#175CFF] mb-2">Blog</h4>
                    <h2 className="font-bold text-4xl text-black mb-3 dark:text-white">Our Latest News and Update</h2>
                    <div className="flex justify-center">
                    <p className="text-base text-[#A1A1A1] dark:text-[#a3a3a3] lg:w-[60%]">Assertively maximize cost effective methods of iterate team driven manufactured products through equity invested via customized benefits.</p>
                    </div>
                </div>
                <div className="blogs-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-14">
                {posts.map((post) => (
              <div key={post._id} data-aos="fade-up" className="latest-blog rounded-xl overflow-hidden bg-white hover:shadow-xl dark:bg-[#171717]">
              <div className="blog-image overflow-hidden">
                  <Image src={post.photo? post.photo : "https://cdn.pixabay.com/photo/2023/03/29/09/12/winter-hike-7884967__340.jpg"} width={600} height={267} className="object-cover h-64 hover:scale-125 transition ease-in delay-150 duration-500" alt="Blog Image"/>
              </div>
              <div className='blog transition delay-150 duration-500'>
                  <div className="blog-category py-5 px-5">
                      <p className='bg-[#172445] text-[#fbc206] text-sm inline-block rounded-lg py-[2px] px-3'>Customer</p>
                  </div>
                  <div className="blog-content pb-5 px-5">
                     <Link href={"blog/"+post._id}>
                     <h2 className="font-bold text-xl text-black dark:text-white hover:text-[#2667FC] mb-2 transition-all duration-300">{post.title}</h2>
                     </Link>
                      <p className="text-lg text-[#A1A1A1] dark:text-[#a3a3a3]">{ parse(`${post.desc.substring(0,124)}`)}...</p>
                  </div>
                  <div className="blog-author-info flex gap-5 px-5 py-5">
                      <div className="author-img">
                          <Image src="/images/Author/2.jpg" width={60} height={60} className="rounded-full" alt=""/>
                      </div>
                      <div className="author-name-date">
                          <h3 className="text-base font-bold hover:text-[#2667FC] transition-all duration-300 dark:text-white">Jane Martin</h3>
                          <p className="text-sm text-[#737373] font-medium dark:text-[#a3a3a3]">April 28, 2022</p>
                      </div>
                  </div>
              </div>
          </div>
           ))}
                </div>
                {/* <div className="flex justify-center items-center pt-8">
                    <button className="py-3 px-5 text-white bg-[#124acc] hover:bg-[#0044e3] rounded-lg font-bold">View All Articles</button>
                </div> */}
            </div>
       </section>
       </>
    );
};

export default Blog;


export async function getServerSideProps() {
    // Fetch data from an API or database
    const res = await fetch('https://blogapi-developertanbir-gmailcom.vercel.app/api/posts/');
    const posts = await res.json();
  
    // Pass the data to the page component as props
    return {
      props: {
        posts,
      },
    };
  }