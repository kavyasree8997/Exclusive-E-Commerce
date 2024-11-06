import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px]">
      <div className="flex flex-col max-w-full w-[370px]">
        <div className="flex flex-col self-start text-black">
          <div className="text-4xl font-medium tracking-widest leading-none">
            Log in to Exclusive
          </div>
          <div className="mt-6 text-base">Enter your details below</div>
        </div>
        <div className="flex flex-col mt-12 w-full max-md:mt-10">
          <div className="flex flex-col w-full">
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
            <div className="text-base text-black opacity-none">
              <input
                type="text"
                placeholder="Password"
                className="self-stretch w-full my-auto opacity-none bg-transparent outline-none"
              />
            </div>
            <div className="flex flex-col mt-2 w-full">
              <div className="shrink-0 h-px bg-black border border-black border-solid" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 items-center mt-10 text-base">
        <div className="flex flex-col self-stretch my-auto font-medium text-neutral-50">
          <Link href ='/error'><button>
            <div className="gap-2.5 self-stretch px-12 py-4 bg-red-500 rounded max-md:px-5">
            Log In
          </div></button></Link>
          
        </div>
        <Link href='/error'><div className="self-stretch my-auto text-red-500">Forget Password?</div></Link>
      </div>
    </div>
  );
};

export default LoginForm;