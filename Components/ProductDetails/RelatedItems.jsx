
import React from 'react';
import WishlistContent from '../Wishlist/WishlistContent';
import JustForYou from '../Wishlist/JustForYou';

const RelatedItems = () => {
  return (
    <><JustForYou/></>
    // <div className="flex flex-col mt-36 max-md:mt-10 max-md:max-w-full">
    //   <div className="flex gap-4 items-center self-start">
    //     <div data-layername="categoryRectangle" className="flex flex-col self-stretch my-auto w-5">
    //       <div className="flex shrink-0 h-10 bg-red-500 rounded" />
    //     </div>
    //     <div data-layername="relatedItem" className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
    //       Related Item
    //     </div>
    //   </div>
    //   <div className="flex flex-wrap gap-8 items-start mt-16 max-md:mt-10 max-md:max-w-full">
    //     <div data-layername="cartWithFlatDiscount" className="flex flex-col min-w-[240px] w-[270px]">
    //       <div className="flex overflow-hidden gap-1 items-start px-3 pt-3 pb-12 max-w-full rounded bg-neutral-100 w-[270px]">
    //         <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
    //           <div data-layername="discountPercent" className="gap-2.5 self-start px-3 py-1 bg-red-500 rounded">
    //             -40%
    //           </div>
    //           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e93ad05ae04f0b54f4159cbcf6911a27cb651cbe215adedef39517dbfe9650fd?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain self-end mt-3 max-w-full aspect-[1.13] w-[172px]" alt="Product image" />
    //         </div>
    //         <div className="flex flex-col">
    //           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain aspect-square w-[34px]" alt="Wishlist icon" />
    //           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bd4aeaf0f75ee52eaf1a86b7dbd1677fcd7bf0df326c61447e0ca8c7cb5a12e?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain mt-2 aspect-square w-[34px]" alt="Quick view icon" />
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
    //         <div data-layername="havitHvG92Gamepad" className="self-stretch text-black">
    //           HAVIT HV-G92 Gamepad
    //         </div>
    //         <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
    //           <div data-layername="120" className="text-red-500">$120</div>
    //           <div data-layername="160" className="text-black opacity-50">$160</div>
    //         </div>
    //         <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
    //           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain shrink-0 aspect-[5] w-[100px]" alt="Product rating" />
    //           <div data-layername="88" className="w-8 opacity-50">(88)</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div data-layername="cartWithFlatDiscount" className="flex flex-col min-w-[240px] w-[270px]">
    //       <div className="flex overflow-hidden flex-col pt-3 max-w-full rounded bg-neutral-100 w-[270px]">
    //         <div className="flex flex-col px-3 w-full">
    //           <div className="flex gap-5 justify-between w-full">
    //             <div data-layername="discountPercent" className="gap-2.5 self-start px-3 py-1 text-xs whitespace-nowrap bg-red-500 rounded text-neutral-50">
    //               -35%
    //             </div>
    //             <div className="flex flex-col">
    //               <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain aspect-square w-[34px]" alt="Wishlist icon" />
    //             </div>
    //           </div>
    //           <div data-layername="ak90001500X5001" className="flex shrink-0 self-end h-[102px] w-[218px]" />
    //         </div>
    //         <div data-layername="addToCart" className="px-7 py-2.5 mt-14 text-base font-medium text-white bg-black rounded-none max-md:px-5 max-md:mt-10">
    //           Add To Cart
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
    //         <div data-layername="ak900WiredKeyboard" className="self-stretch text-black">
    //           AK-900 Wired Keyboard
    //         </div>
    //         <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
    //           <div data-layername="960" className="text-red-500">$960</div>
    //           <div data-layername="1160" className="text-black opacity-50">$1160</div>
    //         </div>
    //         <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
    //           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c35d903ef32712f74f1d691c7776b06b738b9c9c861a4482d47d9f9e4b9b6d4a?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain shrink-0 aspect-[5] w-[100px]" alt="Product rating" />
    //           <div data-layername="75" className="w-8 opacity-50">(75)</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div data-layername="cartWithFlatDiscount" className="flex flex-col min-w-[240px] w-[270px]">
    //       <div className="flex overflow-hidden gap-1 items-start px-3 pt-3 pb-16 max-w-full rounded bg-neutral-100 w-[270px]">
    //         <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
    //           <div data-layername="discountPercent" className="gap-2.5 self-start px-3 py-1 bg-red-500 rounded">
    //             -30%
    //           </div>
    //           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/38fb1b7c0b0c5bfee5f9ee5cae45ee04b50a3a5cfbcf29cc559cdeb284a2057a?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain self-end mt-6 max-w-full aspect-[1.32] w-[170px]" alt="Product image" />
    //         </div>
    //         <div className="flex flex-col">
    //           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain aspect-square w-[34px]" alt="Wishlist icon" />
    //           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bd4aeaf0f75ee52eaf1a86b7dbd1677fcd7bf0df326c61447e0ca8c7cb5a12e?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain mt-2 aspect-square w-[34px]" alt="Quick view icon" />
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
    //         <div data-layername="ipsLcdGamingMonitor" className="self-stretch text-black">
    //           IPS LCD Gaming Monitor
    //         </div>
    //         <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
    //           <div data-layername="370" className="text-red-500">$370</div>
    //           <div data-layername="400" className="text-black opacity-50">$400</div>
    //         </div>
    //         <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
    //           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain shrink-0 aspect-[5] w-[100px]" alt="Product rating" />
    //           <div data-layername="99" className="w-8 opacity-50">(99)</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div data-layername="cart" className="flex flex-col text-base font-medium min-w-[240px] w-[270px]">
    //       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f9cef694ffcf7501a96b0aa76cc799d6c1e90afd4ba6497f689f36be8755cc1?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain max-w-full aspect-[1.08] w-[270px]" alt="Product image" />
    //       <div className="flex flex-col items-start self-start mt-4">
    //         <div data-layername="rgbLiquidCpuCooler" className="self-stretch text-black">
    //           RGB liquid CPU Cooler
    //         </div>
    //         <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
    //           <div data-layername="160" className="text-red-500">$160</div>
    //           <div data-layername="170" className="text-black opacity-50">$170</div>
    //         </div>
    //         <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
    //           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bb1a3bbee2aa31227f9db7ea51037aef898288517bc41fc65129b813880af60?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" className="object-contain shrink-0 aspect-[5] w-[100px]" alt="Product rating" />
    //           <div data-layername="65" className="w-8 opacity-50">(65)</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RelatedItems;