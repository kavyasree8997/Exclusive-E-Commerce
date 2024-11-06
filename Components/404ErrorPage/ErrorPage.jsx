
import React from 'react';
import ErrorContent from './ErrorContent';
import Header from '../Headers/Header';
import Footer from '../Headers/Footer';

const ErrorPage = () => {
  return (
    
    <div>
    <div className="flex overflow-hidden flex-col items-start pr-20 bg-white max-md:pr-5">
      <Header />
    </div>
    <div data-layername="404Error" className="flex justify-center overflow-hidden flex-col bg-white">
      <ErrorContent />
    </div>
    <div><Footer /></div>
    </div>
  );
};

export default ErrorPage;