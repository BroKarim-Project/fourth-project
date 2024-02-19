import React from 'react';

import SectionContainer from '../components/SectionContainer';
import Tabs from '../components/tabs';
import CompareFeatures from '../components/compareFeatures';
import Faq from '../components/faq';

export default function Pricing() {
  return (
    <div className="px-6 w-full flex flex-col">
      <h1 className="mb-4 sm:py-10 mb:mb-0 font-semibold text-4xl md:text-5xl">Pricing</h1>
      <Tabs />
      <CompareFeatures />

      <Faq />
    </div>
  );
}
