// ni akan ada 2 tab yang nampilin komponen card,
// file card buat aja 1, tpi iisnya 2 function
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { FigmaCard, FigmaJam } from './card';
import { FigmaFeatures, FigjamFeatures } from './compareFeatures';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Figma');
  const [fixedPosition, SetFixedPosition] = useState(false);
  const controls = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (controls.current) {
        const initialTop = controls.current.getBoundingClientRect().top;

        SetFixedPosition(window.scrollY > initialTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={`relative z-999 overflow-x-auto  ${fixedPosition ? 'flex flex-col justify-center items-center' : ''} `}>
        <div className={`border-2 p-1 inline-flex rounded-md   border-gray-200   ${fixedPosition ? 'fixed w-[90vw]  mx-auto  top-0 justify-between z-99 mr-6 items-center  bg-white' : 'static'}`} ref={controls}>
          <button
            onClick={() => handleTabClick('Figma')}
            className={`inline-flex items-center w-full px-5 md:px-8 py-2 md:py-3  mr-1 text-sm md:text-base font-semibold  no-underline   border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0  hover:bg-gray-200  hover:text-black  ${
              fixedPosition ? ' w-1/2 flex-1 justify-center ' : ''
            }  ${activeTab === 'Figma' ? ' bg-blue-600 text-white hover:bg-blue-400' : 'bg-white  text-black'}  transition`}
            style={{
              WebkitTapHighlightColor: '#000',
            }}
          >
            Hobby
          </button>
          <button
            onClick={() => handleTabClick('Figjam')}
            className={`inline-flex items-center w-full px-5 md:px-8 py-2 md:py-3  mr-1 text-sm md:text-base font-semibold no-underline   border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0  hover:bg-bgray-200  hover:text-black ${
              fixedPosition ? ' w-1/2 flex-1 justify-center ' : ''
            }   ${activeTab === 'Figjam' ? ' bg-blue-600 text-white hover:bg-blue-400' : 'bg-white  text-black'} transition`}
            style={{
              WebkitTapHighlightColor: '#000',
            }}
          >
            Maniac
          </button>
          {fixedPosition && <Placeholder />}
        </div>
        {/* === Tab Content === */}
        <div className=" px-8 py-4  sm:px-0  w-full  ">
          {activeTab === 'Figma' ? (
            <div>
              <FigmaCard />
              <FigmaFeatures />
            </div>
          ) : (
            <div>
              <FigmaJam />
              <FigjamFeatures />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tabs;

const Placeholder = styled.div`
  height: 62px;
`;
