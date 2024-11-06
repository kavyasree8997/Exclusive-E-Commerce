import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Header from '../Headers/Header';
import Footer from '../Headers/Footer';
const ContactPage = () => {
  return (
    <div>
    <div className="flex overflow-hidden flex-col items-start pr-20 bg-white max-md:pr-5" >
      <Header /> </div>
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col self-center mt-20 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-3 items-center self-start text-sm text-black whitespace-nowrap">
          <div className="self-stretch my-auto opacity-50">Home</div>
          <div className="self-stretch my-auto">/</div>
          <div className="self-stretch my-auto">Contact</div>
        </div>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default ContactPage;