
import React from 'react';

const OurStory = () => {
  return (
    <div className="self-stretch mt-11 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl font-semibold leading-none text-justify text-black tracking-[3.24px] max-md:text-4xl">
              Our Story
            </div>
            <div className="flex flex-col mt-10 max-w-full text-base leading-7 text-black w-[525px]">
              <div className="max-md:max-w-full">
                Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.{" "}
              </div>
              <div className="mt-6 max-md:max-w-full">
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col grow w-full bg-pink-400 rounded max-md:mt-10 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d91fe816b0043439606098c814ae8037a347c975735484665286064564d80407?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain w-full aspect-[1.16] max-md:max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;