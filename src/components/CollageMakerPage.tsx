import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { 
  Camera, 
  Upload, 
  Download, 
  Grid3X3, 
  Sparkles, 
  ArrowLeft,
  Plus,
  X,
  RotateCw,
  FlipHorizontal,
  Palette,
  Layout,
  Heart,
  Star,
  Users,
  Zap,
  Image,
  Frame,
  Layers,
  Move,
  Crop
} from 'lucide-react';

const CollageMakerPage = () => {
  const { user } = useAuth();
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [selectedLayout, setSelectedLayout] = useState('grid-2x2');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const layouts = [
    { id: 'grid-2x2', name: '2x2 Grid', icon: <Grid3X3 className="w-6 h-6" />, slots: 4 },
    { id: 'horizontal', name: 'Horizontal', icon: <Layout className="w-6 h-6" />, slots: 3 },
    { id: 'vertical', name: 'Vertical', icon: <Layout className="w-6 h-6 rotate-90" />, slots: 3 },
    { id: 'mosaic', name: 'Mosaic', icon: <Layers className="w-6 h-6" />, slots: 5 },
    { id: 'heart', name: 'Heart Shape', icon: <Heart className="w-6 h-6" />, slots: 6 }
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
    
    if (e.dataTransfer.files) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (files: File[]) => {
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedImages(prev => [...prev, e.target?.result as string]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const createCollage = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
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
                <Link to="/photo-editor" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Photo Editor</Link>
                <Link to="/collage-maker" className="text-purple-600 px-3 py-2 text-sm font-medium">Collage Maker</Link>
                <Link to="/background-remover" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Background Remover</Link>
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
                <span className="text-sm font-medium text-purple-700">AI-Powered Collage Maker</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Create Beautiful
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Photo Collages</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Combine multiple photos into stunning collages with our easy-to-use collage maker. 
              Choose from various layouts and customize to perfection.
            </p>
            
            <div className="flex justify-center items-center space-x-8 text-gray-500 mb-12">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-sm">4.8/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-1" />
                <span className="text-sm">2M+ Collages Created</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-green-400 mr-1" />
                <span className="text-sm">Instant Creation</span>
              </div>
            </div>
          </div>

          {/* Main Collage Interface */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Layout Selection */}
              <div className="lg:col-span-1">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Layout</h3>
                  <div className="space-y-3">
                    {layouts.map((layout) => (
                      <button
                        key={layout.id}
                        onClick={() => setSelectedLayout(layout.id)}
                        className={`w-full flex items-center p-3 rounded-xl transition-all ${
                          selectedLayout === layout.id
                            ? 'bg-purple-100 border-2 border-purple-500 text-purple-700'
                            : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                        }`}
                      >
                        {layout.icon}
                        <span className="ml-3 font-medium">{layout.name}</span>
                        <span className="ml-auto text-sm text-gray-500">{layout.slots} photos</span>
                      </button>
                    ))}
                  </div>
                  
                  {uploadedImages.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Uploaded Photos</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {uploadedImages.map((image, index) => (
                          <div key={index} className="relative group">
                            <img 
                              src={image} 
                              alt={`Upload ${index + 1}`} 
                              className="w-full h-16 object-cover rounded-lg"
                            />
                            <button
                              onClick={() => removeImage(index)}
                              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Upload Area & Preview */}
              <div className="lg:col-span-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  {uploadedImages.length === 0 ? (
                    <div
                      className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                        dragActive 
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-300 bg-gray-50'
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
                        multiple
                        onChange={handleFileInput}
                        className="hidden"
                      />
                      
                      <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                        <Heart className="w-10 h-10 text-purple-600" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                          <Upload className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Drop your images here to click to upload
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Upload multiple photos to create your collage • Supports JPG, PNG, WebP
                      </p>
                      <button
                        onClick={openFileDialog}
                        className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center mx-auto"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        Choose Images
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Collage Preview</h3>
                        <div className="flex space-x-2">
                          <button
                            onClick={openFileDialog}
                            className="flex items-center px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Add More
                          </button>
                          <button
                            onClick={createCollage}
                            disabled={isProcessing}
                            className="flex items-center px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                          >
                            {isProcessing ? (
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            ) : (
                              <Download className="w-4 h-4 mr-2" />
                            )}
                            {isProcessing ? 'Creating...' : 'Create Collage'}
                          </button>
                        </div>
                      </div>
                      
                      {/* Collage Preview */}
                      <div className="bg-gray-100 rounded-xl p-4 min-h-96 flex items-center justify-center">
                        <div className={`grid gap-2 ${
                          selectedLayout === 'grid-2x2' ? 'grid-cols-2 grid-rows-2' :
                          selectedLayout === 'horizontal' ? 'grid-cols-3 grid-rows-1' :
                          selectedLayout === 'vertical' ? 'grid-cols-1 grid-rows-3' :
                          selectedLayout === 'mosaic' ? 'grid-cols-3 grid-rows-2' :
                          'grid-cols-3 grid-rows-2'
                        } w-full max-w-md`}>
                          {Array.from({ length: layouts.find(l => l.id === selectedLayout)?.slots || 4 }).map((_, index) => (
                            <div
                              key={index}
                              className={`bg-white rounded-lg overflow-hidden shadow-sm ${
                                selectedLayout === 'mosaic' && index === 0 ? 'col-span-2' :
                                selectedLayout === 'heart' && (index === 1 || index === 4) ? 'col-span-2' :
                                ''
                              }`}
                            >
                              {uploadedImages[index] ? (
                                <img 
                                  src={uploadedImages[index]} 
                                  alt={`Collage ${index + 1}`} 
                                  className="w-full h-24 object-cover"
                                />
                              ) : (
                                <div className="w-full h-24 bg-gray-200 flex items-center justify-center">
                                  <Image className="w-6 h-6 text-gray-400" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Collage Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create stunning photo collages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600">
                <Layout className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiple Layouts</h3>
              <p className="text-gray-600">Choose from grid, mosaic, heart, and custom layouts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-pink-600">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Enhancement</h3>
              <p className="text-gray-600">Automatically enhance and balance your photos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Move className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Drag & Drop</h3>
              <p className="text-gray-600">Easy photo arrangement with drag and drop</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">HD Export</h3>
              <p className="text-gray-600">Download high-quality collages for any use</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Start Creating Amazing Collages Today
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-12">
            Join millions who create beautiful photo collages with Fotor
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openFileDialog}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Frame className="w-5 h-5 mr-2" />
              Create Collage Now
            </button>
            <Link
              to="/signin"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center"
            >
              Sign Up Free
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
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/photo-editor" className="hover:text-white transition-colors">Photo Editor</Link></li>
                <li><Link to="/collage-maker" className="hover:text-white transition-colors">Collage Maker</Link></li>
                <li><Link to="/background-remover" className="hover:text-white transition-colors">Background Remover</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
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

export default CollageMakerPage;