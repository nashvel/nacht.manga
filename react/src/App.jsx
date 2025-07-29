import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AnimationDemo from './pages/AnimationDemo';
import FramerPortfolio from './pages/FramerPortfolio';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-right" />
        
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-900">
                  Portfolio
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link 
                  to="/framer-portfolio" 
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Framer Portfolio
                </Link>
                <Link 
                  to="/animation-demo" 
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Animation Demo
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-8">
                    Welcome to the Portfolio
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Explore the converted Framer animations and components.
                  </p>
                  <div className="space-x-4">
                    <Link 
                      to="/framer-portfolio" 
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      View Full Portfolio
                    </Link>
                    <Link 
                      to="/animation-demo" 
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Animation Demo
                    </Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/framer-portfolio" element={<FramerPortfolio />} />
            <Route path="/animation-demo" element={<AnimationDemo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
