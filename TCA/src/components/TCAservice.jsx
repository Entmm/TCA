import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'BASIC',
      price: '$199.00',
      frequency: 'Monthly',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      buttonColor: 'bg-red-700 hover:bg-red-800', // Change this color
      textColor: 'text-gray-500',
      priceColor: 'text-gray-700',
    },
    {
      name: 'PRO',
      price: '$399.00',
      frequency: 'Monthly',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      buttonColor: 'bg-green-400 hover:bg-green-800', // Change this color
      textColor: 'text-green-200',
      priceColor: 'text-white',
    },
    {
      name: 'ENTERPRISE',
      price: '$899.00',
      frequency: 'Monthly',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      buttonColor: 'bg-red-700 hover:bg-red-800', // Change this color
      textColor: 'text-gray-500',
      priceColor: 'text-gray-700',
    },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-black py-12 px-8 w-full">
        <h1 className="text-white text-1xl font-thin text-center">THE CRYPYTOLOGY ACADEMY</h1>
        <h1 className="text-white text-6xl font-bold text-center">Offers Services</h1>
        <p className="text-white text-center mt-2 mb-6">Select the plan that best fits your needs.</p>
        <div className="flex flex-col lg:flex-row justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`py-12 px-8 w-full md:max-w-min sm:w-full ${index === 1 ? 'bg-green-500 scale-105' : 'bg-white'} z-30 shadow-lg`}
            >
              <h1 className={`${plan.textColor} font-semibold text-center text-xl`}>{plan.name}</h1>
              <div className="text-center py-4 px-7">
                <h1 className={`${plan.priceColor} text-4xl font-black`}>{plan.price}</h1>
                <p className={`${plan.priceColor} mt-2`}>{plan.frequency}</p>
              </div>
              <div className={`h-px ${index === 1 ? 'bg-[#1fb833]' : 'bg-[#0d5317]'}`}></div>
              <div className="text-center mt-3">
                <p className={`text-sm ${index === 1 ? 'text-white text-opacity-80' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>
              <button className={`w-full mt-6 mb-3 py-2 text-white font-semibold ${plan.buttonColor}`}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
