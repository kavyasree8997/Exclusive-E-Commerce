
import React from 'react';
import Link from 'next/link';
const ProfileEditor = () => {
  return (
    <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col px-20 py-10 mx-auto w-full text-base bg-white rounded shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-start text-xl font-medium leading-snug text-red-500">
          Edit Your Profile
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-4 text-black max-md:max-w-full">
          <div className="flex flex-col min-w-[240px] w-[330px]">
            <div>First Name</div>
            <div className="flex flex-col mt-2 max-w-full whitespace-nowrap w-[330px]">
              <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 rounded bg-neutral-100 max-md:pr-5">
                <div className="opacity-50"><input
                type="text"
                placeholder="Md"
                className="self-stretch w-full my-auto opacity-none bg-transparent outline-none"
              /></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col min-w-[240px] w-[330px]">
            <div>Last Name</div>
            <div className="flex flex-col mt-2 max-w-full whitespace-nowrap w-[330px]">
              <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 rounded bg-neutral-100 max-md:pr-5">
                <div className="opacity-50"><input
                type="text"
                placeholder="Rimel"
                className="self-stretch w-full my-auto opacity-none bg-transparent outline-none"
              /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-6 text-black max-md:max-w-full">
          <div className="flex flex-col whitespace-nowrap min-w-[240px] w-[330px]">
            <div>Email</div>
            <div className="flex flex-col mt-2 max-w-full w-[330px]">
              <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 rounded bg-neutral-100 max-md:pr-5">
                <div className="opacity-50">
                  <input
                type="text"
                placeholder="rimel1111@gmail.com"
                className="self-stretch w-full my-auto opacity-none bg-transparent outline-none"
              />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col min-w-[240px] w-[330px]">
            <div className="flex flex-col min-w-[240px] w-[330px]">
            <div>Address</div>
            <div className="flex flex-col mt-2 max-w-full w-[330px]">
              <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 rounded bg-neutral-100 max-md:pr-5">
                <div className="opacity-50">
                  <input
                type="text"
                placeholder="Kingston, 5236, United State"
                className="self-stretch w-full my-auto opacity-none bg-transparent outline-none"
              />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6 text-black max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[710px]">
            <div>Password Changes</div>
            <div className="flex flex-col mt-2 w-full">
              <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 rounded bg-neutral-100 max-md:pr-5 max-md:max-w-full">
                <div className="opacity-50">
                  <input
                type="password"
                placeholder="Current Password"
                className="self-stretch w-full my-auto opacity-none bg-transparent outline-none"
              />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 max-w-full w-[710px]">
            <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 rounded bg-neutral-100 max-md:pr-5 max-md:max-w-full">
              <div className="opacity-50">
                <input
                type="password"
                placeholder="New Password"
                className="self-stretch w-full my-auto opacity-none bg-transparent outline-none"
              />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 max-w-full w-[710px]">
            <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-3.5 rounded bg-neutral-100 max-md:pr-5 max-md:max-w-full">
              <div className="opacity-50">
                <input
                type="text"
                placeholder="Confirm New Password"
                className="self-stretch w-full my-auto opacity-none bg-transparent outline-none"
              />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center self-end mt-6">
          <Link href='/error'><div className="self-stretch my-auto text-black">Cancel</div></Link>
          <Link href='/error'><div className="gap-2.5 self-stretch px-12 py-4 my-auto font-medium bg-red-500 rounded text-neutral-50 max-md:px-5">
            Save Changes
          </div></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileEditor;