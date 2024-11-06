
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex overflow-hidden flex-col justify-end pt-20 pb-6 mt-36 w-full bg-black max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-center items-start self-center max-md:max-w-full">
        <div className="flex flex-col text-neutral-50 w-[217px]">
          <div className="flex flex-col self-start">
            <div className="flex flex-col max-w-full whitespace-nowrap w-[118px]">
              <div className="w-full text-2xl font-bold tracking-wider leading-none">
                Exclusive
              </div>
              <div className="mt-6 text-xl font-medium leading-snug">
                Subscribe
              </div>
            </div>
            <div className="mt-6 text-base">
              Get 10% off your first order
            </div>
          </div>
          <div className="flex gap-8 items-center py-3 pl-4 mt-4 max-w-full text-base rounded border-solid border-[1.5px] border-neutral-50 w-[217px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="self-stretch my-auto opacity-40 bg-transparent outline-none"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/468464871fce926652b7303aac282ac4dbf6184eef5a01cf9aff040fa270dc64?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="Send email icon" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-col text-neutral-50 w-[175px]">
          <div className="text-xl font-medium leading-snug">
            Support
          </div>
          <div className="flex flex-col mt-6 max-w-full text-base w-[175px]">
            <div className="leading-6">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </div>
            <div className="mt-4">exclusive@gmail.com</div>
            <div className="mt-4">+88015-88888-9999</div>
          </div>
        </div>
        <div className="flex flex-col text-neutral-50">
          <div className="text-xl font-medium leading-snug">
            Account
          </div>
          <div className="flex flex-col mt-6 text-base">
            <Link href="/account">My Account</Link>
            <Link href="/login" className="mt-4">Login / Register</Link>
            <Link href="/cart" className="mt-4">Cart</Link>
            <Link href="/wishlist" className="mt-4">Wishlist</Link>
            <Link href="/error" className="mt-4">Shop</Link>
          </div>
        </div>
        <div className="flex flex-col text-neutral-50">
          <div className="text-xl font-medium leading-snug">
            Quick Link
          </div>
          <div className="flex flex-col mt-6 text-base">
            <Link href="/error">Privacy Policy</Link>
            <Link href="/error" className="mt-4">Terms Of Use</Link>
            <Link href="/error" className="mt-4">FAQ</Link>
            <Link href="/error" className="mt-4">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-xl font-medium leading-snug text-neutral-50">
              Download App
            </div>
            <div className="flex flex-col mt-6">
              <div className="text-xs font-medium opacity-70 text-neutral-50">
                Save $3 with App New User Only
              </div>
              <div className="flex gap-2 items-center mt-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5440fda2301de4db42cb3b78ea9e454c8a6e45def7b4a78502c73f2e432adfbb?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                  className="object-contain shrink-0 self-stretch my-auto w-20 aspect-square"
                  alt="QR code" width={80} height={80} />
                <div className="flex flex-col self-stretch my-auto w-[110px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df59572eb8c812f019934d33ba52be08e637c623b1c2c4343e086e5a6869b3c4?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                    className="object-contain max-w-full aspect-[2.75] w-[110px]"
                    alt="Google Play Store" width={110} height={40} />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c8569b4d912f2f0d95c365e51f1f979a971234e5fa2a900f3797efb56a7b34?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                    className="object-contain mt-1 max-w-full aspect-[2.75] w-[110px]"
                    alt="Apple App Store" width={110} height={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-start self-start mt-6">
            <Link href="https://facebook.com">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 w-6 aspect-square"
              alt="Facebook icon" width={24} height={24} />
            </Link>
            <Link href="https://twitter.com">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32824ff49dabfc2c10e55207d08b865eed97bdba82ad242d08a79977db494fe2?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 w-6 aspect-square"
              alt="Twitter icon" width={24} height={24} />
            </Link>
            <Link href="https://instagram.com">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 w-6 aspect-square"
              alt="Instagram icon"width={24} height={24} />
            </Link>
            <Link href="https://linkedin.com">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/017f03fd6271e23e94e189db8506f53ec67e53623ecac07e20b0cc0e64aa481c?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 w-6 aspect-square"
              alt="LinkedIn icon" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="w-full bg-white border border-white border-solid opacity-40 min-h-[1px] max-md:max-w-full" />
        </div>
        <div className="flex gap-3 items-center mt-4 text-base text-white">
          <div className="flex gap-1.5 items-center self-stretch my-auto min-w-[240px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb6da16b7a3e26ee0f1965c9846f29beccfd0f73260e21c8fd0adb096a859e61?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt="Copyright icon" width={20} height={20} />
            <div className="self-stretch my-auto">
              Copyright Rimel 2022. All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;