import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-4xl font-extrabold text-gray-800 mb-8">
        <p>Home Page</p>
      </div>
      <div className="text-center px-4">
        <p className="text-lg text-gray-700 mb-4">
          In today's Next.js class, we explored a technique for navigation I used a different technique:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <span className="font-semibold">`useRouterConst.back()`:</span> This method allows us to navigate to the previous page in the browser's history. You can try this in the settings route to navigate to its parent route as specified in the project structure.
          </li>
          <li>
            <span className="font-semibold">`useRouterConst.push('./')`:</span> This method helps us navigate to the parent or a specific route in the application.
          </li>
          <li className="font-semibold">
          And I haven't implemented the [slug] part in this project.

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

