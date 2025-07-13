import React, { useState } from 'react';
import { X, Link, AlertCircle, CheckCircle } from 'lucide-react';

interface URLUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (url: string) => void;
}

const URLUploadModal: React.FC<URLUploadModalProps> = ({ isOpen, onClose, onUpload }) => {
  const [url, setUrl] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const validateAndUpload = async () => {
    if (!url.trim()) {
      setError('Please enter a valid image URL');
      return;
    }

    setIsValidating(true);
    setError('');

    try {
      // Validate URL format
      new URL(url);
      
      // Check if it's an image URL (basic validation)
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];
      const isImageUrl = imageExtensions.some(ext => 
        url.toLowerCase().includes(ext) || url.includes('image') || url.includes('photo')
      );

      if (!isImageUrl && !url.includes('pexels') && !url.includes('unsplash') && !url.includes('imgur')) {
        setError('Please provide a valid image URL');
        setIsValidating(false);
        return;
      }

      // Simulate validation delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onUpload(url);
      setUrl('');
      onClose();
    } catch (err) {
      setError('Please enter a valid URL');
    }
    
    setIsValidating(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      validateAndUpload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
              <Link className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Upload from URL</h2>
              <p className="text-sm text-gray-600">Paste an image URL to upload</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* URL Input */}
        <div className="mb-6">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <div className="relative">
            <input
              id="imageUrl"
              type="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError('');
              }}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="https://example.com/image.jpg"
              disabled={isValidating}
            />
            {isValidating && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
          
          {error && (
            <div className="mt-2 flex items-center text-red-600 text-sm">
              <AlertCircle className="w-4 h-4 mr-1" />
              {error}
            </div>
          )}
        </div>
        
        {/* Supported Sources */}
        <div className="mb-6 p-4 bg-gray-50 rounded-xl">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Supported sources:</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Direct image links (.jpg, .png, .gif, .webp)
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Pexels, Unsplash, Imgur
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Public image URLs
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
            disabled={isValidating}
          >
            Cancel
          </button>
          <button
            onClick={validateAndUpload}
            disabled={!url.trim() || isValidating}
            className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isValidating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Validating...
              </>
            ) : (
              'Upload Image'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default URLUploadModal;