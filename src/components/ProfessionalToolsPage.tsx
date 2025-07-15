import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { 
  Camera, 
  Sparkles, 
  Scissors, 
  Palette, 
  Layout, 
  Frame, 
  Wand2, 
  Image, 
  Crop, 
  RotateCw, 
  FlipHorizontal, 
  Layers, 
  Filter, 
  Brush, 
  Type, 
  Star, 
  Users, 
  Zap, 
  Crown, 
  ArrowRight,
  Play,
  Heart,
  Share2,
  Download,
  Eye,
  Sliders
} from 'lucide-react';

const ProfessionalToolsPage = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tools', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'ai', name: 'AI Tools', icon: <Wand2 className="w-5 h-5" /> },
    { id: 'editing', name: 'Photo Editing', icon: <Image className="w-5 h-5" /> },
    { id: 'design', name: 'Design', icon: <Layout className="w-5 h-5" /> },
    { id: 'effects', name: 'Effects', icon: <Filter className="w-5 h-5" /> }
  ];

  const tools = [
    {
      id: 'background-remover',
      name: 'Background Remover',
      description: 'Remove backgrounds from images with AI precision',
      icon: <Scissors className="w-8 h-8" />,
      category: 'ai',
      gradient: 'from-blue-600 to-purple-600',
      features: ['AI-powered', 'One-click removal', 'High precision'],
      link: '/background-remover',
      popular: true
    },
    {
      id: 'photo-editor',
      name: 'Photo Editor',
      description: 'Professional photo editing with advanced tools',
      icon: <Image className="w-8 h-8" />,
      category: 'editing',
      gradient: 'from-purple-600 to-pink-600',
      features: ['Professional tools', 'Layer support', 'RAW editing'],
      link: '/photo-editor',
      popular: true
    },
    {
      id: 'ai-enhancer',
      name: 'AI Enhancer',
      description: 'Automatically enhance photos with AI',
      icon: <Sparkles className="w-8 h-8" />,
      category: 'ai',
      gradient: 'from-green-600 to-teal-600',
      features: ['Auto enhancement', 'Smart corrections', 'One-click magic'],
      link: '/photo-editor',
      popular: false
    },
    {
      id: 'collage-maker',
      name: 'Collage Maker',
      description: 'Create beautiful photo collages',
      icon: <Frame className="w-8 h-8" />,
      category: 'design',
      gradient: 'from-orange-600 to-red-600',
      features: ['Multiple layouts', 'Drag & drop', 'Custom templates'],
      link: '/collage-maker',
      popular: false
    },
    {
      id: 'color-correction',
      name: 'Color Correction',
      description: 'Professional color grading and correction',
      icon: <Palette className="w-8 h-8" />,
      category: 'editing',
      gradient: 'from-pink-600 to-rose-600',
      features: ['Color wheels', 'Curves adjustment', 'Professional grading'],
      link: '/photo-editor',
      popular: false
    },
    {
      id: 'crop-resize',
      name: 'Crop & Resize',
      description: 'Crop and resize images to any dimension',
      icon: <Crop className="w-8 h-8" />,
      category: 'editing',
      gradient: 'from-indigo-600 to-blue-600',
      features: ['Smart crop', 'Aspect ratios', 'Batch processing'],
      link: '/photo-editor',
      popular: false
    },
    {
      id: 'filters-effects',
      name: 'Filters & Effects',
      description: 'Apply stunning filters and effects',
      icon: <Filter className="w-8 h-8" />,
      category: 'effects',
      gradient: 'from-purple-600 to-indigo-600',
      features: ['100+ filters', 'Custom effects', 'Real-time preview'],
      link: '/photo-editor',
      popular: false
    },
    {
      id: 'text-editor',
      name: 'Text Editor',
      description: 'Add beautiful text to your images',
      icon: <Type className="w-8 h-8" />,
      category: 'design',
      gradient: 'from-teal-600 to-green-600',
      features: ['Custom fonts', 'Text effects', 'Typography tools'],
      link: '/photo-editor',
      popular: false
    },
    {
      id: 'layer-editor',
      name: 'Layer Editor',
      description: 'Advanced layer management and editing',
      icon: <Layers className="w-8 h-8" />,
      category: 'editing',
      gradient: 'from-gray-600 to-gray-800',
      features: ['Layer blending', 'Opacity control', 'Layer effects'],
      link: '/photo-editor',
      popular: false
    }
  ];

  const filteredTools = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: '10M+ Users', value: '10,000,000+' },
    { icon: <Image className="w-6 h-6" />, label: 'Images Processed', value: '500M+' },
    { icon: <Star className="w-6 h-6" />, label: 'Average Rating', value: '4.8/5' },
    { icon: <Zap className="w-6 h-6" />, label: 'Processing Speed', value: '< 3 sec' }
  ];

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
                <Link to="/background-remover" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Background Remover</Link>
                <Link to="/professional-tools" className="text-purple-600 px-3 py-2 text-sm font-medium">Professional Tools</Link>
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
                <Crown className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Professional Tools</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Professional Photo
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Editing Tools</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Access our complete suite of professional photo editing tools. From AI-powered enhancements 
              to advanced editing features, everything you need to create stunning visuals.
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
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {tool.popular && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${tool.gradient} text-white mb-6`}>
                    {tool.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={tool.link}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    Try {tool.name}
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Professional Tools?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading features trusted by millions of creators worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600">
                <Wand2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered</h3>
              <p className="text-gray-600">Advanced AI technology for intelligent photo processing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Process images in seconds with optimized performance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High Quality</h3>
              <p className="text-gray-600">Professional-grade results with pixel-perfect precision</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-pink-600">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interface designed for creators of all levels</p>
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
            Join millions of creators who trust our professional tools
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to={user ? "/photo-editor" : "/signin"}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {user ? "Start Creating" : "Get Started Free"}
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center"
            >
              <Crown className="w-5 h-5 mr-2" />
              View Pricing
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
                <li><Link to="/background-remover" className="hover:text-white transition-colors">Background Remover</Link></li>
                <li><Link to="/collage-maker" className="hover:text-white transition-colors">Collage Maker</Link></li>
                <li><Link to="/professional-tools" className="hover:text-white transition-colors">Professional Tools</Link></li>
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

export default ProfessionalToolsPage;