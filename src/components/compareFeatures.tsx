import React, { useState, useEffect, useRef } from 'react';

export default function CompareFeatures() {
  const controls = useRef<HTMLTableSectionElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (controls.current) {
        const initialTop = controls.current.getBoundingClientRect().top;
        setIsSticky(window.scrollY > initialTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="sm:py-10  w-full">
        <h1 className="text-black mb-4 font-semibold text-3xl">Compare Feature</h1>

        <div id="section" className="relative  flex justify-center w-full ">
          <table className=" rounded w-full sm:px-0 px-10 overflow-x-scroll">
            <thead>
              <tr className="flex text-left">
                <th scope="row" className="whitespace-nowrap w-full sm:w-1/5 px-4 py-3 border bg-gray-100 border-r-0 rounded-tl border-gray-300"></th>
                <th scope="col" className="w-full sm:w-1/5 px-4 py-3 border bg-white border-r-0 border-gray-300 font-normal">
                  <h2 className="md:text-lg text-base font-medium">Starter</h2>
                  <p >
                    <span className="text-lg font-bold  md:text-4xl dark:text-gray-50">0€</span>
                    <span className="font-medium dark:text-gray-400">/mo</span>
                  </p>
                </th>
                <th scope="col" className="w-full sm:w-1/5  p-4 border bg-white border-r-0 border-gray-300 font-normal">
                  <h2 className="md:text-lg font-medium">Professional</h2>
                  <p >
                    <span className="text-lg font-bold  md:text-4xl dark:text-gray-50">19€</span>
                    <span className="font-medium dark:text-gray-400">/mo</span>
                  </p>
                </th>
                <th scope="col" className="w-full sm:w-1/5  p-4 border bg-white  border-gray-300 font-normal">
                  <h2 className="md:text-lg font-medium">Organization</h2>
                  <p >
                    <span className="text-lg font-bold  md:text-4xl dark:text-gray-50">49€</span>
                    <span className="font-medium dark:text-gray-400">/mo</span>
                  </p>
                </th>
                <th scope="col" className="w-full sm:w-1/5  p-4 border bg-white  border-gray-300 font-normal">
                  <h2 className="md:text-lg font-medium">Enterprise</h2>
                  <p >
                    <span className="text-lg font-bold  md:text-4xl dark:text-gray-50">49€</span>
                    <span className="font-base dark:text-gray-400">/mo</span>
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="flex text-left text-sm flex-wrap sm:no-wrap ">
                <td className="p-4  border border-t-0 border-gray-300 min-w-full border-b-0 u-slab text-black font-bold">Design</td>
              </tr>
              <tr className="flex text-left text-sm flex-wrap sm:no-wrap ">
                <th scope="col" className="min-w-full sm:min-w-0 w-1/5 p-4 bg-gray-100 border border-r-0  border-gray-300 font-normal flex items-center border-b-0 sm:border-b">
                  Version history
                </th>
                <td className="w-1/5 p-4 border-gray-300 border border-r-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    className="text-gray-700 m-auto"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    // className="feather feather-check"
                  >
                    <title id="catTitle">Relevant package title ( too many to add )</title>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </td>
                <td className="w-1/5 p-4 border-gray-300 border border-r-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    className="text-blue-700 m-auto"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    // className="feather feather-check"
                  >
                    <title id="catTitle">Relevant package title ( too many to add )</title>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </td>
                <td className="w-1/5 p-4 border-gray-300 border flex items-center justify-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    className="text-blue-700 m-auto"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    // className="feather feather-check"
                  >
                    <title id="catTitle">Relevant package title ( too many to add )</title>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </td>
                <td className="w-1/5 p-4 border-gray-300 border flex items-center justify-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    className="text-blue-700 m-auto"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    // className="feather feather-check"
                  >
                    <title id="catTitle">Relevant package title ( too many to add )</title>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </td>
              </tr>
              <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                <th scope="col" className="min-w-full sm:min-w-0 sm:w-1/5 bg-gray-100 p-4 border-gray-300 border border-r-0  border-t-0 font-normal">
                  Editor
                </th>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-r-0 border-t-0"></td>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-r-0 border-t-0"></td>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-t-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    className="text-indigo-700 m-auto"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    // className="feather feather-check"
                  >
                    <title id="catTitle">Relevant package title ( too many to add )</title>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </td>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-t-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    className="text-indigo-700 m-auto"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    // className="feather feather-check"
                  >
                    <title id="catTitle">Relevant package title ( too many to add )</title>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </td>
              </tr>
              <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                <th scope="col" className="min-w-full sm:min-w-0 sm:w-1/5 bg-gray-100 p-4 border-gray-300 border border-r-0  border-t-0 font-normal">
                  Advance drawing tools
                </th>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-r-0 border-t-0"></td>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-r-0 border-t-0"></td>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-t-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    className="text-indigo-700 m-auto"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    // className="feather feather-check"
                  >
                    <title id="catTitle">Relevant package title ( too many to add )</title>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </td>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-t-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    className="text-indigo-700 m-auto"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    // className="feather feather-check"
                  >
                    <title id="catTitle">Relevant package title ( too many to add )</title>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </td>
              </tr>
              <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                <th scope="col" className="min-w-full sm:min-w-0 sm:w-1/5 bg-gray-100 p-4 border-gray-300 border border-r-0  border-t-0 font-normal">
                  Auto layout
                </th>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-r-0 border-t-0"></td>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-r-0 border-t-0"></td>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-t-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    className="text-indigo-700 m-auto"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    // className="feather feather-check"
                  >
                    <title id="catTitle">Relevant package title ( too many to add )</title>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </td>
                <td className="w-1/3 sm:w-1/5 p-4 border-gray-300 border border-t-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    className="text-indigo-700 m-auto"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    // className="feather feather-check"
                  >
                    <title id="catTitle">Relevant package title ( too many to add )</title>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* </section> */}
        <div id="section-bottom"></div>
      </div>
    </>
  );
}
