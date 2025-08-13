import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User,
  Hammer,
  Wrench,
  Ruler,
  TreePine,
  Home,
  Lightbulb
} from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Essential Woodworking Tools for Beginners: A Complete Guide",
      excerpt: "Starting your woodworking journey? Discover the must-have tools that every beginner needs to create beautiful projects without breaking the bank.",
      content: "Whether you're looking to build your first birdhouse or dream of crafting custom furniture, having the right tools is essential for success. This comprehensive guide covers the fundamental tools every beginner woodworker should consider, from basic hand tools to power tools that will grow with your skills.",
      author: "David Miller",
      date: "January 15, 2024",
      readTime: "8 min read",
      category: "Tools & Equipment",
      icon: <Hammer className="h-5 w-5" />,
      tags: ["beginner", "tools", "guide"]
    },
    {
      id: 2,
      title: "How to Choose the Right Wood for Your Project",
      excerpt: "Not all wood is created equal. Learn how to select the perfect lumber for your specific project needs, budget, and skill level.",
      content: "Choosing the right wood can make or break your woodworking project. From understanding grain patterns to considering durability and cost, this guide helps you make informed decisions about lumber selection for any project.",
      author: "Sarah Johnson",
      date: "January 10, 2024",
      readTime: "6 min read",
      category: "Materials",
      icon: <TreePine className="h-5 w-5" />,
      tags: ["wood selection", "materials", "planning"]
    },
    {
      id: 3,
      title: "10 Simple Weekend Woodworking Projects",
      excerpt: "Transform your weekends with these beginner-friendly projects that can be completed in just a few hours using basic tools.",
      content: "Looking for quick and satisfying woodworking projects? These 10 weekend projects are perfect for beginners and can be completed with minimal tools and experience. Each project includes detailed instructions and material lists.",
      author: "Mike Rodriguez",
      date: "January 5, 2024",
      readTime: "10 min read",
      category: "Projects",
      icon: <Home className="h-5 w-5" />,
      tags: ["weekend projects", "beginner", "DIY"]
    },
    {
      id: 4,
      title: "Measuring and Marking: The Foundation of Precision",
      excerpt: "Accurate measurements are crucial for successful woodworking. Master these fundamental skills to ensure your projects fit together perfectly.",
      content: "The old carpenter's saying 'measure twice, cut once' exists for good reason. Learn the essential measuring and marking techniques that separate amateur work from professional results.",
      author: "Jennifer Chen",
      date: "December 28, 2023",
      readTime: "7 min read",
      category: "Techniques",
      icon: <Ruler className="h-5 w-5" />,
      tags: ["measuring", "precision", "techniques"]
    },
    {
      id: 5,
      title: "Wood Finishing Techniques for Beautiful Results",
      excerpt: "Transform raw wood into stunning finished pieces with these professional finishing techniques and product recommendations.",
      content: "A great finish can elevate a simple project into a masterpiece. Explore various finishing techniques, from traditional stains to modern protective coatings, and learn when to use each method.",
      author: "Robert Taylor",
      date: "December 20, 2023",
      readTime: "9 min read",
      category: "Finishing",
      icon: <Wrench className="h-5 w-5" />,
      tags: ["finishing", "staining", "protection"]
    },
    {
      id: 6,
      title: "Workshop Safety: Essential Tips Every Woodworker Should Know",
      excerpt: "Stay safe in your workshop with these crucial safety guidelines and best practices for working with woodworking tools and equipment.",
      content: "Safety should always be your top priority in the workshop. Learn about personal protective equipment, tool safety, and workshop organization to prevent accidents and injuries.",
      author: "Lisa Anderson",
      date: "December 15, 2023",
      readTime: "5 min read",
      category: "Safety",
      icon: <Lightbulb className="h-5 w-5" />,
      tags: ["safety", "workshop", "prevention"]
    }
  ];

  const categories = [
    "All Posts",
    "Tools & Equipment", 
    "Materials",
    "Projects",
    "Techniques",
    "Finishing",
    "Safety"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Posts");

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              to="/"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Woodworking Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert tips, project guides, and inspiration for woodworkers of all skill levels
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    {post.icon}
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Read Full Article
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found in this category.</p>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get weekly woodworking tips, project ideas, and exclusive content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Woodworking Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get access to over 16,000 professional woodworking plans and start building today
          </p>
          <a 
            href="https://tedplansdiy.com/?hopId=lijff1974"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <Hammer className="h-5 w-5" />
            <span>Get Your Plans Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;