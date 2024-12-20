import React from 'react';
import { useRouter } from 'next/router';

const Home = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-4xl font-extrabold text-gray-800 mb-8">
        <p>Home Page</p>
      </div>
      <div className="text-center px-4">
        <p className="text-lg text-gray-700 mb-4">
          In Day-2's Next.js class, we explored a technique for navigation and file based routing:
          `useRoute`
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
      </div>
    </div>
  );
};

export default Home;

