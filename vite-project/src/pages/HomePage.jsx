import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="p-4">
      <Navbar />

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to the Online Library</h1>
        <p className="text-gray-600">"Discover. Learn. Grow. – Your Digital Library Awaits!"</p>
      </div>

      {/* Book Categories Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Browse by Categories</h2>
        <div className="grid grid-cols-3 gap-4">
          <Link to="/books/Fiction" className="p-4 bg-blue-500 text-white rounded-lg shadow-lg text-center">Fiction||</Link>
          <Link to="/books/Sci-Fi" className="p-4 bg-green-500 text-white rounded-lg shadow-lg text-center">Sci-Fi||</Link>
          <Link to="/books/Non-Fiction" className="p-4 bg-red-500 text-white rounded-lg shadow-lg text-center">Non-Fiction</Link>
        </div>
      </div>

      {/* Popular Books Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">The Great Gatsby</h3>
            <p className="text-gray-600">by F. Scott Fitzgerald</p>
            <p className="text-gray-500 mt-2">A novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.</p>
            <Link to="/book-details/1" className="text-blue-500 hover:underline mt-4 block">View Details</Link>
          </li>
          <li className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">1984</h3>
            <p className="text-gray-600">by George Orwell</p>
            <p className="text-gray-500 mt-2">A dystopian novel about a totalitarian regime that controls everything in society, including thoughts.</p>
            <Link to="/book-details/2" className="text-blue-500 hover:underline mt-4 block">View Details</Link>
          </li>
          <li className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">To Kill a Mockingbird</h3>
            <p className="text-gray-600">by Harper Lee</p>
            <p className="text-gray-500 mt-2">A Pulitzer Prize-winning novel about racial injustice and the loss of innocence in the South.</p>
            <Link to="/book-details/3" className="text-blue-500 hover:underline mt-4 block">View Details</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
