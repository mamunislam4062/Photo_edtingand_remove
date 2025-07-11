import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DemoModal from './DemoModal';
import { 
  Camera, 
  Palette, 
  Sparkles, 
  Image, 
  Download, 
  Star, 
  Users, 
  ArrowRight,
  Menu,
  X,
  Play,
  Check,
  Zap,
  Heart,
  Share2,
  Scissors,
  Brush,
  Wand2,
  Layout,
  Frame,
  Filter
} from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState('photo-editor');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const tools = [
    {
      id: 'photo-editor',
      name: 'Photo Editor',
      icon: <Image className="w-8 h-8" />,
      description: 'Professional photo editing with AI-powered tools',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'background-remover',
      name: 'Background Remover',
      icon: <Scissors className="w-8 h-8" />,
      description: 'Remove backgrounds with one click using AI',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'design-maker',
      name: 'Design Maker',
      icon: <Layout className="w-8 h-8" />,
      description: 'Create stunning designs with templates',
      gradient: 'from-pink-600 to-orange-600'
    },
    {
      id: 'collage-maker',
      name: 'Collage Maker',
      icon: <Frame className="w-8 h-8" />,
      description: 'Combine photos into beautiful collages',
      gradient: 'from-green-600 to-teal-600'
    }
  ];

  const templates = [
    {
      category: 'Social Media',
      items: [
        { name: 'Instagram Post', size: '1080x1080', image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { name: 'Instagram Story', size: '1080x1920', image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { name: 'Facebook Cover', size: '1200x628', image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { name: 'Twitter Header', size: '1500x500', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400' }
      ]
    },
    {
      category: 'Marketing',
      items: [
        { name: 'Flyer', size: '8.5x11', image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { name: 'Poster', size: '18x24', image: 'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { name: 'Banner', size: '728x90', image: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { name: 'Brochure', size: '11x8.5', image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400' }
      ]
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'AI-Powered Editing',
      description: 'Intelligent tools that enhance your photos automatically'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Professional Templates',
      description: 'Thousands of designer-made templates for every occasion'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'One-Click Enhancement',
      description: 'Transform your photos with a single click'
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: 'Advanced Filters',
      description: 'Professional-grade filters and effects'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '5 exports per month',
        'Basic editing tools',
        'Standard templates',
        'Watermark included'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      features: [
        'Unlimited exports',
        'All editing tools',
        'Premium templates',
        'No watermark',
        'Priority support',
        'AI features'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Team',
      price: '$19.99',
      period: 'per month',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Brand kit',
        'Admin controls',
        'Priority support',
        'Custom templates'
      ],
      cta: 'Contact Sales',
      popular: false
    }
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
                <a href="#" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Photo Editor</a>
                <a href="#" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Design</a>
                <a href="#" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Templates</a>
                <a href="https://www.fotor.com/background-remover" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Background Remover</a>
                <a href="#" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Pricing</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
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
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-purple-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Photo Editor</a>
              <a href="#" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Design</a>
              <a href="#" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Templates</a>
              <a href="https://www.fotor.com/background-remover" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Background Remover</a>
              <a href="#" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Pricing</a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link 
                  to="/signin" 
                  className="text-gray-900 hover:text-purple-600 block w-full text-left px-3 py-2 text-base font-medium"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signin" 
                  className="bg-purple-600 text-white block w-full text-left px-3 py-2 rounded-lg text-base font-medium hover:bg-purple-700 transition-colors mt-2"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">AI-Powered Photo Editing</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Edit Photos Like a
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Pro</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Create stunning visuals with our AI-powered photo editor. From professional retouching to creative designs, 
              make every image extraordinary with just a few clicks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/signin" 
                className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
              >
                Start Editing for Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
            
            <div className="mt-16 flex justify-center items-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-sm">4.8/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-1" />
                <span className="text-sm">10M+ Users</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-red-400 mr-1" />
                <span className="text-sm">99% Love It</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Tools for Every Creator
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-grade tools that make photo editing accessible to everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  selectedTool === tool.id ? 'scale-105' : ''
                }`}
                onClick={() => setSelectedTool(tool.id)}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${tool.gradient} text-white mb-6`}>
                    {tool.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                  
                  <Link 
                    to={tool.id === 'background-remover' ? 'https://www.fotor.com/background-remover' : '#'}
                    className="mt-6 flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Try it now
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Fotor?
              </h2>
              
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Photo editing interface" 
                  className="w-full rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                
                {/* Floating UI Elements */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Wand2 className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium">AI Enhancement</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Brush className="w-4 h-4 text-pink-600" />
                    <span className="text-sm font-medium">Professional Tools</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Design Templates for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from thousands of professionally designed templates
            </p>
          </div>
          
          {templates.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">{category.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((template, index) => (
                  <div key={index} className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
                    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={template.image} 
                        alt={template.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                          Use Template
                        </button>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{template.name}</h4>
                        <p className="text-sm text-gray-500">{template.size}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your creative needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                  plan.popular ? 'ring-2 ring-purple-600 scale-105' : ''
                } transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/signin"
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 block text-center ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
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
            Join millions of creators who trust Fotor to bring their visions to life
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signin" 
              className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Creating for Free
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              View Examples
            </button>
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
                <li><a href="#" className="hover:text-white transition-colors">Photo Editor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Background Remover</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design Maker</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collage Maker</a></li>
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
      
      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
};

export default HomePage;