import React from 'react';

const plans = [
  {
    id: 1,
    title: 'Basic Plan',
    description: 'Ideal for small businesses',
    price: '$19.99',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    bgColor: 'bg-blue-200',
    buttonColor: 'bg-blue-500',
  },
  {
    id: 1,
    title: 'Premium Plan',
    description: 'Ideal for small businesses',
    price: '$19.99',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    bgColor: 'bg-blue-200',
    buttonColor: 'bg-blue-500',
  },
  {
    id: 1,
    title: 'Organization Plan',
    description: 'Ideal for small businesses',
    price: '$19.99',
    features: ['10 Users', 'Basic Features', '24/7 Support'],
    bgColor: 'bg-blue-200',
    buttonColor: 'bg-blue-500',
  },
  // Add more plan objects as needed
];

function FigmaCard() {
  return (
    <div className="w-full min-h-screen py-12 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className={`bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105`}>
            <div className={`p-1 ${plan.bgColor}`}></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{plan.title}</h2>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <p className="text-4xl font-bold text-gray-800 mb-6">{plan.price}</p>
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
            <div className="p-4">
              <button className={`w-full text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ${plan.buttonColor}`}>Select Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FigmaJam() {
  return (
    <div className="w-full min-h-screen py-12 flex items-center justify-center">
      <div className="grid grid-cols-1 bg-black sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className={`bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105`}>
            <div className={`p-1 ${plan.bgColor}`}></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{plan.title}</h2>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <p className="text-4xl font-bold text-gray-800 mb-6">{plan.price}</p>
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
            <div className="p-4">
              <button className={`w-full text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ${plan.buttonColor}`}>Select Plan</button>
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
