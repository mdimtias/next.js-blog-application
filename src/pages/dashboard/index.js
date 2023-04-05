import React from 'react';
import DashboardLayout from '../../component/DashboardLayout';

const Index = () => {
    return (
    //     <div className="flex flex-col md:flex-row">
    //   <div className="w-full lg:h-screen md:w-1/4 bg-gray-100 p-4">
    //     <h2 className="text-lg font-medium mb-4">Menu</h2>
    //     <ul>
    //       <li className="mb-2">
    //         <a href="#" className="text-gray-700 hover:text-gray-900">
    //           Dashboard
    //         </a>
    //       </li>
    //       <li className="mb-2">
    //         <a href="./posts" className="text-gray-700 hover:text-gray-900">
    //           Posts
    //         </a>
    //       </li>
    //       <li className="mb-2">
    //         <a href="#" className="text-gray-700 hover:text-gray-900">
    //           Categories
    //         </a>
    //       </li>
    //       <li className="mb-2">
    //         <a href="#" className="text-gray-700 hover:text-gray-900">
    //           Users
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="content w-full md:w-3/4 p-4">
    //     <h2 className="text-lg font-medium mb-4">Dashboard</h2>
    //     <p className="text-gray-700">
    //       Welcome to your dashboard. Here you can view and manage your posts,
    //       categories, and users.
    //     </p>
    //   </div>
    // </div>
    <DashboardLayout>
          <h2 className="text-lg font-medium mb-4">Dashboard</h2>
      <p className="text-gray-700">
        Welcome to your dashboard. Here you can view and manage your posts,
        categories, and users.
      </p>
    </DashboardLayout>
    );
};

export default Index;