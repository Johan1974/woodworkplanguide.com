import React from "react";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">How to Build a Custom Bookshelf</h3>
          <p className="text-gray-600 mb-4">Step-by-step guide for building a stylish bookshelf with limited tools.</p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">Read More →</a>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">Top 5 Woodworking Tools You Need</h3>
          <p className="text-gray-600 mb-4">Discover the essential tools every woodworker should own.</p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">Read More →</a>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">Tips for Perfect Wood Finishes</h3>
          <p className="text-gray-600 mb-4">Learn how to achieve professional-looking finishes for all your projects.</p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">Read More →</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
