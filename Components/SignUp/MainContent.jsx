
import React from 'react';
import Link from 'next/link';
import Header from '../Headers/Header';
import Footer from '../Headers/Footer';

const MainContent = () => {
  return (
    <div>
    <div className="flex overflow-hidden flex-col items-start pr-20 bg-white max-md:pr-5">
      <Header />
    </div>
    <div className="flex flex-wrap gap-10 items-center justify-center self-start mt-14 max-md:mt-10 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col self-stretch pt-20 my-auto rounded-none bg-slate-300 min-w-[240px] w-[805px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ff408ee612dbb33d2f787373e344b420b1316185128daa899473c17b86d4a35?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
          className="object-contain w-full aspect-[1.14] max-md:max-w-full"
          alt="Side image"
        />
      </div>
      <div className="flex flex-col self-stretch my-auto min-w-[240px]">
        <div className="flex flex-col self-start text-black">
          <div className="text-4xl font-medium tracking-widest leading-none">
            Create an account
          </div>
          <div className="mt-6 text-base">Enter your details below</div>
        </div>
        <div className="flex flex-col items-center mt-12 max-md:mt-10">
          <div className="flex flex-col max-w-full w-[370px]">
            <div className="flex flex-col w-full">
              <div className="text-base text-black opacity-none">
                <input
                type="text"
                placeholder="Name"
                className="self-stretch w-full my-auto opacity-none bg-transparent outline-none"
              /></div>
              <div className="flex flex-col mt-2 w-full">
                <div className="shrink-0 h-px bg-black border border-black border-solid" />
              </div>
            </div>
            <div className="flex flex-col mt-10 w-full">
              <div className="text-base text-black opacity-none">
                <input
                type="text"
                placeholder="Email or Phone Number"
                className="self-stretch w-full my-auto opacity-none bg-transparent outline-none"
              />
              </div>
              <div className="flex flex-col mt-2 w-full">
                <div className="shrink-0 h-px bg-black border border-black border-solid" />
              </div>
            </div>
            <div className="flex flex-col mt-10 w-full">
              <div className="text-base text-black opacity-none"><input
                type="text"
                placeholder="Password"
                className="self-stretch w-full my-auto opacity-none bg-transparent outline-none"
              /></div>
              <div className="flex flex-col mt-2 w-full">
                <div className="shrink-0 h-px bg-black border border-black border-solid" />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 text-base">
            <Link href='/error'><button><div className="gap-2.5 self-stretch px-32 py-4 font-medium bg-red-500 rounded text-neutral-50 max-md:px-5">
              Create Account
            </div></button></Link>
            
            <div className="flex flex-col items-center mt-4 text-black">
              <div className="flex flex-col justify-center px-20 py-4 rounded border border-solid border-black border-opacity-40 max-md:px-5">
                <Link href = '/error'><button>
                  <div className="flex gap-4 items-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfc48861a293f3e966c70371e91c50124fe1ba56c4f67f8481c70033d59d2c64?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                    className="object-contain shrink-0 w-6 aspect-square"
                    alt="Google icon"
                  />
                  <div>Sign up with Google</div>
                </div>
                </button></Link>
                
              </div>
              <div className="flex gap-4 items-center mt-8">
                <div className="self-stretch my-auto opacity-70">
                  Already have account?
                </div>
                <div className="flex flex-col self-stretch my-auto font-medium w-[47px]">
                  <div className="opacity-70"><Link href="/login">Log in</Link></div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eea1fdbb2df9bcc15eb27995b4c98845aba8c3cf8f59aa871e92696b89d13a96?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                    className="object-contain mt-1 aspect-[47.62] w-[47px]"
                    alt="Login indicator"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div><Footer /></div>
    </div>
  );
};

export default MainContent;