'use client'
import React, { useState } from 'react';
import Image from "next/image";
import  FileStructureImage from './assets/media/file-structure.png'
import {useRouter} from 'next/navigation'

const Home = () => {
  const [isImage, setIsImage] = useState(false);

  const route = useRouter();

  const backToHomeFunc = () => {
    setIsImage((prev) => !prev)
  }

  return (
    <>
      {isImage ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-12">
          <div className='mt-4'>

            <Image
              src={FileStructureImage}
              width={950} // Adjusted for mobile responsiveness
              height={950}
              alt="Picture of the author"
              className="rounded-lg shadow-lg"
            />
          </div>
          <button             className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
 onClick={backToHomeFunc} >Back to Home</button>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-8">
          <div className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 sm:mb-8 text-center">
            <p>Home Page</p>
          </div>
          <div className="text-center px-4 sm:px-6">
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              In Day-2's Next.js class, we explored techniques for navigation and file-based routing:
              Like using <span className="font-semibold">`Link`</span> instead of <span className="font-semibold">`a`</span> and for navigating we used{' '}
              <span className="font-semibold">`useRoute()`</span>.
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
              <li>
                <span className="font-semibold">`back()` method:</span> This allows us to navigate to the previous page in the browser's history. You can try this in the settings route to navigate to its parent route as specified in the project structure. <span className="text-red-100">Note: Browser's History</span>
              </li>
              <li>
                <span className="font-semibold">`push()` method:</span> This helps us navigate to a parent or specific route in the application.
              </li>
              <li>
                <span className="font-semibold">Unimplemented feature:</span> The `[slug]` route is not implemented yet in this project.
              </li>
            </ul>
          </div>
          <button
            onClick={() => setIsImage(true)}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Project Strucutre Image
          </button>
        </div>
      )}
    </>
  );
};

export default Home;

