import React from 'react';
import { Briefcase, Users, Building } from 'lucide-react';

export default function Stats() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-blue-100 rounded-full">
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-3xl font-bold text-gray-900">10,000+</h3>
              <p className="mt-2 text-lg text-gray-500">Active Jobs</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-4 bg-blue-100 rounded-full">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-3xl font-bold text-gray-900">50,000+</h3>
              <p className="mt-2 text-lg text-gray-500">Candidates</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-4 bg-blue-100 rounded-full">
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-3xl font-bold text-gray-900">5,000+</h3>
              <p className="mt-2 text-lg text-gray-500">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}