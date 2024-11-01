import React from 'react';
import tcaicon from '../assets/TCA_bg.png'




const TCAadvertise = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="max-w-[720px] mx-auto">
     

        {/* Centering wrapper */}
        <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={tcaicon}
              alt="card-image" className="object-cover w-full h-full" />
          </div>
          <div className="p-6">
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            THE CRYPTOLOGY ACADEMY
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Advertise Your Brand with TCA
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Unlock new opportunities by advertising your brand on TCA! Reach a vibrant audience eager to discover 
            innovative products and services. Partner with us to elevate your 
            visibility and engage with potential customers in a meaningful way. Let’s make your brand shine together!

            </p>
            <a href="#" className="inline-block">
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-Greeb-900/10 active:bg-green-900/20"
                type="button">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCAadvertise;
