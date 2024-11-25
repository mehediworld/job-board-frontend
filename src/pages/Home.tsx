import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturedJobs from '../components/FeaturedJobs';
import TopCompanies from '../components/TopCompanies';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <FeaturedJobs />
      <TopCompanies />
    </main>
  );
}