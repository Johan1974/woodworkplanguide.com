import React from 'react';
import { 
  Hammer, 
  BookOpen, 
  Users, 
  Clock, 
  DollarSign, 
  Shield, 
  Star,
  CheckCircle,
  Download,
  Zap,
  Award,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Hammer className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Ted's Woodworking</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('guarantee')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Guarantee
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Woodworking with 
              <span className="text-blue-600 block">Professional Plans</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access over 16,000 detailed woodworking plans with step-by-step instructions. 
              Perfect for beginners and experts alike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="https://tedplansdiy.com/?hopId=lijff1974"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Instant Access Now
              </a>
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="h-5 w-5 text-green-500" />
                <span>60-Day Money Back Guarantee</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>16,000+ Plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Lifetime Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Instant Download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From beginner-friendly projects to advanced masterpieces, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">16,000+ Detailed Plans</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive collection covering furniture, cabinets, sheds, outdoor projects, and more. 
                Each plan includes detailed blueprints and material lists.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">All Skill Levels</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a complete beginner or experienced craftsman, our plans are designed 
                with clear instructions that anyone can follow.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Save Time & Money</h3>
              <p className="text-gray-600 leading-relaxed">
                No more guesswork or costly mistakes. Our proven plans help you build efficiently 
                with precise measurements and cut lists.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Download className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Download immediately after purchase. No waiting, no shipping delays. 
                Start your next project today.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lifetime Updates</h3>
              <p className="text-gray-600 leading-relaxed">
                Get access to new plans as they're added. Your investment keeps growing 
                with fresh projects and updated techniques.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Plans created by experienced woodworkers and tested by thousands of satisfied customers. 
                Build with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of woodworkers who've transformed their craft with our comprehensive plans
          </p>
          <a 
            href="https://tedplansdiy.com/?hopId=lijff1974"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <Download className="h-5 w-5" />
            <span>Get Your Plans Now</span>
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied woodworkers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "These plans are incredibly detailed and easy to follow. I built my first dining table 
                using Ted's plans and it turned out perfect. The step-by-step instructions made all the difference."
              </p>
              <div className="font-semibold text-gray-900">- Michael Thompson</div>
              <div className="text-sm text-gray-500">Hobbyist Woodworker</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "As a professional carpenter, I appreciate the precision and quality of these plans. 
                They've saved me countless hours of design work and helped expand my service offerings."
              </p>
              <div className="font-semibold text-gray-900">- Sarah Martinez</div>
              <div className="text-sm text-gray-500">Professional Carpenter</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "I've been woodworking for 20 years, and this collection is outstanding. The variety 
                is incredible - from simple projects for grandkids to complex furniture pieces."
              </p>
              <div className="font-semibold text-gray-900">- Robert Chen</div>
              <div className="text-sm text-gray-500">Experienced Craftsman</div>
            </div>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section id="guarantee" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 p-12 rounded-2xl border-2 border-green-200">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              100% Money-Back Guarantee
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're so confident you'll love Ted's Woodworking Plans that we offer a full 
              <strong className="text-green-600"> 60-day money-back guarantee</strong>. 
              If you're not completely satisfied for any reason, simply contact us for a full refund.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-green-600 font-semibold">
                <CheckCircle className="h-6 w-6" />
                <span>No Questions Asked</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600 font-semibold">
                <CheckCircle className="h-6 w-6" />
                <span>60 Full Days</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600 font-semibold">
                <CheckCircle className="h-6 w-6" />
                <span>100% Refund</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Hammer className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Ted's Woodworking</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering woodworkers of all skill levels with comprehensive, professional-grade 
                plans and instructions since 2012.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://tedplansdiy.com/?hopId=lijff1974"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Get Started Today
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Reviews
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('guarantee')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Guarantee
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">support@tedswoodworking.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">1-800-123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Available 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Ted's Woodworking. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;