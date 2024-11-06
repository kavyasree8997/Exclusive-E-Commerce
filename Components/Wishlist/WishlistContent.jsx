
import React from 'react';
import WishlistItem from './WishlistItem';

const WishlistContent = () => {
  const wishlistItems = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/21ee6e335ae9924a6e3f4f8d94798cec2f6ec584333896550356c05f5acab46a?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0",
      name: "Gucci duffle bag",
      price: "$960",
      originalPrice: "$1160",
      discount: "-35%"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/623eb32eb1bbc25f1dc254a16c9cc73fa991f608ad75733d84070533c47c43a9?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0",
      name: "RGB liquid CPU Cooler",
      price: "$1960"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa70e9baabbdd2932d65630db583f5e35497d82d8df49ce4b4b04c9ea246aba3?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0",
      name: "GP11 Shooter USB Gamepad",
      price: "$550"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f53d1575c5dccca3733da8baa05d2d3e119a3c8552cb518629866a49fa0488f7?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0",
      name: "Quilted Satin Jacket",
      price: "$750"
    }
  ];

  return (
    <div className="flex flex-col self-center mt-20 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
          <div className="flex gap-4 items-center self-stretch my-auto">
          <div className="flex flex-col self-stretch my-auto w-5">
            <div className="flex shrink-0 h-10 bg-red-500 rounded" />
          </div>
          <div className="self-stretch my-auto text-xl leading-tight text-center text-black">
            Wishlist (4)
          </div>
        </div>
          <button><div className="gap-2.5 self-stretch px-12 py-4 my-auto text-base font-medium text-black rounded border border-solid border-black border-opacity-50 max-md:px-5">
            Move All To Bag
          </div></button>
        </div>
        <div className="flex flex-wrap gap-8 items-start mt-16 max-md:mt-10 max-md:max-w-full">
          {wishlistItems.map((item, index) => (
            <WishlistItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistContent;