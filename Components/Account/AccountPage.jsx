
import React from 'react';
import Header from '../Headers/Header';
import Footer from '../Headers/Footer';
import ProfileEditor from './ProfileEditor';
import AccountSidebar from './AccountSidebar';

const AccountPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <div className="flex flex-wrap gap-10 self-center mt-20 w-full text-sm max-w-[1170px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-1 gap-3 items-center text-black">
          <div className="self-stretch my-auto opacity-50">Home</div>
          <div className="self-stretch my-auto">My Account</div>
        </div>
        <div className="leading-5 text-red-500">
          Welcome! <span className="text-red-500">Md Rimel</span>
        </div>
      </div>
      <div className="self-center mt-20 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <AccountSidebar />
          <ProfileEditor />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountPage;