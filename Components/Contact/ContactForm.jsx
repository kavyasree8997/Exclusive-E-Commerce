import Link from 'next/link';
import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow justify-center px-8 py-10 w-full text-base bg-white rounded shadow-sm max-md:px-5 max-md:mt-8 max-md:max-w-full">
        <div className="flex flex-col items-end w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-start leading-6 text-red-500 max-md:max-w-full">
            <div className="flex flex-col w-[235px]">
              <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 rounded bg-neutral-100 max-md:pr-5">
                <div className="opacity-80">
                  <input type="text" placeholder='Your Name*' className='w-full h-full p-2 border border-gray-300 rounded 
                focus:outline-none focus:border-blue-500 
                placeholder-gray-400 text-gray-700 
                bg-white shadow-sm' />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[235px]">
              <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 rounded bg-neutral-100 max-md:pr-5">
                <div className="opacity-80">
                  <input type="text" placeholder='Your Email*' className='w-full h-full p-2 border border-gray-300 rounded 
                focus:outline-none focus:border-blue-500 
                placeholder-gray-400 text-gray-700 
                bg-white shadow-sm' />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[235px]">
              <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 rounded bg-neutral-100 max-md:pr-5">
                <div className="opacity-80">
                  <input type="text" placeholder='Your Phone*' className='w-full h-full p-2 border border-gray-300 rounded 
                focus:outline-none focus:border-blue-500 
                placeholder-gray-400 text-gray-700 
                bg-white shadow-sm' />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-8 max-w-full text-black w-[737px]">
            <div className="w-full h-full flex-wrap flex-col items-start px-4 pt-3.5 pb-44 rounded bg-neutral-100 max-md:pr-5 max-md:pb-24 max-md:max-w-full">
              <div className="flex flex-wrap items-center w-full h-full mb-0 opacity-50 max-md:mb-2.5"> <input
                type="text"
                placeholder="Send Message*"
                className="self-stretch my-auto opacity-100 color-black w-full bg-transparent outline-none"
              /></div>
            </div>
          </div>
          <div className='w-full'><Link href='/error'><button className="gap-2.5 w-full self-stretch px-12 py-4 mt-8 font-medium bg-red-500 rounded text-neutral-50 max-md:px-5">
            Send Message
          </button></Link></div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactForm;