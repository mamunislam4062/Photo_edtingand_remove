import React from 'react';
import { X, Play, Sparkles, Wand2, Scissors, Palette } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
              <Play className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Fotor Demo</h2>
              <p className="text-sm text-gray-600">See how easy photo editing can be</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Video Container */}
        <div className="relative bg-gray-900 aspect-video">
          {/* Video Placeholder with Fotor Branding */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Fotor Photo Editor Demo</h3>
              <p className="text-white/80 mb-6">Professional photo editing made simple</p>
              
              {/* Demo Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <Sparkles className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm">AI Enhancement</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <Scissors className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm">Background Removal</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <Palette className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm">Color Correction</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Actual video would go here */}
          {/* <video 
            className="w-full h-full object-cover"
            controls
            poster="/demo-thumbnail.jpg"
          >
            <source src="/fotor-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        
        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-gray-900 mb-1">Ready to start editing?</h4>
              <p className="text-sm text-gray-600">Join millions of creators using Fotor</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Maybe Later
              </button>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
              >
                <Wand2 className="w-4 h-4 mr-2" />
                Start Editing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;