
import React from 'react';

export default function Categories() {
  return (
    <div className="flex flex-col mt-16 ml-32 max-w-full w-[1170px] max-md:mt-10">
      <div className="shrink-0 h-px border border-black border-solid max-md:max-w-full" />
      <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-end max-md:max-w-full">
          <div className="flex flex-col min-w-[240px]">
            <div className="flex gap-4 items-center self-start">
              <div className="flex flex-col self-stretch my-auto w-5">
                <div className="flex shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <div className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
                Categories
              </div>
            </div>
            <div className="mt-5 text-4xl font-semibold tracking-widest leading-none text-black">
              Browse By Category
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d46c131187bfff9eb633481579a064341b51d7196040ee40dd3f9577e445a5e?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 aspect-square w-[46px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88e31fcac886e936832d43b7fb2b7a3e219274da66d8e9d07a08a6cc7094c1b?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 aspect-square w-[46px]"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-8 items-start mt-16 text-base text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-center px-9 py-6 rounded border border-solid border-black border-opacity-30 w-[170px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20ec08ed5796334e673da2243a13c72022a5b096263a7669a8c1b20e26fcb173?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain w-14 aspect-square"
            />
            <div className="mt-4">Phones</div>
          </div>
          <div className="flex overflow-hidden flex-col px-9 py-6 rounded border border-solid border-black border-opacity-30 w-[170px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/169f1074ba845e40c79585c255fa0f314b2fc28c115443797fa563ab00e6fb0c?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain self-center w-14 aspect-square"
            />
            <div className="mt-4">Computers</div>
          </div>
          <div className="flex overflow-hidden flex-col px-9 py-6 rounded border border-solid border-black border-opacity-30 w-[170px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb7e79d189180c770b8d3b3ab2de6ba2780955bda339c8491b1487c43698cf6?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain self-center w-14 aspect-square"
            />
            <div className="mt-4">SmartWatch</div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center px-9 py-6 bg-red-500 rounded shadow-sm text-neutral-50 w-[170px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cc34e42c82c7e9a2273003e0455c8a3a7c00028c9bfe7f64de1c901a10dd107?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain w-14 aspect-square"
            />
            <div className="mt-4">Camera</div>
          </div>
          <div className="flex overflow-hidden flex-col px-9 py-6 rounded border border-solid border-black border-opacity-30 w-[170px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/79859465391a7d602f90b1a980bf455cd3b2ad996a3dbe738ac4ae77d1aab98f?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain self-center w-14 aspect-square"
            />
            <div className="mt-4">HeadPhones</div>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-9 py-6 rounded border border-solid border-black border-opacity-30 w-[170px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/274352a0bfbd8c25dbfe44f56aac0dd158de0061330612b24326d29760a259ce?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain w-14 aspect-square"
            />
            <div className="mt-4">Gaming</div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-16 h-px border border-black border-solid max-md:mt-10 max-md:max-w-full" />
    </div>
  );
}