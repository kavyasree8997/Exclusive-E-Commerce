
import React from 'react';

export default function Services() {
  return (
    <div className="flex flex-wrap gap-5 justify-between self-stretch mt-36 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-center self-center ml-10 text-black max-md:max-w-full">
          <div className="flex flex-col items-center self-stretch my-auto min-w-[240px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c149aa9d6a476867a14682e3714f947c177feb1c71199d9c1435de9ce524054?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain w-20 aspect-square"
            />
            <div className="flex flex-col items-center mt-6">
              <div className="text-xl font-semibold leading-snug">
                FREE AND FAST DELIVERY
              </div>
              <div className="mt-2 text-sm text-center">
                Free delivery for all orders over $140
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch my-auto min-w-[240px] w-[262px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d3e6dcc703d6f46b6d004c6537d05da73797f1080b2fc83592f0d593ef30648?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain w-20 aspect-square"
            />
            <div className="flex flex-col items-center mt-6">
              <div className="text-xl font-semibold leading-snug">
                24/7 CUSTOMER SERVICE
              </div>
              <div className="mt-2 text-sm">
                Friendly 24/7 customer support
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch my-auto min-w-[240px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/212dcc356d51af23492ece10724c086e774c8917c922a9d23b3a400e64353cb1?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain w-20 aspect-square"
            />
            <div className="flex flex-col items-center mt-6">
              <div className="text-xl font-semibold leading-snug">
                MONEY BACK GUARANTEE
              </div>
              <div className="mt-2 text-sm">
                We return money within 30 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}