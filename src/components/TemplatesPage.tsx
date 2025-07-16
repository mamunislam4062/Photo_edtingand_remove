import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { 
  Camera, 
  Layout, 
  Search, 
  Filter, 
  Star, 
  Heart, 
  Share2, 
  Download, 
  Eye, 
  Plus, 
  Crown, 
  Grid3X3, 
  List,
  Sparkles,
  Users,
  Zap,
  ArrowRight,
  Bookmark,
  Palette,
  Image,
  Type,
  Frame
} from 'lucide-react';

const TemplatesPage = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [likedTemplates, setLikedTemplates] = useState<number[]>([]);
  const [sharedTemplate, setSharedTemplate] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Templates', count: 15000, icon: <Layout className="w-4 h-4" /> },
    { id: 'social', name: 'Social Media', count: 4500, icon: <Share2 className="w-4 h-4" /> },
    { id: 'marketing', name: 'Marketing', count: 3200, icon: <Sparkles className="w-4 h-4" /> },
    { id: 'business', name: 'Business', count: 2800, icon: <Crown className="w-4 h-4" /> },
    { id: 'personal', name: 'Personal', count: 2100, icon: <Heart className="w-4 h-4" /> },
    { id: 'events', name: 'Events', count: 1400, icon: <Star className="w-4 h-4" /> },
    { id: 'education', name: 'Education', count: 1000, icon: <Type className="w-4 h-4" /> }
  ];

  const templates = [
    {
      id: 1,
      title: 'Modern Instagram Post',
      category: 'social',
      size: '1080x1080',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: true,
      likes: 1250,
      downloads: 8900,
      tags: ['modern', 'colorful', 'trendy']
    },
    {
      id: 2,
      title: 'Professional Facebook Cover',
      category: 'social',
      size: '1200x628',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: true,
      popular: false,
      likes: 890,
      downloads: 5600,
      tags: ['professional', 'clean', 'business']
    },
    {
      id: 3,
      title: 'Creative Business Flyer',
      category: 'marketing',
      size: '8.5x11',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: true,
      likes: 2100,
      downloads: 12000,
      tags: ['creative', 'marketing', 'bold']
    },
    {
      id: 4,
      title: 'Elegant Instagram Story',
      category: 'social',
      size: '1080x1920',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: false,
      likes: 670,
      downloads: 4200,
      tags: ['elegant', 'minimal', 'story']
    },
    {
      id: 5,
      title: 'Premium Business Card',
      category: 'business',
      size: '3.5x2',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: true,
      popular: false,
      likes: 1450,
      downloads: 7800,
      tags: ['premium', 'business', 'corporate']
    },
    {
      id: 6,
      title: 'Event Poster Design',
      category: 'events',
      size: '18x24',
      image: 'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: true,
      likes: 980,
      downloads: 6500,
      tags: ['event', 'poster', 'vibrant']
    },
    {
      id: 7,
      title: 'LinkedIn Banner Template',
      category: 'business',
      size: '1584x396',
      image: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: true,
      popular: false,
      likes: 1120,
      downloads: 8200,
      tags: ['linkedin', 'professional', 'banner']
    },
    {
      id: 8,
      title: 'YouTube Thumbnail',
      category: 'social',
      size: '1280x720',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: true,
      likes: 1890,
      downloads: 15000,
      tags: ['youtube', 'thumbnail', 'engaging']
    },
    {
      id: 9,
      title: 'Wedding Invitation',
      category: 'personal',
      size: '5x7',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: true,
      popular: false,
      likes: 2300,
      downloads: 9800,
      tags: ['wedding', 'elegant', 'invitation']
    },
    {
      id: 10,
      title: 'Educational Infographic',
      category: 'education',
      size: '800x2000',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: true,
      likes: 1560,
      downloads: 11200,
      tags: ['education', 'infographic', 'informative']
    },
    {
      id: 11,
      title: 'Restaurant Menu',
      category: 'business',
      size: '8.5x14',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: true,
      popular: false,
      likes: 890,
      downloads: 5400,
      tags: ['restaurant', 'menu', 'food']
    },
    {
      id: 12,
      title: 'Birthday Party Invitation',
      category: 'personal',
      size: '5x7',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      premium: false,
      popular: true,
      likes: 1780,
      downloads: 13500,
      tags: ['birthday', 'party', 'fun']
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'recent':
        return b.id - a.id;
      case 'likes':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const stats = [
    { icon: <Layout className="w-6 h-6" />, label: 'Templates', value: '15,000+' },
    { icon: <Users className="w-6 h-6" />, label: 'Active Users', value: '8M+' },
    { icon: <Download className="w-6 h-6" />, label: 'Downloads', value: '100M+' },
    { icon: <Star className="w-6 h-6" />, label: 'Average Rating', value: '4.9/5' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center text-gray-600 hover:text-gray-900 mr-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Link>
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Camera className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Fotor</span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
                <Link to="/photo-editor" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Photo Editor</Link>
                <Link to="/design-maker" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Design</Link>
                <Link to="/templates" className="text-purple-600 px-3 py-2 text-sm font-medium">Templates</Link>
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
                <Frame className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Design Templates</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              15,000+ Professional
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Templates</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover thousands of professionally designed templates for every occasion. 
              From social media posts to business materials, find the perfect design to bring your ideas to life.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 text-purple-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates, categories, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="popular">Most Popular</option>
                  <option value="recent">Most Recent</option>
                  <option value="likes">Most Liked</option>
                </select>
                <button className="flex items-center px-6 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Categories */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all ${
                        selectedCategory === category.id
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        {category.icon}
                        <span className="ml-3 font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm opacity-75">
                        {category.count.toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Templates Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedCategory === 'all' ? 'All Templates' : categories.find(c => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-gray-600">
                    {sortedTemplates.length} templates found
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {sortedTemplates.map((template) => (
                  <div
                    key={template.id}
                    className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                      viewMode === 'list' ? 'flex items-center space-x-4' : ''
                    }`}
                  >
                    <div className={`relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 ${
                      viewMode === 'list' ? 'w-48 flex-shrink-0' : ''
                    }`}>
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
                          className={`w-full object-cover ${viewMode === 'list' ? 'h-32' : 'h-48'}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex space-x-2">
                            <button className="bg-white text-gray-900 px-3 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center text-sm">
                              <Eye className="w-4 h-4 mr-1" />
                              Preview
                            </button>
                            <Link 
                              to="/design-maker"
                              className="bg-purple-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center text-sm"
                            >
                              <Plus className="w-4 h-4 mr-1" />
                              Use Template
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      {viewMode === 'grid' && (
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-1">{template.title}</h4>
                          <p className="text-sm text-gray-500 mb-2">{template.size}</p>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                              <span className="flex items-center">
                                <Heart 
                                  className={`w-3 h-3 mr-1 cursor-pointer transition-colors ${
                                    likedTemplates.includes(template.id) ? 'text-red-500 fill-current' : ''
                                  }`}
                                  onClick={() => {
                                    setLikedTemplates(prev => 
                                      prev.includes(template.id) 
                                        ? prev.filter(id => id !== template.id)
                                        : [...prev, template.id]
                                    );
                                  }}
                                />
                                {template.likes}
                              </span>
                              <span className="flex items-center">
                                <Download className="w-3 h-3 mr-1" />
                                {template.downloads}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Bookmark 
                                className="w-4 h-4 text-gray-400 hover:text-purple-500 cursor-pointer transition-colors" 
                                onClick={() => {
                                  // Add to bookmarks functionality
                                  alert('Template bookmarked!');
                                }}
                              />
                              <Share2 
                                className="w-4 h-4 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" 
                                onClick={() => {
                                  setSharedTemplate(template.id);
                                  navigator.clipboard.writeText(window.location.href + `?template=${template.id}`);
                                  setTimeout(() => setSharedTemplate(null), 2000);
                                }}
                              />
                              {sharedTemplate === template.id && (
                                <span className="text-xs text-green-600">Copied!</span>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {template.tags.slice(0, 2).map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {viewMode === 'list' && (
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{template.title}</h4>
                        <p className="text-sm text-gray-500 mb-2">{template.size}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                          <span className="flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            {template.likes} likes
                          </span>
                          <span className="flex items-center">
                            <Download className="w-3 h-3 mr-1" />
                            {template.downloads} downloads
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {template.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-12">
            Choose from thousands of templates and start designing today
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
              Unlock Pro Templates
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
                <li><Link to="/templates" className="hover:text-white transition-colors">Templates</Link></li>
                <li><Link to="/background-remover" className="hover:text-white transition-colors">Background Remover</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
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

export default TemplatesPage;