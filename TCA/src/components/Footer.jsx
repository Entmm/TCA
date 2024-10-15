import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-dark p-8 text-white">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-bold">Join our Ecosystem</h4>
          <p>Become a co-builder, mentor, or contributor and help us shape the future of education in Web3.</p>
        </div>
        <div>
          <form>
            <h5 className="font-semibold">Become a Co-builder</h5>
            <input type="text" placeholder="Full name" className="block w-full p-2 mt-2 mb-2" />
            <input type="email" placeholder="Email" className="block w-full p-2 mb-2" />
            <textarea placeholder="Details" className="block w-full p-2 mb-2"></textarea>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
