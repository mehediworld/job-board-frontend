import React from 'react';
import { Building2, Users, MapPin } from 'lucide-react';

const TOP_COMPANIES = [
  {
    name: 'TechCorp',
    industry: 'Technology',
    location: 'San Francisco, CA',
    employees: '1000+',
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    name: 'InnovateLabs',
    industry: 'Software',
    location: 'New York, NY',
    employees: '500+',
    logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    name: 'CloudSys',
    industry: 'Cloud Computing',
    location: 'Seattle, WA',
    employees: '2000+',
    logo: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    name: 'DataFlow',
    industry: 'Data Analytics',
    location: 'Boston, MA',
    employees: '300+',
    logo: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  }
];

export default function TopCompanies() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Top Companies</h2>
          <p className="mt-4 text-xl text-gray-600">Leading companies trust us to find talent</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TOP_COMPANIES.map((company) => (
            <div key={company.name} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <img src={company.logo} alt={company.name} className="w-12 h-12 rounded-lg" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                  <p className="text-gray-600">{company.industry}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {company.location}
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  {company.employees} employees
                </div>
                <div className="flex items-center text-gray-500">
                  <Building2 className="w-4 h-4 mr-2" />
                  {company.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}