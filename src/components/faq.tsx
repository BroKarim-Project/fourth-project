import React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'react-feather';
import SectionContainer from './SectionContainer';

const faqs = [
  {
    question: 'Where can i see a breakdown of my full seats and associated costs',
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    ),
  },
  {
    question: 'Whats the difference between a full seat and an editor seat',
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    ),
  },
  {
    question: 'How can i adjust who has admin privilages?',
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    ),
  },
  {
    question: 'Can you send me an invoice',
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{' '}
      </p>
    ),
  },
  {
    question: 'What if more people are added to my team every month',
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    ),
  },
  {
    question: 'How much does Dev Mode cost?',
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    ),
  },
];

const FaqItem = ({ keyP, faq }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="py-2 border-none">
      <dt key={keyP} className="text-base text-black ">
        <button
          className={`flex w-full py-2 items-center  text-left border-b-2 border-black  ${isExpanded ? 'border-none' : 'border-b-2 border-black'}`}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <div className="mr-2 ">{isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}</div>
          <span className="text-xl font-bold">{faq.question}</span>
        </button>
      </dt>
      <dd className={`mt-2 transition-all duration-700 delay-75 ${isExpanded ? 'open' : 'closed'}`}>
        <div className={`overflow-hidden border-b-2 border-black ${isExpanded ? 'visible' : 'hidden'}`}>{faq.answer}</div>
      </dd>
    </div>
  );
};

const Faq = () => {
  return (
    <>
      <SectionContainer className="container md:pt-16 pt-10">
        <div className="grid grid-cols-12" id="faq">
          <div className="col-span-12 text-center">
            <h2 className="mb-4 text-3xl text-black font-bold lg:text-4xl">Pricing FAQs</h2>
          </div>
        </div>
        <dl className="mx-auto mt-6 max-w-3xl divide-y divide-neutral-300">
          {faqs.map((faq, idx) => (
            <FaqItem keyP={idx} key={idx} faq={faq} />
          ))}
        </dl>
      </SectionContainer>
    </>
  );
};

export default Faq;
/*


*/
