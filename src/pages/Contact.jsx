import React, { useEffect } from 'react';
import logo from '../assets/logo.png';

const Contact= () => {
     useEffect(() => {
        document.title = "SubZone - Contact"; 
      }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className='font-bold text-3xl text-purple-400 mb-5'>For Any Query feel free to Contact With Us</h1>
      
      <div className="mb-4">
        <img src={logo} alt="Logo" className="w-32 h-32 object-contain" />
      </div>

      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">SubZone</h1>

      
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-2">Email: <a href="mailto:support@subzone.com" className="text-blue-500 hover:underline">support@subzone.com</a></p>
        <p className="text-lg text-gray-700">Phone: <a href="tel:+123456789" className="text-blue-500 hover:underline">+1 234 567 89</a></p>
      </div>
    </div>
  );
};

export default Contact;
