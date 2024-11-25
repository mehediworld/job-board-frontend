import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Briefcase, GraduationCap, Plus, X } from 'lucide-react';
import { CANDIDATES } from '../data/mockData';
import { useSearch } from '../hooks/useSearch';

export default function Candidates() {
  const { query, setQuery, filters, setFilters, results } = useSearch({
    items: CANDIDATES,
    keys: ['name', 'title', 'location', 'skills'],
  });

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: '',
    title: '',
    location: '',
    experience: '',
    education: '',
    skills: '',
    avatar: ''
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to create the candidate
    console.log('Creating candidate:', newCandidate);
    setShowCreateForm(false);
    setNewCandidate({
      name: '',
      title: '',
      location: '',
      experience: '',
      education: '',
      skills: '',
      avatar: ''
    });
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Candidates</h1>
          <button
            onClick={() => setShowCreateForm(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Candidate
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search candidates by name, skills, title..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={filters.experience || ''}
                onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
              >
                <option value="">Experience</option>
                <option value="5 years">5+ years</option>
                <option value="8 years">8+ years</option>
                <option value="10 years">10+ years</option>
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
          {results.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <img src={candidate.avatar} alt={candidate.name} className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
                  <p className="text-gray-600">{candidate.title}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {candidate.location}
                </div>
                <div className="flex items-center text-gray-500">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {candidate.experience} experience
                </div>
                <div className="flex items-center text-gray-500">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  {candidate.education}
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Link 
                  to={`/candidates/${candidate.id}`}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Create Candidate Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Add New Candidate</h2>
                <button onClick={() => setShowCreateForm(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleCreateSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={newCandidate.name}
                      onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                    <input
                      type="text"
                      required
                      value={newCandidate.title}
                      onChange={(e) => setNewCandidate({ ...newCandidate, title: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      required
                      value={newCandidate.location}
                      onChange={(e) => setNewCandidate({ ...newCandidate, location: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                    <input
                      type="text"
                      required
                      value={newCandidate.experience}
                      onChange={(e) => setNewCandidate({ ...newCandidate, experience: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                    <input
                      type="text"
                      required
                      value={newCandidate.education}
                      onChange={(e) => setNewCandidate({ ...newCandidate, education: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Skills (comma-separated)</label>
                    <input
                      type="text"
                      required
                      value={newCandidate.skills}
                      onChange={(e) => setNewCandidate({ ...newCandidate, skills: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="React, TypeScript, Node.js"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Avatar URL</label>
                    <input
                      type="url"
                      value={newCandidate.avatar}
                      onChange={(e) => setNewCandidate({ ...newCandidate, avatar: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Create Candidate
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}