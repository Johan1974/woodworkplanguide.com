import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
  Lightbulb,
  Share2,
  BookOpen
} from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  
  const blogPosts = [
    {
      id: 1,
      slug: "essential-woodworking-tools-beginners-guide",
      title: "Essential Woodworking Tools for Beginners: A Complete Guide",
      metaDescription: "Discover the must-have woodworking tools every beginner needs. Complete guide to hand tools, power tools, and workshop setup for successful woodworking projects.",
      excerpt: "Starting your woodworking journey? Discover the must-have tools that every beginner needs to create beautiful projects without breaking the bank.",
      content: `
        <p>Whether you're looking to build your first birdhouse or dream of crafting custom furniture, having the right tools is essential for success. This comprehensive guide covers the fundamental tools every beginner woodworker should consider, from basic hand tools to power tools that will grow with your skills.</p>

        <h2>Hand Tools: The Foundation of Woodworking</h2>
        <p>Before diving into power tools, it's crucial to master the basics with quality hand tools. These tools will serve you throughout your woodworking journey and help you develop fundamental skills that no power tool can replace.</p>

        <h3>Essential Hand Tools for Every Beginner:</h3>
        <ul>
          <li><strong>Measuring Tools:</strong> A good tape measure, combination square, and marking gauge are indispensable for accurate measurements. Precision starts with proper measuring.</li>
          <li><strong>Hand Saws:</strong> Start with a quality crosscut saw and a dovetail saw for precision cuts. These teach you proper cutting technique.</li>
          <li><strong>Wood Chisels:</strong> A set of sharp chisels (1/4", 1/2", 3/4", and 1") will handle most joinery tasks and detail work.</li>
          <li><strong>Hand Planes:</strong> A block plane and a smoothing plane will help you achieve perfectly flat, smooth surfaces.</li>
          <li><strong>Clamps:</strong> You can never have too many clamps. Start with bar clamps and pipe clamps in various sizes for glue-ups.</li>
        </ul>

        <h2>Power Tools for Efficiency and Precision</h2>
        <p>While hand tools are essential for developing skills, power tools can significantly speed up your work and open up new possibilities. Here are the most important power tools for beginners, listed in order of priority:</p>

        <h3>Must-Have Power Tools:</h3>
        <ul>
          <li><strong>Circular Saw:</strong> Perfect for breaking down lumber and making straight cuts. Choose one with a quality blade for clean cuts.</li>
          <li><strong>Random Orbital Sander:</strong> Essential for achieving smooth finishes on your projects. Much faster than hand sanding.</li>
          <li><strong>Cordless Drill/Driver:</strong> Invaluable for drilling pilot holes and driving screws. Get one with multiple speed settings.</li>
          <li><strong>Router:</strong> Opens up a world of decorative edges and advanced joinery options. Start with a basic fixed-base router.</li>
          <li><strong>Miter Saw:</strong> Ideal for accurate crosscuts and miter cuts. A 10" saw handles most projects perfectly.</li>
        </ul>

        <h2>Setting Up Your Woodworking Workshop</h2>
        <p>A well-organized workshop is just as important as having the right tools. Even a small garage or basement space can be highly functional with proper planning and organization.</p>

        <h3>Workshop Essentials:</h3>
        <ul>
          <li><strong>Sturdy Workbench:</strong> The heart of any workshop. It should be heavy, stable, and at the right height for comfortable work.</li>
          <li><strong>Tool Storage:</strong> Organize your tools with pegboards, drawers, and shelving. Easy access saves time and prevents tool damage.</li>
          <li><strong>Proper Lighting:</strong> Good lighting is crucial for safety and precision. LED shop lights provide excellent illumination.</li>
          <li><strong>Dust Collection:</strong> Keep your workspace clean and your lungs healthy with proper dust collection or air filtration.</li>
        </ul>

        <h2>Building Your Tool Collection Strategically</h2>
        <p>Don't feel pressured to buy everything at once. Build your tool collection gradually, purchasing quality tools as you need them for specific projects. This approach allows you to invest in better tools and learn what works best for your woodworking style.</p>

        <p>Start with a basic set of hand tools and one or two essential power tools. As you complete projects and gain experience, you'll naturally identify which tools would make your work easier or more enjoyable.</p>

        <h2>Tool Maintenance and Care</h2>
        <p>Taking care of your tools is just as important as choosing the right ones. Sharp, well-maintained tools are safer, more efficient, and produce better results. Learn basic sharpening techniques for chisels and plane irons, and keep all your tools clean and properly stored.</p>

        <h3>Basic Maintenance Tips:</h3>
        <ul>
          <li>Keep cutting tools sharp - dull tools are dangerous and produce poor results</li>
          <li>Clean tools after each use to prevent rust and buildup</li>
          <li>Store tools in a dry environment to prevent corrosion</li>
          <li>Oil metal surfaces periodically to maintain smooth operation</li>
        </ul>

        <p>With the right tools and proper technique, you'll be amazed at what you can create. Start with simple projects like a basic box or cutting board to build your skills and confidence, then gradually take on more challenging builds as your tool collection and expertise grow.</p>

        <p>Remember, woodworking is a journey, not a destination. Each project teaches you something new, and every tool you master opens up new creative possibilities. Take your time, focus on safety, and enjoy the process of creating beautiful, functional pieces with your own hands.</p>
      `,
      author: "David Miller",
      date: "January 15, 2024",
      readTime: "8 min read",
      category: "Tools & Equipment",
      icon: <Hammer className="h-5 w-5" />,
      tags: ["beginner", "tools", "guide", "workshop setup", "hand tools", "power tools"]
    },
    {
      id: 2,
      slug: "choose-right-wood-project-guide",
      title: "How to Choose the Right Wood for Your Project",
      metaDescription: "Learn how to select the perfect lumber for woodworking projects. Complete guide to hardwoods, softwoods, grain patterns, and wood selection tips.",
      excerpt: "Not all wood is created equal. Learn how to select the perfect lumber for your specific project needs, budget, and skill level.",
      content: `
        <p>Choosing the right wood can make or break your woodworking project. From understanding grain patterns to considering durability and cost, this guide helps you make informed decisions about lumber selection for any project, whether you're building a simple shelf or an heirloom dining table.</p>

        <h2>Understanding Wood Types: Hardwoods vs Softwoods</h2>
        <p>Wood falls into two main categories: hardwoods and softwoods. Despite their names, these classifications don't necessarily indicate the wood's actual hardness but rather the type of tree it comes from and its cellular structure.</p>

        <h3>Hardwoods: Premium Choice for Fine Projects</h3>
        <p>Hardwoods come from deciduous trees (trees that lose their leaves annually). They're generally denser, more durable, and feature more complex grain patterns than softwoods, making them ideal for furniture and fine woodworking projects.</p>

        <h4>Popular Hardwood Species:</h4>
        <ul>
          <li><strong>Red Oak:</strong> Strong, durable, and features prominent grain patterns. Excellent for furniture, cabinets, and flooring. Takes stain beautifully.</li>
          <li><strong>Hard Maple:</strong> Extremely hard, light-colored wood with fine, subtle grain. Perfect for cutting boards, workbenches, and painted furniture.</li>
          <li><strong>Cherry:</strong> Beautiful reddish wood that darkens and develops rich patina with age. Ideal for fine furniture and cabinetry.</li>
          <li><strong>Black Walnut:</strong> Premium wood with rich chocolate tones and beautiful grain. Perfect for high-end furniture and decorative pieces.</li>
          <li><strong>White Ash:</strong> Strong and flexible with prominent grain. Commonly used for tool handles, baseball bats, and bent-wood projects.</li>
        </ul>

        <h3>Softwoods: Affordable and Versatile</h3>
        <p>Softwoods come from coniferous trees (evergreens). They're generally less expensive, lighter in weight, and easier to work with, making them perfect for construction, outdoor projects, and beginner woodworking.</p>

        <h4>Common Softwood Species:</h4>
        <ul>
          <li><strong>Eastern White Pine:</strong> Soft, lightweight, and easy to work. Great for practice projects, painted pieces, and indoor construction.</li>
          <li><strong>Western Red Cedar:</strong> Naturally rot and insect resistant. Perfect for outdoor projects, decking, and siding.</li>
          <li><strong>Douglas Fir:</strong> Strong construction lumber with attractive grain. Commonly used for framing and structural work.</li>
          <li><strong>Redwood:</strong> Beautiful reddish color and naturally weather-resistant. Ideal for outdoor furniture and decking.</li>
        </ul>

        <h2>Key Factors in Wood Selection</h2>

        <h3>Project Requirements and End Use</h3>
        <p>The intended use of your project should be the primary factor in wood selection:</p>
        <ul>
          <li><strong>Indoor Furniture:</strong> Hardwoods like oak, maple, or cherry provide durability and beauty</li>
          <li><strong>Outdoor Projects:</strong> Choose naturally resistant woods like cedar or treated lumber</li>
          <li><strong>Cutting Boards:</strong> Hard maple or other closed-grain hardwoods for food safety</li>
          <li><strong>Painted Projects:</strong> Pine or poplar provide smooth surfaces that take paint well</li>
        </ul>

        <h3>Understanding Wood Grain</h3>
        <p>Grain pattern affects both appearance and workability:</p>
        <ul>
          <li><strong>Straight Grain:</strong> Easier to work with, stronger, and more stable</li>
          <li><strong>Figured Grain:</strong> Beautiful but can be challenging to work with</li>
          <li><strong>Open Grain:</strong> Woods like oak have large pores that may need filling for smooth finishes</li>
          <li><strong>Closed Grain:</strong> Woods like maple have small pores and finish smoothly</li>
        </ul>

        <h2>Budget Considerations</h2>
        <p>Wood costs can vary dramatically. Here's how to balance quality and budget:</p>

        <h3>Budget-Friendly Options:</h3>
        <ul>
          <li><strong>Pine:</strong> Excellent for learning and painted projects</li>
          <li><strong>Poplar:</strong> Affordable hardwood that's easy to work with</li>
          <li><strong>Red Oak:</strong> Good value among premium hardwoods</li>
        </ul>

        <h3>Premium Choices:</h3>
        <ul>
          <li><strong>Walnut:</strong> Investment-grade wood for special projects</li>
          <li><strong>Cherry:</strong> Beautiful aging characteristics justify the cost</li>
          <li><strong>Exotic Species:</strong> Use sparingly as accents to control costs</li>
        </ul>

        <h2>Selecting Quality Lumber</h2>
        <p>When shopping for lumber, inspect each board carefully:</p>

        <h3>What to Look For:</h3>
        <ul>
          <li><strong>Straight Boards:</strong> Avoid warped, bowed, or twisted lumber</li>
          <li><strong>Proper Moisture Content:</strong> Kiln-dried lumber (6-8% moisture) is ideal for indoor projects</li>
          <li><strong>Minimal Defects:</strong> Small knots are usually fine, but avoid large knots in structural areas</li>
          <li><strong>Consistent Color:</strong> Choose boards from the same lot for uniform appearance</li>
        </ul>

        <h2>Sustainable Wood Choices</h2>
        <p>Consider the environmental impact of your wood choices:</p>
        <ul>
          <li>Look for FSC (Forest Stewardship Council) certified lumber</li>
          <li>Consider reclaimed wood for unique character and sustainability</li>
          <li>Choose locally sourced species when possible to reduce transportation impact</li>
          <li>Use every piece efficiently to minimize waste</li>
        </ul>

        <p>Remember, the "best" wood for your project depends on your specific needs, budget, and skill level. Start with easier-to-work species like pine or poplar while learning, then gradually work your way up to more challenging and expensive woods as your skills develop.</p>

        <p>Take time to visit local lumber yards and get familiar with different species. Handle the wood, smell it, and observe its characteristics. This hands-on experience will help you make better choices for future projects and develop an appreciation for the natural beauty and unique properties of different wood species.</p>
      `,
      author: "Sarah Johnson",
      date: "January 10, 2024",
      readTime: "6 min read",
      category: "Materials",
      icon: <TreePine className="h-5 w-5" />,
      tags: ["wood selection", "materials", "planning", "hardwood", "softwood", "lumber"]
    },
    {
      id: 3,
      slug: "simple-weekend-woodworking-projects",
      title: "10 Simple Weekend Woodworking Projects",
      metaDescription: "Discover 10 beginner-friendly woodworking projects perfect for weekends. Complete with material lists and step-by-step guidance for quick, satisfying builds.",
      excerpt: "Transform your weekends with these beginner-friendly projects that can be completed in just a few hours using basic tools.",
      content: `
        <p>Looking for quick and satisfying woodworking projects that won't consume your entire weekend? These 10 beginner-friendly projects are perfect for building skills, creating useful items for your home, and experiencing the joy of completing a project in just a few hours.</p>

        <h2>Project 1: Simple Wooden Cutting Board</h2>
        <p><strong>Time Required:</strong> 2-3 hours<br>
        <strong>Skill Level:</strong> Beginner<br>
        <strong>Materials:</strong> Hard maple or cherry board, food-safe finish</p>
        
        <p>A cutting board is an excellent first project that teaches basic measuring, cutting, and finishing skills. Choose a hardwood like maple for durability and food safety. Sand progressively through 220 grit and finish with food-safe mineral oil.</p>

        <h2>Project 2: Floating Shelves</h2>
        <p><strong>Time Required:</strong> 3-4 hours<br>
        <strong>Skill Level:</strong> Beginner<br>
        <strong>Materials:</strong> 1x6 pine boards, hidden shelf brackets, wood stain</p>
        
        <p>Floating shelves add storage and style to any room. This project teaches you about wall mounting, finishing techniques, and working with hardware. The hidden brackets create a clean, modern look.</p>

        <h2>Project 3: Wooden Phone Stand</h2>
        <p><strong>Time Required:</strong> 1-2 hours<br>
        <strong>Skill Level:</strong> Beginner<br>
        <strong>Materials:</strong> Small piece of hardwood, sandpaper, finish of choice</p>
        
        <p>Perfect for using up scrap wood, this project teaches angled cuts and precision work. Design it to hold your phone at the perfect viewing angle for video calls or watching content.</p>

        <h2>Project 4: Simple Wooden Box</h2>
        <p><strong>Time Required:</strong> 4-5 hours<br>
        <strong>Skill Level:</strong> Beginner to Intermediate<br>
        <strong>Materials:</strong> 1/2" plywood or solid wood, wood glue, small hinges</p>
        
        <p>Building a box teaches fundamental joinery techniques. Start with simple butt joints secured with glue and screws, then progress to more advanced joints as your skills develop. Add a hinged lid for extra functionality.</p>

        <h2>Project 5: Wooden Coasters</h2>
        <p><strong>Time Required:</strong> 1-2 hours<br>
        <strong>Skill Level:</strong> Beginner<br>
        <strong>Materials:</strong> Hardwood scraps, felt pads, waterproof finish</p>
        
        <p>Coasters are perfect for practicing precision cutting and finishing. Cut them square or round, sand smooth, and apply a waterproof finish. Add felt pads to protect furniture surfaces.</p>

        <h2>Project 6: Wall-Mounted Key Holder</h2>
        <p><strong>Time Required:</strong> 2-3 hours<br>
        <strong>Skill Level:</strong> Beginner<br>
        <strong>Materials:</strong> Small board, decorative hooks, mounting hardware</p>
        
        <p>Organize your entryway with a custom key holder. This project combines woodworking with hardware installation and can be customized with family names, decorative elements, or burned designs.</p>

        <h2>Project 7: Simple Bookends</h2>
        <p><strong>Time Required:</strong> 2-3 hours<br>
        <strong>Skill Level:</strong> Beginner<br>
        <strong>Materials:</strong> Hardwood blocks, felt pads, wood finish</p>
        
        <p>Bookends teach you about weight distribution and stability. Cut them from solid hardwood blocks, sand smooth, and add felt pads to protect shelf surfaces. Consider adding decorative elements or carved details.</p>

        <h2>Project 8: Wooden Pencil Holder</h2>
        <p><strong>Time Required:</strong> 2-3 hours<br>
        <strong>Skill Level:</strong> Beginner<br>
        <strong>Materials:</strong> Small wood block, drill bits, sandpaper, finish</p>
        
        <p>Perfect for the home office or workshop, this project teaches drilling techniques and finishing. Drill various sized holes to accommodate different writing instruments and tools.</p>

        <h2>Project 9: Picture Frame</h2>
        <p><strong>Time Required:</strong> 3-4 hours<br>
        <strong>Skill Level:</strong> Beginner to Intermediate<br>
        <strong>Materials:</strong> Picture frame molding, glass, backing board, frame hardware</p>
        
        <p>Picture frames teach miter cuts and precise joinery. Start with simple profiles and work your way up to more complex moldings. This project also introduces you to working with glass and frame hardware.</p>

        <h2>Project 10: Wooden Serving Tray</h2>
        <p><strong>Time Required:</strong> 4-5 hours<br>
        <strong>Skill Level:</strong> Beginner to Intermediate<br>
        <strong>Materials:</strong> Hardwood boards, handles, food-safe finish</p>
        
        <p>A serving tray combines multiple woodworking skills: edge joining, handle attachment, and food-safe finishing. Choose attractive hardwood and consider adding decorative elements or personalization.</p>

        <h2>Tips for Weekend Project Success</h2>

        <h3>Planning and Preparation:</h3>
        <ul>
          <li>Read through the entire project before starting</li>
          <li>Gather all materials and tools beforehand</li>
          <li>Set up your workspace for efficiency</li>
          <li>Allow extra time for unexpected challenges</li>
        </ul>

        <h3>Safety First:</h3>
        <ul>
          <li>Always wear safety glasses and hearing protection</li>
          <li>Keep your workspace clean and well-lit</li>
          <li>Take breaks when you feel rushed or frustrated</li>
          <li>Never skip safety steps to save time</li>
        </ul>

        <h3>Building Skills Progressively:</h3>
        <ul>
          <li>Start with the simplest projects and work your way up</li>
          <li>Focus on one new technique per project</li>
          <li>Don't be afraid to make mistakes - they're learning opportunities</li>
          <li>Keep a project journal to track what you learn</li>
        </ul>

        <p>These weekend projects are designed to be achievable, educational, and rewarding. Each one teaches valuable skills that will serve you well in more complex future projects. Remember, the goal isn't perfection - it's progress and enjoyment of the woodworking process.</p>

        <p>Start with projects that match your current skill level and available tools. As you complete each project, you'll gain confidence and skills that will prepare you for more ambitious builds. Most importantly, have fun and take pride in creating something useful and beautiful with your own hands!</p>
      `,
      author: "Mike Rodriguez",
      date: "January 5, 2024",
      readTime: "10 min read",
      category: "Projects",
      icon: <Home className="h-5 w-5" />,
      tags: ["weekend projects", "beginner", "DIY", "quick builds", "home improvement"]
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Update page title and meta description for SEO
  React.useEffect(() => {
    document.title = `${post.title} | Ted's Woodworking Blog`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.metaDescription);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.metaDescription,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "dateModified": post.date,
      "publisher": {
        "@type": "Organization",
        "name": "Ted's Woodworking",
        "logo": {
          "@type": "ImageObject",
          "url": "https://woodworkplanguide.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://woodworkplanguide.com/blog/${post.id}`
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.title = "Ted's Woodworking Plans - 16,000+ Professional Woodworking Blueprints & DIY Projects";
      if (metaDescription) {
        metaDescription.setAttribute('content', "Discover over 16,000 detailed woodworking plans with step-by-step instructions. Perfect for beginners and experts. Save time and money with professional woodworking blueprints and DIY projects.");
      }
      document.head.removeChild(script);
    };
  }, [post]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              to="/blog"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Blog</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              {post.icon}
            </div>
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

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
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get access to over 16,000 professional woodworking plans and start building today
          </p>
          <a 
            href="https://tedplansdiy.com/?hopId=lijff1974"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <BookOpen className="h-5 w-5" />
            <span>Get Your Plans Now</span>
          </a>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        {relatedPost.icon}
                      </div>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;