import React from 'react';
import {
  Hero,
  FeaturedProperties,
  GuessExperiences,
  Contact,
} from '../components';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <GuessExperiences />
      <Contact />
    </main>
  );
};

export default HomePage;
