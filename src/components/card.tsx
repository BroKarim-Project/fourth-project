import React from 'react';

const plans = [
  {
    id: 1,
    title: 'Starter',
    price: 'Free',
    time: null,
    subtitile: null,
    features: ['Editor', '3 collaborative design files', 'Unlimited personal drafts', 'Basic file inspection'],
    textcolor: 'text-black',
    buttonColor: 'bg-transparent',
    link: null,
  },
  {
    id: 2,
    title: 'Premium Plan',
    price: '$19.99',
    time: '/mo',
    subtitile: 'Everythinng in starter and ...',
    features: ['Editor', '3 collaborative design files', 'Unlimited personal drafts', 'Basic file inspection'],
    textColor: 'text-white',
    buttonColor: 'bg-[#000]',
    link: 'Free for students',
  },
  {
    id: 3,
    title: 'Organization',
    price: '$44.99',
    time: '/mo',
    subtitile: 'Everythinng in premium and ...',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    textColor: 'text-white',
    buttonColor: 'bg-[#000]',
    link: 'Contact sales',
  },
  {
    id: 4,
    title: 'Enterprise',
    price: '$74.99',
    time: '/mo',
    subtitile: 'Everythinng in organization and ...',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    textColor: 'text-white',
    buttonColor: 'bg-[#000]',
    link: 'Learn more',
  },
  // Add more plan objects as needed
];

function FigmaCard() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 justify-items-center">
        {plans.map((plan) => (
          <div key={plan.id} className={`bg-white sm:w-full w-5/6 rounded-md border-gray-200 border-2 overflow-hidden  `}>
            <div className="p-4 sm:p-6">
              <h2 className="text-lg font-semibold text-black mb-4">{plan.title}</h2>
              <p className="text-3xl font-semibold text-black mb-2">
                {plan.price}
                {plan.time !== null && <span className="font-medium text-base dark:text-gray-400">{plan.time}</span>}
              </p>

              <div className="p-4  flex flex-col items-center gap-3">
                <button className={`w-full transition-transform transform hover:scale-105 px-6 py-2  focus:outline-none focus:shadow-outline-blue border-4 border-black rounded-md ${plan.buttonColor} ${plan.textColor}`}>Select Plan</button>
                {plan.link !== null && (
                  <a href="/" className="underline underline-offset-2">
                    {plan.link}
                  </a>
                )}
              </div>
              {plan.subtitile !== null && <p className="font-bold text-sm mb-4">{plan.subtitile}</p>}
              <ul className="text-sm text-gray-600 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const plans2 = [
  {
    id: 1,
    title: 'Starter',
    price: 'Free',
    time: null,
    subtitile: null,
    features: ['Editor', '3 collaborative design files', 'Unlimited personal drafts', 'Basic file inspection'],
    textcolor: 'text-black',
    buttonColor: 'bg-transparent',
    link: null,
  },
  {
    id: 2,
    title: 'Premium Plan',
    price: '$3',
    time: '/mo',
    subtitile: 'Everythinng in starter and ...',
    features: ['Editor', '3 collaborative design files', 'Unlimited personal drafts', 'Basic file inspection'],
    textColor: 'text-white',
    buttonColor: 'bg-[#000]',
    link: 'Free for students',
  },
  {
    id: 3,
    title: 'Organization',
    price: '$4',
    time: '/mo',
    subtitile: 'Everythinng in premium and ...',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    textColor: 'text-white',
    buttonColor: 'bg-[#000]',
    link: 'Contact sales',
  },
  {
    id: 4,
    title: 'Enterprise',
    price: '$6',
    time: '/mo',
    subtitile: 'Everythinng in organization and ...',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    textColor: 'text-white',
    buttonColor: 'bg-[#000]',
    link: 'Learn more',
  },
];
function FigmaJam() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 justify-items-center">
        {plans2.map((plan) => (
          <div key={plan.id} className={`bg-white sm:w-full w-5/6 rounded-md border-gray-200 border-2 overflow-hidden  `}>
            <div className="p-4 sm:p-6">
              <h2 className="text-lg font-semibold text-black mb-4">{plan.title}</h2>
              <p className="text-3xl font-semibold text-black mb-2">
                {plan.price}
                {plan.time !== null && <span className="font-medium text-base dark:text-gray-400">{plan.time}</span>}
              </p>
              <div className="p-4  flex flex-col items-center gap-3">
                <button className={`w-full transition-transform transform hover:scale-105 px-6 py-2  focus:outline-none focus:shadow-outline-blue border-4 border-black rounded-md ${plan.buttonColor} ${plan.textColor}`}>Select Plan</button>
                {plan.link !== null && (
                  <a href="/" className="underline underline-offset-2">
                    {plan.link}
                  </a>
                )}
              </div>
              {plan.subtitile !== null && <p className="font-bold text-sm mb-4">{plan.subtitile}</p>}
              <ul className="text-sm text-gray-600 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { FigmaCard, FigmaJam };

/*


*/
