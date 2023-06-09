import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Toaster = dynamic(() => import('react-hot-toast').then((mod) => mod.Toaster), {
  ssr: false,
});

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  const active = (pathname) => {
    return router.pathname === pathname ? 'text-gray-900 font-medium' : 'text-gray-700';
  };
  const basePath = '/dashboard';
  return (  
    <>
  <Toaster
    position="top-center"
    reverseOrder={false}
  />
    <div className="flex flex-col md:flex-row">
      
      <div className="w-full lg:h-screen md:w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg font-medium mb-4">Menu</h2>
        <ul>
          <li className="mb-2">
            <Link href="./" className={`mb-2 ${active('/')}`}>Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link href={`${basePath}/posts`} className={`mb-2 ${active('/posts')}`}>Posts</Link>
          </li>
          <li className="mb-2">
            <Link href={`${basePath}/categories`} className={`mb-2 ${active('/categories')}`}>Categories</Link>
          </li>
          <li className="mb-2">
            <Link href={`${basePath}/users`} className={`mb-2 ${active('/users')}`}>Users</Link>
          </li>
        </ul>
      </div>
      <div className="content w-full md:w-3/4 p-4">{children}</div>
    </div>
    </>
  );
};

export default DashboardLayout;
