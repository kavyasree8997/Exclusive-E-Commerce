
import React from 'react';
import ProductCard from './ProductCard';

const JustForYou = () => {
  const products = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb44ca87fca38b27f10b8a899bc34eaeaf54123a82dc3023078ae6687a63a1a2?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0",
      name: "ASUS FHD Gaming Laptop",
      price: "$960",
      originalPrice: "$1160",
      discount: "-35%",
      rating: 65
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/38fb1b7c0b0c5bfee5f9ee5cae45ee04b50a3a5cfbcf29cc559cdeb284a2057a?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0",
      name: "IPS LCD Gaming Monitor",
      price: "$1160",
      rating: 65
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e93ad05ae04f0b54f4159cbcf6911a27cb651cbe215adedef39517dbfe9650fd?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0",
      name: "HAVIT HV-G92 Gamepad",
      price: "$560",
      rating: 65,
      isNew: true
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/894eec9e8d60eee4f3c00e3415a295bffbe214c139b91ff832ad88185ddcdbe2?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0",
      name: "AK-900 Wired Keyboard",
      price: "$200",
      rating: 65
    }
  ];

  return (
    <div className="flex flex-col self-center mt-20 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
        <div className="flex gap-4 items-center self-stretch my-auto">
          <div className="flex flex-col self-stretch my-auto w-5">
            <div className="flex shrink-0 h-10 bg-red-500 rounded" />
          </div>
          <div className="self-stretch my-auto text-xl leading-tight text-center text-black">
            Just For You
          </div>
        </div>
        <div className="gap-2.5 self-stretch px-12 py-4 my-auto text-base font-medium text-black rounded border border-solid border-black border-opacity-50 max-md:px-5">
          See All
        </div>
      </div>
      <div className="flex flex-wrap gap-8 items-start mt-16 max-md:mt-10 max-md:max-w-full">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default JustForYou;