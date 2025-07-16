import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import URLUploadModal from './URLUploadModal';
import { useAuth } from './AuthContext';
import { 
  Camera, 
  Upload, 
  Layers,
  RotateCw,
  FlipHorizontal,
  Save,
  Link as LinkIcon,
  Heart,
  Sparkles,
  Scissors,
  Palette,
  Crop,
  Filter,
  Type,
  Brush,
  Wand2,
  Download,
  Share2,
  Eye,
  Sliders,
  Sun,
  Contrast,
  Zap,
  Star,
  Users,
  ArrowLeft,
  Plus,
  Minus,
  RotateCcw,
  FlipVertical,
  Grid3X3,
  Move,
  MousePointer
} from 'lucide-react';

const PhotoEditorPage = () => {
  const { user } = useAuth();
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState('brightness');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isURLModalOpen, setIsURLModalOpen] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const tools = [
    {
      id: 'brightness',
      name: 'Brightness',
      icon: <Sun className="w-5 h-5" />,
      category: 'basic'
    },
    {
      id: 'contrast',
      name: 'Contrast',
      icon: <Contrast className="w-5 h-5" />,
      category: 'basic'
    },
    {
      id: 'crop',
      name: 'Crop',
      icon: <Crop className="w-5 h-5" />,
      category: 'basic'
    },
    {
      id: 'rotate',
      name: 'Rotate',
      icon: <RotateCw className="w-5 h-5" />,
      category: 'basic'
    },
    {
      id: 'filters',
      name: 'Filters',
      icon: <Filter className="w-5 h-5" />,
      category: 'effects'
    },
    {
      id: 'ai-enhance',
      name: 'AI Enhance',
      icon: <Sparkles className="w-5 h-5" />,
      category: 'ai'
    },
    {
      id: 'background-remove',
      name: 'Remove BG',
      icon: <Scissors className="w-5 h-5" />,
      category: 'ai'
    },
    {
      id: 'color-correct',
      name: 'Color Correct',
      icon: <Palette className="w-5 h-5" />,
      category: 'advanced'
    },
    {
      id: 'text',
      name: 'Add Text',
      icon: <Type className="w-5 h-5" />,
      category: 'design'
    },
    {
      id: 'brush',
      name: 'Brush',
      icon: <Brush className="w-5 h-5" />,
      category: 'design'
    }
  ];

  const filters = [
    { name: 'Original', preview: 'none' },
    { name: 'Vintage', preview: 'sepia(0.5) contrast(1.2)' },
    { name: 'Black & White', preview: 'grayscale(1)' },
    { name: 'Warm', preview: 'sepia(0.3) saturate(1.4)' },
    { name: 'Cool', preview: 'hue-rotate(180deg) saturate(1.2)' },
    { name: 'Dramatic', preview: 'contrast(1.5) brightness(0.9)' }
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
    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleURLUpload = (url: string) => {
    setUploadedImage(url);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const processWithAI = (toolId: string) => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
              <div className="ml-8 text-sm text-gray-600">Photo Editor</div>
            </div>
            
            <div className="flex items-center space-x-4">
              {uploadedImage && (
                <div className="flex items-center space-x-2">
                  <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </button>
                  <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              )}
              
              {user ? (
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
              ) : (
                <Link 
                  to="/signin" 
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-screen">
        {/* Sidebar Tools */}
        {uploadedImage && (
          <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Editing Tools</h3>
              
              {/* Tool Categories */}
              <div className="space-y-6">
                {/* Basic Tools */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Basic</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tools.filter(tool => tool.category === 'basic').map((tool) => (
                      <button
                        key={tool.id}
                        onClick={() => setSelectedTool(tool.id)}
                        className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                          selectedTool === tool.id
                            ? 'bg-purple-100 text-purple-700 border-2 border-purple-300'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {tool.icon}
                        <span className="text-xs mt-1">{tool.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* AI Tools */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
                    AI Tools
                  </h4>
                  <div className="space-y-2">
                    {tools.filter(tool => tool.category === 'ai').map((tool) => (
                      <button
                        key={tool.id}
                        onClick={() => {
                          setSelectedTool(tool.id);
                          processWithAI(tool.id);
                        }}
                        className="w-full flex items-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 hover:from-purple-100 hover:to-pink-100 transition-all"
                      >
                        {tool.icon}
                        <span className="ml-3 font-medium">{tool.name}</span>
                        <Zap className="w-4 h-4 ml-auto" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Effects */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Effects & Filters</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {filters.map((filter, index) => (
                      <button
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-purple-300 transition-all"
                      >
                        <div 
                          className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400"
                          style={{ filter: filter.preview }}
                        ></div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 text-center">
                          {filter.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Advanced Tools */}
                <div>
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="w-full flex items-center justify-between text-sm font-medium text-gray-700 mb-3"
                  >
                    Advanced Tools
                    <span className={`transform transition-transform ${showAdvanced ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {showAdvanced && (
                    <div className="space-y-2">
                      {tools.filter(tool => tool.category === 'advanced' || tool.category === 'design').map((tool) => (
                        <button
                          key={tool.id}
                          onClick={() => setSelectedTool(tool.id)}
                          className={`w-full flex items-center p-3 rounded-lg transition-all ${
                            selectedTool === tool.id
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {tool.icon}
                          <span className="ml-3">{tool.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Tool Settings */}
              {selectedTool && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-3">
                    {tools.find(t => t.id === selectedTool)?.name} Settings
                  </h5>
                  
                  {selectedTool === 'brightness' && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Brightness</label>
                        <input type="range" min="-100" max="100" defaultValue="0" className="w-full" />
                      </div>
                    </div>
                  )}
                  
                  {selectedTool === 'contrast' && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Contrast</label>
                        <input type="range" min="-100" max="100" defaultValue="0" className="w-full" />
                      </div>
                    </div>
                  )}
                  
                  {selectedTool === 'crop' && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <button className="px-3 py-2 bg-white rounded border text-sm">1:1</button>
                        <button className="px-3 py-2 bg-white rounded border text-sm">4:3</button>
                        <button className="px-3 py-2 bg-white rounded border text-sm">16:9</button>
                        <button className="px-3 py-2 bg-white rounded border text-sm">Free</button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col">
          {!uploadedImage ? (
            /* Upload Area */
            <div className="flex-1 flex items-center justify-center p-8">
              <div
                className={`relative border-2 border-dashed rounded-2xl p-16 text-center transition-all duration-300 max-w-2xl w-full ${
                  dragActive 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-300 bg-white'
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
                
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <Heart className="w-10 h-10 text-purple-600" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                    <Upload className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Drop your image here or click to upload
                </h3>
                <p className="text-gray-600 mb-8">
                  Supports JPG, PNG, WebP • Upload from device or URL
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openFileDialog}
                    className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Choose Image
                  </button>
                  <button
                    onClick={() => setIsURLModalOpen(true)}
                    className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-200 flex items-center justify-center"
                  >
                    <LinkIcon className="w-5 h-5 mr-2" />
                    Upload from URL
                  </button>
                </div>
                
                {/* Quick Stats */}
                <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">10M+</div>
                    <div className="text-sm text-gray-600">Images Edited</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">4.9★</div>
                    <div className="text-sm text-gray-600">User Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-gray-600">AI Tools</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Editor Interface */
            <div className="flex-1 flex flex-col">
              {/* Top Toolbar */}
              <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      New Image
                    </button>
                    <div className="h-6 w-px bg-gray-300"></div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <RotateCcw className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <RotateCw className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                      Reset
                    </button>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Apply Changes
                    </button>
                  </div>
                </div>
              </div>

              {/* Canvas */}
              <div className="flex-1 bg-gray-100 flex items-center justify-center p-8 relative">
                {isProcessing && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-700">Processing with AI...</p>
                    </div>
                  </div>
                )}
                
                <div className="relative max-w-4xl max-h-full">
                  <img 
                    src={uploadedImage} 
                    alt="Editing" 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  />
                  
                  {/* Crop Overlay */}
                  {selectedTool === 'crop' && (
                    <div className="absolute inset-0 border-2 border-dashed border-white">
                      <div className="absolute top-0 left-0 w-2 h-2 bg-white border border-gray-400"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 bg-white border border-gray-400"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-white border border-gray-400"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-white border border-gray-400"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* URL Upload Modal */}
      <URLUploadModal 
        isOpen={isURLModalOpen}
        onClose={() => setIsURLModalOpen(false)}
        onUpload={handleURLUpload}
      />
    </div>
  );
};

export default PhotoEditorPage;