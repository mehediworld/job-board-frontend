import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Clock } from 'lucide-react';

const FEATURED_JOBS = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120k - $150k',
    type: 'Full-time',
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'InnovateLabs',
    location: 'New York, NY',
    salary: '$130k - $160k',
    type: 'Full-time',
    logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudSys',
    location: 'Remote',
    salary: '$115k - $145k',
    type: 'Full-time',
    logo: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  }
];

export default function FeaturedJobs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Jobs</h2>
          <p className="mt-4 text-xl text-gray-600">Discover your next career opportunity</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_JOBS.map((job) => (
            <Link key={job.id} to={`/jobs/${job.id}`} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
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
              </div>
              <button className="mt-6 w-full bg-blue-50 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-100 transition-colors">
                View Details
              </button>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/jobs" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}