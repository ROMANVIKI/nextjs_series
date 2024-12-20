import React from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const NavToPrevLinkFunc = () => {
    router.back(); // Navigates to the previous page
  };

  const NavToParentLink = () => {
    router.push('./'); // Navigates to the specified route
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-4xl font-extrabold text-gray-800 mb-8">
        <p>Home Page</p>
      </div>
      <div className="text-center px-4">
        <p className="text-lg text-gray-700 mb-4">
          In Day-2's Next.js class, we explored a technique for navigation:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <span className="font-semibold">`back()` method:</span> This allows us to navigate to the previous page in the browser's history. You can try this in the settings route to navigate to its parent route as specified in the project structure.
          </li>
          <li>
            <span className="font-semibold">`push()` method:</span> This helps us navigate to a parent or specific route in the application.
          </li>
          <li>
            <span className="font-semibold">Unimplemented feature:</span> The `[slug]` route is not implemented yet in this project.
          </li>
        </ul>
        <div className="mt-6 flex space-x-4">
          <button
            onClick={NavToPrevLinkFunc}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go Back
          </button>
          <button
            onClick={NavToParentLink}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Go to Parent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

