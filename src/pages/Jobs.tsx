import React from 'react';
import { Search, Filter, MapPin, DollarSign, Clock, Briefcase } from 'lucide-react';
import { JOBS } from '../data/mockData';
import { useSearch } from '../hooks/useSearch';

export default function Jobs() {
  const { query, setQuery, filters, setFilters, results } = useSearch({
    items: JOBS,
    keys: ['title', 'company', 'location', 'type'],
  });

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={filters.type || ''}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              >
                <option value="">Job Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={filters.location || ''}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                <option value="">Location</option>
                <option value="Remote">Remote</option>
                <option value="San Francisco, CA">San Francisco</option>
                <option value="New York, NY">New York</option>
              </select>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-5 h-5 mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-500">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {job.salary}
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {job.type}
                </div>
                <div className="flex items-center text-gray-500">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {job.experience}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">Posted {job.posted}</span>
                <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}