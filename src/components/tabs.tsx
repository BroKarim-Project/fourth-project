// ni akan ada 2 tab yang nampilin komponen card,
// file card buat aja 1, tpi iisnya 2 function
import React, { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { FigmaCard, FigmaJam } from './card';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Figma');
  const [stickyMenu, setStickyMenu] = useState(false);

  // Sticky menu
  // const handleStickyMenu = () => {
  //   if (window.scrollY >= 80) {
  //     setStickyMenu(true);
  //   } else {
  //     setStickyMenu(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleStickyMenu);
  // });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
        <nav className={`border-2 p-1  flex-row gap-2 inline-flex rounded-md border-gray-200 `}>
          <button
            onClick={() => handleTabClick('Figma')}
            className={`inline-flex items-center w-full px-5 md:px-8 py-2 md:py-3  mr-1 text-sm md:text-base font-semibold  no-underline align-middle  border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-gray-200  hover:text-black   ${
              activeTab === 'Figma' ? ' bg-blue-600 text-white hover:bg-blue-400' : 'bg-white  text-black'
            }  transition`}
            style={{
              WebkitTapHighlightColor: '#000',
            }}
          >
            Hobby
          </button>
          <button
            onClick={() => handleTabClick('Figjam')}
            className={`inline-flex items-center w-full px-5 md:px-8 py-2 md:py-3  mr-1 text-sm md:text-base font-semibold no-underline align-middle  border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-bgray-200  hover:text-black   ${
              activeTab === 'Figjam' ? ' bg-blue-600 text-white hover:bg-blue-400' : 'bg-white  text-black'
            } transition`}
            style={{
              WebkitTapHighlightColor: '#000',
            }}
          >
            Maniac
          </button>
        </nav>
        {/* === Tab Content === */}
        <div className=" px-8 py-4  sm:px-0  w-full  ">
          {activeTab === 'Figma' ? (
            <div>
              <FigmaCard />
            </div>
          ) : (
            <div>
              <FigmaJam />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tabs;
