import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, DollarSign, Clock, Briefcase, Building2, Calendar, Users, Globe2 } from 'lucide-react';

const JOB_DATA = {
  id: 1,
  title: 'Senior Frontend Developer',
  company: 'TechCorp',
  location: 'San Francisco, CA',
  salary: '$120k - $150k',
  type: 'Full-time',
  experience: '5+ years',
  department: 'Engineering',
  industry: 'Technology',
  posted: '2 days ago',
  deadline: '30 days left',
  vacancies: 2,
  workMode: 'Hybrid',
  description: `We are seeking an experienced Frontend Developer to join our dynamic team. The ideal candidate will have a strong foundation in modern web technologies and a passion for creating exceptional user experiences.`,
  responsibilities: [
    'Develop and maintain responsive web applications',
    'Collaborate with designers and backend developers',
    'Optimize applications for maximum performance',
    'Implement and maintain quality assurance processes',
    'Mentor junior developers and contribute to team growth'
  ],
  requirements: [
    '5+ years of experience with React.js and modern JavaScript',
    'Strong understanding of web fundamentals (HTML5, CSS3)',
    'Experience with TypeScript and state management libraries',
    'Knowledge of responsive design and cross-browser compatibility',
    'Excellent problem-solving and communication skills'
  ],
  benefits: [
    'Competitive salary and equity package',
    'Health, dental, and vision insurance',
    'Flexible working hours and remote options',
    'Professional development budget',
    'Regular team events and activities'
  ],
  logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
};

export default function JobDetails() {
  const { id } = useParams();

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-8">
            <img src={JOB_DATA.logo} alt={JOB_DATA.company} className="w-16 h-16 rounded-lg" />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">{JOB_DATA.title}</h1>
              <p className="text-lg text-gray-600">{JOB_DATA.company}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              {JOB_DATA.location}
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
              {JOB_DATA.salary}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2 text-blue-600" />
              {JOB_DATA.type}
            </div>
            <div className="flex items-center text-gray-600">
              <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
              {JOB_DATA.experience}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg mb-8">
            <div>
              <div className="text-sm text-gray-500">Department</div>
              <div className="font-medium">{JOB_DATA.department}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Industry</div>
              <div className="font-medium">{JOB_DATA.industry}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Deadline</div>
              <div className="font-medium">{JOB_DATA.deadline}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Vacancies</div>
              <div className="font-medium">{JOB_DATA.vacancies}</div>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <p className="text-gray-600">{JOB_DATA.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {JOB_DATA.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {JOB_DATA.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {JOB_DATA.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
            <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Save Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}