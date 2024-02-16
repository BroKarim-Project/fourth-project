// ni akan ada 2 tab yang nampilin komponen card,
// file card buat aja 1, tpi iisnya 2 function
import React, { ReactNode } from 'react';
import { useState } from 'react';

import { FigmaCard, FigmaJam } from './card';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Figma');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
        <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
          <button
            onClick={() => handleTabClick('Figma')}
            className={`relative bg-[#D9D9D9] md:w-24 w-20 z-10 px-3 py-1.5 md:text-sm text-xs font-medium ${activeTab === 'Figma' ? '' : ''} hover:text-white hover:bg-black transition`}
            style={{
              WebkitTapHighlightColor: '#000',
            }}
          >
            Figma
          </button>
          <button
            onClick={() => handleTabClick('Figjam')}
            className={`relative bg-[#D9D9D9] md:w-24 w-20 z-10 px-3 py-1.5 md:text-sm text-xs font-medium ${activeTab === 'Figjam' ? 'active:text-yellow-200' : ''} hover:text-white hover:bg-black transition`}
            style={{
              WebkitTapHighlightColor: '#000',
            }}
          >
            Figjam
          </button>
        </div>
        {/* === Tab Content === */}
        <div className="mt-5 my-2 w-full flex justify-center py-2">
          {activeTab === 'Figma' ? (
            <div className=" mx-auto px-20">
              <FigmaCard />
            </div>
          ) : (
            <div className="bg-black mx-auto px-20">
              <FigmaJam />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tabs;
