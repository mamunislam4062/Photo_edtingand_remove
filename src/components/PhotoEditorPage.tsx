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
  Heart
} from 'lucide-react';

const PhotoEditorPage = () => {
  const { user } = useAuth();
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState('brightness');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isURLModalOpen, setIsURLModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div>
      <div>
        {!uploadedImage ? (
          <div>
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <Heart className="w-10 h-10 text-purple-600" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                <Upload className="w-3 h-3 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Drop your image heart to click to upload
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
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <footer>
        <div>
        </div>
      </footer>
      
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