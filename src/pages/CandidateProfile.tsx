import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Briefcase, Mail, Phone, Globe2, GraduationCap, Calendar, Award } from 'lucide-react';

const CANDIDATE_DATA = {
  id: 1,
  name: 'John Smith',
  title: 'Senior Frontend Developer',
  location: 'San Francisco, CA',
  email: 'john.smith@example.com',
  phone: '+1 (555) 123-4567',
  website: 'johnsmith.dev',
  experience: '8 years',
  education: 'Masters in Computer Science',
  availability: 'Available in 2 weeks',
  skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker'],
  languages: ['English (Native)', 'Spanish (Professional)'],
  summary: `Experienced Frontend Developer with 8+ years of expertise in building scalable web applications. Passionate about creating exceptional user experiences and mentoring junior developers.`,
  experience_history: [
    {
      role: 'Senior Frontend Developer',
      company: 'TechCorp',
      period: '2020 - Present',
      description: 'Led frontend development for multiple high-impact projects.'
    },
    {
      role: 'Frontend Developer',
      company: 'InnovateLabs',
      period: '2017 - 2020',
      description: 'Developed and maintained various client applications.'
    }
  ],
  education_history: [
    {
      degree: 'Masters in Computer Science',
      institution: 'Stanford University',
      period: '2015 - 2017'
    },
    {
      degree: 'Bachelor in Computer Engineering',
      institution: 'MIT',
      period: '2011 - 2015'
    }
  ],
  certifications: [
    'AWS Certified Developer',
    'Google Cloud Professional',
    'React Advanced Certification'
  ],
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

export default function CandidateProfile() {
  const { id } = useParams();

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12">
            <div className="flex flex-col items-center">
              <img
                src={CANDIDATE_DATA.avatar}
                alt={CANDIDATE_DATA.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              <h1 className="mt-4 text-3xl font-bold text-white">{CANDIDATE_DATA.name}</h1>
              <p className="text-blue-100">{CANDIDATE_DATA.title}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-gray-50 border-b">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              {CANDIDATE_DATA.location}
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 mr-2 text-blue-600" />
              {CANDIDATE_DATA.email}
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 mr-2 text-blue-600" />
              {CANDIDATE_DATA.phone}
            </div>
            <div className="flex items-center text-gray-600">
              <Globe2 className="w-5 h-5 mr-2 text-blue-600" />
              {CANDIDATE_DATA.website}
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Summary */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
              <p className="text-gray-600">{CANDIDATE_DATA.summary}</p>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {CANDIDATE_DATA.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
              <div className="space-y-6">
                {CANDIDATE_DATA.experience_history.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-4">
                    <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                    <p className="mt-2 text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                {CANDIDATE_DATA.education_history.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-4">
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Certifications</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {CANDIDATE_DATA.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Languages</h2>
              <div className="flex flex-wrap gap-4">
                {CANDIDATE_DATA.languages.map((lang, index) => (
                  <div key={index} className="text-gray-600">{lang}</div>
                ))}
              </div>
            </section>
          </div>

          {/* Actions */}
          <div className="p-8 bg-gray-50 border-t">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Download Resume
              </button>
              <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Contact Candidate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}