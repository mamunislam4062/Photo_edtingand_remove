@@ .. @@
 import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
+import { useAuth } from './AuthContext';
 import { 
   Camera, 
   User, 
@@ .. @@
 } from 'lucide-react';
 
 const UserProfilePage = () => {
+  const { user, logout } = useAuth();
   const [activeTab, setActiveTab] = useState('dashboard');
   const [selectedPlan, setSelectedPlan] = useState('pro');
 
+  if (!user) {
+    return (
+      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
+        <div className="text-center">
+          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to continue</h2>
+          <Link 
+            to="/signin" 
+            className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
+          >
+            Sign In
+          </Link>
+        </div>
+      </div>
+    );
+  }
+
@@ .. @@
             <div className="flex items-center space-x-4">
               <img 
-                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" 
-                alt="Profile" 
+                src={user.avatar || "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"} 
+                alt={user.name} 
                 className="w-16 h-16 rounded-full object-cover"
               />
               <div>
-                <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
-                <p className="text-gray-600">john.doe@example.com</p>
-                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mt-1">
-                  Pro Plan
+                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
+                <p className="text-gray-600">{user.email}</p>
+                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-1 ${
+                  user.plan === 'pro' ? 'bg-purple-100 text-purple-800' :
+                  user.plan === 'team' ? 'bg-blue-100 text-blue-800' :
+                  'bg-gray-100 text-gray-800'
+                }`}>
+                  {user.plan.charAt(0).toUpperCase() + user.plan.slice(1)} Plan
                 </span>
               </div>
             </div>
             
             <div className="flex items-center space-x-4">
+              <button
+                onClick={logout}
+                className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
+              >
+                Sign Out
+              </button>
               <Link
                 to="/pricing"
                 className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"