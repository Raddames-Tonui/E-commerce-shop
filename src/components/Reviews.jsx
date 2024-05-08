import React from 'react';
import Contact from './Contact';

export default function Reviews() {
  return (
    <div>
      <div id="Reviews" className="bg-white border-gray-200 dark:bg-gray-900 md:h-screen m-0.5 p-10">
        <h1 className="text-center text-4xl font-semibold dark:text-white">Customer Reviews</h1>
        <div className="pt-10 flex justify-between">
          <div className='bg-white border-gray-200 dark:bg-white rounded-lg overflow-hidden shadow-md p-6 w-72'>
            <img className='h-24 w-24 rounded-full mx-auto' src="/src/components/images/OIP__23_-removebg-preview.png" alt="TechNest" />
            <span className="block text-center mt-4 text-lg">Stars</span>
            <p className="text-center mt-2">The company has good customer service and their products are cool.</p>
          </div>

          <div className='bg-white border-gray-200 dark:bg-white rounded-lg overflow-hidden shadow-md p-6 w-72'>
            <img className='h-24 w-24 rounded-full mx-auto' src="/src/components/images/OIP__23_-removebg-preview.png" alt="TechNest" />
            <span className="block text-center mt-4 text-lg">Stars</span>
            <p className="text-center mt-2">The company has good customer service and their products are cool.</p>
          </div>

          <div className='bg-white border-gray-200 dark:bg-white rounded-lg overflow-hidden shadow-md p-6 w-72'>
            <img className='h-24 w-24 rounded-full mx-auto' src="/src/components/images/OIP__23_-removebg-preview.png" alt="TechNest" />
            <span className="block text-center mt-4 text-lg">Stars</span>
            <p className="text-center mt-2">The company has good customer service and their products are cool.</p>
          </div>

          <div className='bg-white border-gray-200 dark:bg-white rounded-lg overflow-hidden shadow-md p-6 w-72'>
            <img className='h-24 w-24 rounded-full mx-auto' src="/src/components/images/OIP__23_-removebg-preview.png" alt="TechNest" />
            <span className="block text-center mt-4 text-lg">Stars</span>
            <p className="text-center mt-2">The company has good customer service and their products are cool.</p>
          </div>

          <div className='bg-white border-gray-200 dark:bg-white rounded-lg overflow-hidden shadow-md p-6 w-72'>
            <img className='h-24 w-24 rounded-full mx-auto' src="/src/components/images/OIP__23_-removebg-preview.png" alt="TechNest" />
            <span className="block text-center mt-4 text-lg">Stars</span>
            <p className="text-center mt-2">The company has good customer service and their products are cool.</p>
          </div>

          <div className='bg-white border-gray-200 dark:bg-white rounded-lg overflow-hidden shadow-md p-6 w-72'>
            <img className='h-24 w-24 rounded-full mx-auto' src="/src/components/images/OIP__23_-removebg-preview.png" alt="TechNest" />
            <span className="block text-center mt-4 text-lg">Stars</span>
            <p className="text-center mt-2">The company has good customer service and their products are cool.</p>
          </div>


          <div className='bg-white border-gray-200 dark:bg-white rounded-lg overflow-hidden shadow-md p-6 w-72'>
            <img className='h-24 w-24 rounded-full mx-auto' src="/src/components/images/OIP__23_-removebg-preview.png" alt="TechNest" />
            <span className="block text-center mt-4 text-lg">Stars</span>
            <p className="text-center mt-2">The company has good customer service and their products are cool.</p>
          </div>
        </div>
        <button className="bg-white border-gray-200 dark:bg-gray-900 m-0.5 p-4 mt-8 w-full">Click here to add your review</button>
      </div>
      <Contact />
    </div>
  );
}
