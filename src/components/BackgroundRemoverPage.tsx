import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Upload, 
  Download, 
  Scissors, 
  Sparkles, 
  ArrowLeft,
  Play,
  Check,
  Star,
  Users,
  Zap,
  Image,
  Wand2,
  RefreshCw,
  Eye,
  Palette,
  Share2
} from 'lucide-react';

const BackgroundRemoverPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedExample, setSelectedExample] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const examples = [
    {
      before: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Portrait Photo'
    },
    {
      before: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Product Shot'
    },
    {
      before: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Fashion Model'
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'AI-Powered Precision',
      description: 'Advanced AI technology detects and removes backgrounds with pixel-perfect accuracy'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'One-Click Removal',
      description: 'Remove backgrounds instantly with just one click - no manual editing required'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Edge Detection',
      description: 'Smart edge detection preserves fine details like hair, fur, and transparent objects'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Custom Backgrounds',
      description: 'Replace with solid colors, gradients, or upload your own background images'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Products',
      description: 'Create clean product photos with white backgrounds for online stores',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Professional Portraits',
      description: 'Remove distracting backgrounds from headshots and profile photos',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Social Media Content',
      description: 'Create eye-catching posts with custom backgrounds for Instagram and Facebook',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Marketing Materials',
      description: 'Design professional flyers, banners, and advertisements',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      processImage();
    };
    reader.readAsDataURL(file);
  };

  const processImage = () => {
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
    }, 3000);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

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
                <a href="https://www.fotor.com/background-remover" target="_blank" rel="noopener noreferrer" className="text-purple-600 px-3 py-2 text-sm font-medium">Background Remover</a>
                <a href="#" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Photo Editor</a>
                <a href="#" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Design</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
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
                <Scissors className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">AI Background Remover</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Remove Background from
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Any Image</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Use our AI-powered background remover to instantly cut out backgrounds from photos. 
              Perfect for e-commerce, portraits, and creative projects.
            </p>
            
            <div className="flex justify-center items-center space-x-8 text-gray-500 mb-12">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-1" />
                <span className="text-sm">5M+ Images Processed</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-green-400 mr-1" />
                <span className="text-sm">3 Second Processing</span>
              </div>
            </div>
          </div>

          {/* Upload Area */}
          <div className="max-w-4xl mx-auto">
            <div
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-300 bg-white/50 backdrop-blur-sm'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
              
              {!uploadedImage ? (
                <div>
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Upload className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Drop your image here or click to upload
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Supports JPG, PNG, WebP • Max file size: 10MB
                  </p>
                  <button
                    onClick={openFileDialog}
                    className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Choose Image
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Original Image */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Original</h4>
                    <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                      <img 
                        src={uploadedImage} 
                        alt="Original" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Processed Image */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Background Removed</h4>
                    <div className="relative bg-transparent bg-grid-pattern rounded-xl overflow-hidden">
                      {isProcessing ? (
                        <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                          <div className="text-center">
                            <RefreshCw className="w-8 h-8 text-purple-600 animate-spin mx-auto mb-4" />
                            <p className="text-gray-600">Processing with AI...</p>
                          </div>
                        </div>
                      ) : showResult ? (
                        <img 
                          src={uploadedImage} 
                          alt="Background Removed" 
                          className="w-full h-64 object-cover"
                          style={{ backgroundColor: 'transparent' }}
                        />
                      ) : (
                        <div className="w-full h-64 bg-gray-100"></div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {showResult && (
                <div className="mt-8 flex justify-center space-x-4">
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download HD
                  </button>
                  <button 
                    onClick={() => {
                      setUploadedImage(null);
                      setShowResult(false);
                      setIsProcessing(false);
                    }}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Try Another Image
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See the Magic in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how our AI removes backgrounds with incredible precision
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {examples.map((example, index) => (
              <div
                key={index}
                className={`cursor-pointer transform transition-all duration-300 ${
                  selectedExample === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setSelectedExample(index)}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-purple-200">
                  <div className="relative">
                    <img 
                      src={example.before} 
                      alt={example.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold">{example.title}</h4>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <Play className="w-4 h-4 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Before/After Comparison */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Before</h4>
                  <img 
                    src={examples[selectedExample].before} 
                    alt="Before" 
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">After</h4>
                  <div className="relative bg-transparent bg-grid-pattern rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={examples[selectedExample].after} 
                      alt="After" 
                      className="w-full"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Fotor Background Remover?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced AI technology meets user-friendly design
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

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From e-commerce to social media, create professional images for any purpose
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={useCase.image} 
                      alt={useCase.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-white/90">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Remove Backgrounds Like a Pro?
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-12">
            Join millions who trust Fotor for professional background removal
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openFileDialog}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Scissors className="w-5 h-5 mr-2" />
              Remove Background Now
            </button>
            <Link
              to="/signin"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center"
            >
              <Wand2 className="w-5 h-5 mr-2" />
              Explore All Tools
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
                <Star className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Background Remover</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Photo Editor</a></li>
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
    </div>
  );
};

export default BackgroundRemoverPage;