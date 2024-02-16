import React from 'react';

const plans = [
  {
    id: 1,
    title: 'Starter',
    price: 'Free',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    buttonColor: 'bg-blue-black',
  },
  {
    id: 1,
    title: 'Premium Plan',
    price: '$19.99',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    buttonColor: 'bg-blue-black',
  },
  {
    id: 1,
    title: 'Organization Plan',
    price: '$19.99',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    buttonColor: 'bg-blue-black',
  },
  // Add more plan objects as needed
];

function FigmaCard() {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className={`bg-white rounded-md border-gray-200 border-2 overflow-hidden  `}>
            <div className="p-8">
              <h2 className="text-lg font-semibold text-black mb-4">{plan.title}</h2>
              <p className="text-3xl font-semibold text-black mb-2">{plan.price}</p>
              <div className="p-4">
                <button className={`w-full transition-transform transform hover:scale-105 text-white rounded-md px-4 py-2  focus:outline-none focus:shadow-outline-blue bg-black ${plan.buttonColor}`}>Select Plan</button>
              </div>
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
    price: '$100',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    buttonColor: 'bg-blue-black',
  },
  {
    id: 1,
    title: 'Premium Plan',
    price: '$19.99',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    buttonColor: 'bg-blue-black',
  },
  {
    id: 1,
    title: 'Organization Plan',
    price: '$19.99',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    buttonColor: 'bg-blue-black',
  },
  // Add more plan objects as needed
];
function FigmaJam() {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans2.map((plan) => (
          <div key={plan.id} className={`bg-white rounded-md border-gray-200 border-2 overflow-hidden  `}>
            <div className="p-8">
              <h2 className="text-lg font-semibold text-black mb-4">{plan.title}</h2>
              <p className="text-3xl font-semibold text-black mb-2">{plan.price}</p>
              <div className="p-4">
                <button className={`w-full transition-transform transform hover:scale-105 text-white rounded-md px-4 py-2  focus:outline-none focus:shadow-outline-blue bg-black ${plan.buttonColor}`}>Select Plan</button>
              </div>
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
