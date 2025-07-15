import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { 
  Camera, 
  Layout, 
  Image, 
  Type, 
  Palette, 
  Sparkles, 
  Star, 
  Users, 
  Zap, 
  Heart, 
  Share2, 
  Download, 
  Plus, 
  Search,
  Filter,
  Grid3X3,
  Layers,
  Frame,
  Brush,
  Wand2,
  ArrowRight,
  Play,
  Eye,
  Crown
} from 'lucide-react';

const DesignMakerPage = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Templates', count: 10000 },
    { id: 'social', name: 'Social Media', count: 2500 },
    { id: 'marketing', name: 'Marketing', count: 1800 },
    { id: 'business', name: 'Business', count: 1200 },
    { id: 'personal', name: 'Personal', count: 900 },
    { id: 'events', name: 'Events', count: 600 }
  ];

  const templates = [
    {
      id: 1,
      title: 'Instagram Post',
      category: 'social',
      size: '1080x1080',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: true
    },
    {
      id: 2,
      title: 'Facebook Cover',
      category: 'social',
      size: '1200x628',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: true,
      popular: false
    },
    {
      id: 3,
      title: 'Business Flyer',
      category: 'marketing',
      size: '8.5x11',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: true
    },
    {
      id: 4,
      title: 'Instagram Story',
      category: 'social',
      size: '1080x1920',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: false
    },
    {
      id: 5,
      title: 'Business Card',
      category: 'business',
      size: '3.5x2',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: true,
      popular: false
    },
    {
      id: 6,
      title: 'Event Poster',
      category: 'events',
      size: '18x24',
      image: 'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: true
    },
    {
      id: 7,
      title: 'LinkedIn Banner',
      category: 'business',
      size: '1584x396',
      image: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: true,
      popular: false
    },
    {
      id: 8,
      title: 'YouTube Thumbnail',
      category: 'social',
      size: '1280x720',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: true
    }
  ];

  const features = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Professional Templates',
      description: '10,000+ designer-made templates for every occasion'
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: 'AI-Powered Design',
      description: 'Smart suggestions and automatic layout optimization'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Brand Kit',
      description: 'Maintain consistent branding across all your designs'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Advanced Editing',
      description: 'Layer management, effects, and professional tools'
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Camera className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Fotor</span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
                <Link to="/photo-editor" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Photo Editor</Link>
                <Link to="/design-maker" className="text-purple-600 px-3 py-2 text-sm font-medium">Design</Link>
                <Link to="/background-remover" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Background Remover</Link>
                <Link to="/pricing" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Pricing</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link 
                    to="/profile" 
                    className="flex items-center text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <img 
                      src={user.avatar || "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=32"} 
                      alt={user.name} 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    {user.name}
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    to="/signin" 
                    className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/signin" 
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200">
                <Layout className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Design Maker</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Create Stunning
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Designs</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Design like a pro with thousands of templates, powerful editing tools, and AI-powered features. 
              Perfect for social media, marketing, and business needs.
            </p>
            
            <div className="flex justify-center items-center space-x-8 text-gray-500 mb-12">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-1" />
                <span className="text-sm">8M+ Designs Created</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-green-400 mr-1" />
                <span className="text-sm">10,000+ Templates</span>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <button className="flex items-center px-6 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count.toLocaleString()})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'all' ? 'All Templates' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {filteredTemplates.length} templates found
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Grid3X3 className="w-5 h-5 mr-2" />
                Grid View
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  {template.popular && (
                    <div className="absolute top-3 left-3 z-10">
                      <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  {template.premium && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Crown className="w-3 h-3 mr-1" />
                        Pro
                      </div>
                    </div>
                  )}
                  
                  <div className="relative">
                    <img 
                      src={template.image} 
                      alt={template.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center">
                          <Plus className="w-4 h-4 mr-2" />
                          Use Template
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{template.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{template.size}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 capitalize">{template.category}</span>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                        <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Load More Templates
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Design Features You'll Love
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create professional designs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Start Designing Today
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-12">
            Join millions of creators who design with Fotor
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to={user ? "/design-maker" : "/signin"}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Layout className="w-5 h-5 mr-2" />
              {user ? "Start Designing" : "Get Started Free"}
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center"
            >
              <Crown className="w-5 h-5 mr-2" />
              View Pro Features
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Camera className="h-8 w-8 text-purple-400" />
                <span className="ml-2 text-xl font-bold">Fotor</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional photo editing and design tools for everyone.
              </p>
              <div className="flex space-x-4">
                <Share2 className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Heart className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Star className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/photo-editor" className="hover:text-white transition-colors">Photo Editor</Link></li>
                <li><Link to="/design-maker" className="hover:text-white transition-colors">Design Maker</Link></li>
                <li><Link to="/background-remover" className="hover:text-white transition-colors">Background Remover</Link></li>
                <li><Link to="/collage-maker" className="hover:text-white transition-colors">Collage Maker</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Fotor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignMakerPage;