import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
const DashboardLayout = dynamic(
  () => import("../../component/DashboardLayout"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <DashboardLayout>
      <div>
        <h2 className="text-lg font-medium mb-4">Dashboard</h2>
        <p className="text-gray-700">
          Welcome to your dashboard See <Link href="./dashboard/posts">All Posts</Link> 
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Index;
