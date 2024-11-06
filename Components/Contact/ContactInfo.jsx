import React from 'react';
const ContactInfo = () => {
  return (
    <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow justify-center px-9 py-12 w-full bg-white rounded shadow-sm max-md:px-5 max-md:mt-8">
        <div className="flex flex-col">
          <div className="flex flex-col w-full max-w-[262px]">
            <div className="flex gap-4 items-center self-start text-base font-medium text-black">
              <img
                loading='lazy'
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2294fbd9f04939aff5db1becfbe77fb51ff3bfaac158ee6057c742697c3f64e0?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                alt="Phone icon"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square fill-red-500"
              />
              <div className="self-stretch my-auto">Call To Us</div>
            </div>
            <div className="flex flex-col mt-6 w-full text-sm text-black">
              <div>We are available 24/7, 7 days a week.</div>
              <div className="mt-4">Phone: +8801611112222</div>
            </div>
          </div>
          <div className="flex flex-col mt-8 max-w-full w-[270px]">
            <div className="shrink-0 h-px bg-black border border-black border-solid" />
          </div>
          <div className="flex flex-col mt-8 w-full max-w-[250px]">
            <div className="flex gap-4 items-center self-start text-base font-medium text-black">
              <img
                loading='lazy'
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78ce634fd57696e4af7a0dd0217c81b3d24659ea00c5b91dd9cc701749c73926?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                alt="Email icon"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square fill-red-500"
              />
              <div className="self-stretch my-auto">Write To US</div>
            </div>
            <div className="flex flex-col mt-6 w-full text-sm text-black">
              <div className="leading-5">
                Fill out our form and we will contact you within 24 hours.
              </div>
              <div className="mt-4">Emails: customer@exclusive.com</div>
              <div className="mt-4">Emails: support@exclusive.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;