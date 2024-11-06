
import React from 'react';
import Link from 'next/link';
const AccountSidebar = () => {
  return (
    <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start text-base font-medium text-black max-md:mt-10">
        <div>Manage My Account</div>
        <div className="flex flex-col self-end mt-4">
          <Link href = '/account'><div className="text-red-500">My Profile</div></Link>
          <Link href = '/error'><div className="mt-2 opacity-50">Address Book</div></Link>
          <Link href = '/error'><div className="mt-2 opacity-50">My Payment Options</div></Link>
        </div>
        <div className="mt-6">My Orders</div>
        <div className="flex flex-col self-center mt-4">
          <Link href = '/error'><div className="opacity-50">My Returns</div></Link>
          <Link href = '/error'><div className="mt-2 opacity-50">My Cancellations</div></Link>
        </div>
        <Link href='/wishlist'><div className="mt-4">My WishList</div></Link>
      </div>
    </div>
  );
};

export default AccountSidebar;