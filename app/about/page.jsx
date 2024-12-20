'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const useRouterConst = useRouter();

  const NavToPrevLinkFunc = () => {
    // useRouterConst.push('./');
    useRouterConst.back()
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-4xl font-extrabold text-gray-800 mb-8">
        <p>About Page</p>
      </div>
      <div>
        <button
          onClick={NavToPrevLinkFunc}
          className="bg-blue-700 rounded-lg px-6 py-3 text-white text-xl hover:bg-red-500 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Page;

