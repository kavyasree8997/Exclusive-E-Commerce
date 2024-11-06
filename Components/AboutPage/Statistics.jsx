
import React from 'react';

const Statistics = () => {
  return (
    <div className="flex flex-wrap gap-8 items-start mt-36 text-black max-md:mt-10 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center px-12 py-8 rounded border border-solid border-black border-opacity-30 min-w-[240px] w-[270px] max-md:px-5">
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ed825538aef275cf4274ef61776277f135dbd76cd8facc6d948b83c0fa1c6df?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain w-20 aspect-square" />
          <div className="flex flex-col items-center mt-6">
            <div className="text-3xl font-bold tracking-widest leading-none">
              10.5k{" "}
            </div>
            <div className="mt-3 text-base text-center">
              Sallers active our site
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center px-9 py-8 text-white bg-red-500 rounded shadow-sm min-w-[240px] w-[270px] max-md:px-5">
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8cd8ce47447ad799d0877ee64349ae8ed27489d7c648c9d110bdea5a100ce32?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain w-20 aspect-square" />
          <div className="flex flex-col items-center mt-6">
            <div className="text-3xl font-bold tracking-widest leading-none">
              33k
            </div>
            <div className="mt-2 text-base">
              Mopnthly Produduct Sale
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center px-1 py-8 rounded border border-solid border-black border-opacity-30 min-w-[240px] w-[270px]">
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e01181fd226017247eae8524230a404d0879ef17c7446fedec30aef42ea37cee?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain w-20 aspect-square" />
          <div className="flex flex-col items-center mt-6">
            <div className="text-3xl font-bold tracking-widest leading-none">
              45.5k
            </div>
            <div className="mt-3 text-base">
              Customer active in our site
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center px-7 py-8 rounded border border-solid border-black border-opacity-30 min-w-[240px] w-[270px] max-md:px-5">
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/525c969b1b52c24758ead6b5e18ff6ec7ce1569f8efe88ab7455e09b89a62fcb?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain w-20 aspect-square" />
          <div className="flex flex-col items-center mt-6">
            <div className="text-3xl font-bold tracking-widest leading-none">
              25k
            </div>
            <div className="mt-3 text-base">
              Anual gross sale in our site
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;