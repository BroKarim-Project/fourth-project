import React from 'react';
import { PageHeader } from '../components/page-header';
import SectionContainer from '../components/SectionContainer';
import Tabs from '../components/tabs';
import CompareFeatures from '../components/compareFeatures';
import Faq from '../components/faq';
import Footer from '../components/Footer';

export default function Pricing() {
  return (
    <SectionContainer className="container">
      <PageHeader className="mt-20 font-bold text-5xl">Pricing</PageHeader>

      <Tabs />
      <CompareFeatures />
      <Faq />
      <Footer className="container" />
    </SectionContainer>
  );
}
