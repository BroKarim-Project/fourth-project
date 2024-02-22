import React from 'react';

import SectionContainer from '../components/SectionContainer';
import Tabs from '../components/tabs';

import Faq from '../components/faq';

export default function Pricing() {
  return (
    <div className="px-6  z-999 relative overflow-x-hidden">
      <h1 className="mb-4 sm:py-10 mb:mb-0 font-semibold text-4xl md:text-5xl">Pricing</h1>
      <Tabs />
      <Faq />
    </div>
  );
}
