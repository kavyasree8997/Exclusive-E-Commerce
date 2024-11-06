
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="flex overflow-hidden flex-col justify-center items-end px-16 py-3 w-full text-sm bg-black text-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start max-md:max-w-full">
          <div className="flex flex-wrap gap-2 items-center min-w-[240px] max-md:max-w-full">
            <div className="self-stretch my-auto w-[474px] max-md:max-w-full">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </div>
            <Link href="/wishlist" className="self-stretch my-auto font-semibold leading-6 text-center underline">
              ShopNow
            </Link>
          </div>
          <div className="flex gap-1.5 justify-center items-center whitespace-nowrap">
            <span className="self-stretch my-auto">English</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c458026ddcb4daaaca9291897ab1b8ab8e65bd1233e48db8bbc95eb90ee3e16?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="Language selector" width={24} height={24} />
          </div>
        </div>
      </div>
      <nav className="flex flex-wrap gap-10 items-center self-center mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start self-stretch my-auto text-black min-w-[240px] max-md:max-w-full">
          <Link href="/" className="text-2xl font-bold tracking-wider leading-none whitespace-nowrap w-[118px]">
            Exclusive
          </Link>
          <div className="flex gap-10 items-start text-base text-center min-w-[240px]">
            <Link href="/" className="w-12 whitespace-nowrap">Home</Link>
            <Link href="/contact" className="whitespace-nowrap w-[66px]">Contact</Link>
            <Link href="/about" className="w-12 whitespace-nowrap">About</Link>
            <Link href="/signup" className="w-[61px]">Sign Up</Link>
          </div>
        </div>
        <div className="flex gap-6 items-center self-stretch my-auto min-w-[240px]">
          <div className="flex flex-col justify-center items-center self-stretch py-2 pr-3 pl-5 my-auto text-xs text-black rounded bg-neutral-100 min-w-[240px]">
            <div className="flex gap-9 justify-center items-center">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="self-stretch my-auto opacity-50 bg-transparent outline-none"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a36546edd30f9649053810fdbf6c98d92541e863e7b8b10ab13af855343b34e?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Search icon" width={24} height={24} />
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center self-stretch my-auto">
            <Link href="/wishlist">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/850597cc14d3bfef027aa097fc5bca3ac1b650d683dc1d3c8c0134d5cd9a061d?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              alt="Wishlist icon" width={32} height={32} />
            </Link>
            <Link href="/cart">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eff2912e32682d42882b3342d012399878fbacd6f0d3fceb6a27e90576b90a5?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              alt="Cart icon" width={32} height={32} />
            </Link>
            <Link href="/account">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/505a01368e57ac667ecd551fd161eb3fa8202cee72841e5b11d9f712055e4607?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square fill-red-500"
              alt="User icon"
             width={32} height={32} />
            </Link>
          </div>
        </div>
      </nav>
      <div className="mt-4 w-full bg-black border border-black border-solid opacity-30 min-h-[1px] max-md:max-w-full" />
    </>
  );
};

export default Header;