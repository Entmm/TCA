import React from 'react';
import footericon from '../assets/tca-navigation.png'







const Footer = () => {
  const signInNow = () => {
    // Logic for sign-in or redirect action
    console.log("Sign-in button clicked");
  };

  return (
    <div className="bg-black">
      {/* Join Us Section */}
      <section className="bg-black">
        <div className="max-w-lg px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline md:block">Join Us</span>
            <span className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#326339] via-[#3ae464] to-[#fc5e5e] md:inline-block">
              {" "}The Cryptology <br />{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#326339] via-[#3ae464] to-[#fc5e5e]">Academy</span>
            </span>
          </h1>
          <div className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
            <button className="bg-tkb border text-sm text-white py-3 px-7 rounded-full" onClick={signInNow}>
              Join TCA
            </button>
          </div>
        </div>
      </section>

      <hr className="text-white mx-5" />

      {/* Footer Section */}
      <footer className="bg-black pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <img className="rounded-full" src={footericon} width="150" height="40" alt="Logo" />
            </div>
            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              ALL RIGHT RESERVED @THE CRYPTOLOGY ACADEMY
            </p>
          </div>
        </div>
      </footer>

   
    </div>
  );
};

export default Footer;
