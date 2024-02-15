// import a from "next/a";
import React from 'react';
import { useEffect, useState } from 'react';

import menuData from './menuData';


const Navbar = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const [stickyMenu, setStickyMenu] = useState(false);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);
  });

  return (
    <header className={`fixed left-0 top-0 z-99999 w-full md:py-2 py-7 ${stickyMenu ? 'bg-white !py-4 shadow transition duration-100 dark:bg-black' : ''}`}>
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">By Karim</a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button aria-label="hamburger Toggler" className="block xl:hidden" onClick={() => setNavigationOpen(!navigationOpen)}>
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? '!w-full delay-300' : 'w-0'}`}></span>
                <span className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? 'delay-400 !w-full' : 'w-0'}`}></span>
                <span className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? '!w-full delay-500' : 'w-0'}`}></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? '!h-0 delay-[0]' : 'h-full'}`}></span>
                <span className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? '!h-0 delay-200' : 'h-0.5'}`}></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen && 'navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent'
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, index) =>
                menuItem.path ? (
                  // jika submenu tida ada
                  <li key={menuItem.id} className="group relative hover:opacity-65 focus:text-blue-300 text-black tracking-tighter">
                    <a
                      href={menuItem.path}
                      className={`ud-menu-scroll  flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 text-dark dark:text-white group-hover:text-primary dark:group-hover:text-primary 
                        
                      `}
                    >
                      {menuItem.title}
                    </a>
                  </li>
                ) : (
                  // jika submenu ada maka :
                  <li className="submenu-item group relative" key={menuItem.id}>
                    <button
                      onClick={() => handleSubmenu(index)}
                      className={`ud-menu-scroll flex items-center  justify-between py-2 text-base text-dark group-hover:text-primary  dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                    >
                      {menuItem.title}

                      <span className="pl-1">
                        <svg className={`duration-300 lg:group-hover:rotate-180`} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>
                    {/* ini yang nampilin list submenu */}
                    <ul
                      className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                        openIndex === index ? '!-left-[25px]' : 'hidden'
                      }`}
                    >
                      {menuItem.submenu.map((item, key) => (
                        <li key={key} className="hover:text-primary">
                          <a href={item.path || '#'}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <a href="https://github.com/NextJSTemplates/solid-nextjs" className="text-regular font-medium text-waterloo hover:text-primary">
              GitHub Repo 🌟
            </a>

            <a href="https://nextjstemplates.com/templates/solid" className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho">
              Get Pro 🔥
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Navbar;
