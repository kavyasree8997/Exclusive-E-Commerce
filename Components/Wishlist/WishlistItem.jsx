import Link from 'next/link';
import React from 'react';

const WishlistItem = ({ image, name, price, originalPrice, discount }) => {
  const dis = discount || "0%";
  return (
    <div className="flex flex-col min-w-[240px] w-[270px]">
      <div className="flex overflow-hidden flex-col pt-3 w-full rounded bg-neutral-100 max-w-[270px]">
        <Link href='/product'><div className="flex mx-3 max-md:mx-2.5">
          <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
            
              <div className={`${discount ? 'visible':'invisible'} gap-2.5 self-start px-3 py-1 bg-red-500 rounded`}>
                {dis}
              </div>
            
            <img
              loading="lazy"
              src={image}
              className="object-contain self-end max-w-full aspect-[1.38] w-[178px]"
              alt={name}
            />
          </div>
          <div className="flex flex-col self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9345dad452b03692cdbc613f709d144e723e1bbf5357d91182186f1925be37?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain aspect-square w-[34px]"
              alt="Wishlist icon"
            />
          </div>
        </div> </Link>
        <div className="flex flex-col justify-center items-center px-7 py-2.5 mt-10 w-full text-xs text-white bg-black rounded-none max-md:px-5">
          <Link href ='/error'><div className="flex gap-2 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e462325802d0556992aa0397efea5256f6fd0a6001162dca8b6d920936baee1?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="Cart icon"
            />
            <div className="self-stretch my-auto">
              Add To Cart
            </div>
          </div></Link>
        </div>
      </div>
      <div className="flex flex-col self-start mt-4 text-base font-medium">
        <div className="text-black">{name}</div>
        <div className="flex gap-3 items-start self-start mt-2 whitespace-nowrap">
          <div className="text-red-500">{price}</div>
          {originalPrice && (
            <div className="text-black opacity-50">{originalPrice}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;