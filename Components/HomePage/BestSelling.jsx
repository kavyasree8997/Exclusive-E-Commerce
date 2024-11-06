
import React from 'react';

export default function BestSelling() {
  return (
    <div className="flex flex-col mt-16 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-end max-md:max-w-full">
        <div className="flex flex-col min-w-[240px]">
          <div className="flex gap-4 items-center self-start">
            <div className="flex flex-col self-stretch my-auto w-5">
              <div className="flex shrink-0 h-10 bg-red-500 rounded" />
            </div>
            <div className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
              This Month
            </div>
          </div>
          <div className="mt-5 text-4xl font-semibold tracking-widest leading-none text-black">
            Best Selling Products
          </div>
        </div>
        <div className="gap-2.5 self-stretch px-12 py-4 text-base font-medium bg-red-500 rounded text-neutral-50 max-md:px-5">
          View All
        </div>
      </div>
      <div className="flex flex-wrap gap-8 items-start mt-16 text-base font-medium max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[270px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/086cb12654843d3a0ff9cb58924fc272450d1ca8b3fa3fc708a911dc70141653?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
            className="object-contain max-w-full aspect-[1.08] w-[270px]"
          />
          <div className="flex flex-col self-start mt-4">
            <div className="text-black">The north coat</div>
            <div className="flex gap-3 items-start self-start mt-2 whitespace-nowrap">
              <div className="text-red-500">$260</div>
              <div className="text-black opacity-50">$360</div>
            </div>
            <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain shrink-0 aspect-[5] w-[100px]"
              />
              <div className="w-8 opacity-50">(65)</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[240px] w-[270px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43c07b48cd591f61c84ddbb342884cf71b6449b7a8c12847a5547d278503b226?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
            className="object-contain max-w-full aspect-[1.08] w-[270px]"
          />
          <div className="flex flex-col self-start mt-4">
            <div className="text-black">Gucci duffle bag</div>
            <div className="flex gap-3 items-start self-start mt-2 whitespace-nowrap">
              <div className="text-red-500">$960</div>
              <div className="text-black opacity-50">$1160</div>
            </div>
            <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbd94c537fb01aba7986fa7a637ddfbd1ecca627a8a5158693ed9b446d50624d?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain shrink-0 aspect-[5] w-[100px]"
              />
              <div className="w-8 opacity-50">(65)</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[240px] w-[270px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f9cef694ffcf7501a96b0aa76cc799d6c1e90afd4ba6497f689f36be8755cc1?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
            className="object-contain max-w-full aspect-[1.08] w-[270px]"
          />
          <div className="flex flex-col items-start self-start mt-4">
            <div className="self-stretch text-black">RGB liquid CPU Cooler</div>
            <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
              <div className="text-red-500">$160</div>
              <div className="text-black opacity-50">$170</div>
            </div>
            <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbd94c537fb01aba7986fa7a637ddfbd1ecca627a8a5158693ed9b446d50624d?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain shrink-0 aspect-[5] w-[100px]"
              />
              <div className="w-8 opacity-50">(65)</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[240px] w-[270px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/67efd49fc8ff737b20bfe1f087b1de893b1eed4bfc6114609a1a00cc2e26873b?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
            className="object-contain max-w-full aspect-[1.08] w-[270px]"
          />
          <div className="flex flex-col self-start mt-4">
            <div className="text-black">Small BookSelf</div>
            <div className="gap-3 self-start mt-2 text-red-500 whitespace-nowrap">
              $360
            </div>
            <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain shrink-0 aspect-[5] w-[100px]"
              />
              <div className="w-8 opacity-50">(65)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}