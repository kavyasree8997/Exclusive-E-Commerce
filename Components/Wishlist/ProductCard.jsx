
import React from 'react';
import Link from 'next/link';

const ProductCard = ({ image, name, price, originalPrice, discount, rating, isNew }) => {
  const dis = discount || "0%"
  return (
    <div className="flex flex-col min-w-[240px] w-[270px]">
      <div className="flex overflow-hidden flex-col pt-3 w-full rounded bg-neutral-100 max-w-[270px]">
        <Link href='/product'>
        <div className="flex gap-2.5 mx-3 max-md:mx-2.5">
          <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
              <div className={`${discount ? 'visible':'invisible'} gap-2.5 self-start px-3 py-1 bg-red-500 rounded`}>
                {dis}
              </div>
              <div className={`${isNew ? 'visible':'invisible'} gap-2.5 self-start px-3 py-1 bg-green-500 rounded`}>
                NEW
              </div>
            <img
              loading="lazy"
              src={image}
              className="object-contain z-10 self-end mt-0 max-w-full aspect-[0.95] w-[158px]"
              alt={name}
            />
          </div>
          <div className="flex flex-col self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain aspect-square w-[34px]"
              alt="Wishlist icon"
            />
          </div>
        </div></Link>
        <Link href='/error'><div className="flex flex-col justify-center items-center px-7 py-2.5 mt-3.5 w-full text-xs text-white bg-black rounded-none max-md:px-5">
          <div className="flex gap-2 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1c7b4c5b8a14be22a3ab2dcaf00ea2a28efa02e58b408afde256eec3ce6cfd?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="Cart icon"
            />
            <div className="self-stretch my-auto">
              Add To Cart
            </div>
          </div>
        </div></Link>
      </div>
      <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
        <div className="self-stretch text-black">{name}</div>
        <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
          <div className="text-red-500">{price}</div>
          {originalPrice && (
            <div className="text-black opacity-50">{originalPrice}</div>
          )}
        </div>
        <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
            className="object-contain shrink-0 aspect-[5] w-[100px]"
            alt="Rating stars"
          />
          <div className="w-8 opacity-50">({rating})</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;