import React from 'react';
import { Search, Users, Building } from 'lucide-react';

export default function Hero() {
  const [searchType, setSearchType] = React.useState('jobs');

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Find Your Dream Job
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
          Connect with top employers and discover opportunities that match your skills and aspirations.
        </p>

        <div className="mt-10">
          <div className="bg-white p-2 rounded-lg shadow-lg max-w-3xl mx-auto">
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setSearchType('jobs')}
                className={`flex-1 py-2 px-4 rounded-md ${
                  searchType === 'jobs'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Building className="inline-block w-5 h-5 mr-2" />
                Find Jobs
              </button>
              <button
                onClick={() => setSearchType('candidates')}
                className={`flex-1 py-2 px-4 rounded-md ${
                  searchType === 'candidates'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Users className="inline-block w-5 h-5 mr-2" />
                Find Candidates
              </button>
            </div>

            <div className="flex">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder={searchType === 'jobs' ? "Job title or keyword" : "Candidate skills or role"}
                  className="w-full px-4 py-3 rounded-l-md border-0 focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}