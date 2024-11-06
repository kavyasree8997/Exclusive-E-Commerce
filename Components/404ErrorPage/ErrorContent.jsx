
import React from 'react';
import Link from 'next/link';

const ErrorContent = () => {
  return (
    <div className="flex flex-col justify-center mt-20 ml-32 w-full max-w-[1000px] max-md:mt-10 max-md:max-w-full">
      <div data-layername="roadmap" className="flex gap-3 items-center self-start text-sm text-black">
        <div data-layername="account" className="self-stretch my-auto opacity-50">
          Home
        </div>
        <div  data-layername="nothing" className="self-stretch my-auto">/</div>
        <div data-layername="nothing" className="self-stretch my-auto">
          404 Error
        </div>
      </div>
      <div className="flex flex-col items-center self-end mt-36 max-md:mt-10 max-md:max-w-full">
        <div data-layername="404NotFound" className="text-8xl font-medium leading-none text-black tracking-[3.3px] max-md:max-w-full max-md:text-4xl">
          404 Not Found
        </div>
        <div data-layername="yourVisitedPageNotFoundYouMayGoHomePage" className="mt-10 text-base text-black max-md:max-w-full">
          Your visited page not found. You may go home page.
        </div>
      </div>
      <Link href="/" data-layername="button" className="gap-2.5 self-center px-12 py-4 mt-20 ml-16 text-base font-medium bg-red-500 rounded text-neutral-50 max-md:px-5 max-md:mt-10">
        Back to home page
      </Link>
    </div>
  );
};

export default ErrorContent;