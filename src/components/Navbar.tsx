import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">2CAREERS</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className={`${isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-900'} inline-flex items-center px-1 pt-1 text-sm font-medium`}>
                Home
              </Link>
              <Link to="/jobs" className={`${isActive('/jobs') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-900'} inline-flex items-center px-1 pt-1 text-sm font-medium`}>
                Jobs
              </Link>
              <Link to="/candidates" className={`${isActive('/candidates') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-900'} inline-flex items-center px-1 pt-1 text-sm font-medium`}>
                Candidates
              </Link>
              <Link to="/about" className={`${isActive('/about') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-900'} inline-flex items-center px-1 pt-1 text-sm font-medium`}>
                About
              </Link>
              <Link to="/contact" className={`${isActive('/contact') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-900'} inline-flex items-center px-1 pt-1 text-sm font-medium`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/post-job" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Post a Job
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/') ? 'border-blue-500 text-blue-700 bg-blue-50' : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
              Home
            </Link>
            <Link to="/jobs" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/jobs') ? 'border-blue-500 text-blue-700 bg-blue-50' : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
              Jobs
            </Link>
            <Link to="/candidates" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/candidates') ? 'border-blue-500 text-blue-700 bg-blue-50' : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
              Candidates
            </Link>
            <Link to="/about" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/about') ? 'border-blue-500 text-blue-700 bg-blue-50' : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
              About
            </Link>
            <Link to="/contact" className={`block pl-3 pr-4 py-2 border-l-4 ${isActive('/contact') ? 'border-blue-500 text-blue-700 bg-blue-50' : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'} text-base font-medium`}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}