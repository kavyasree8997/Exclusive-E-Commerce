
import React from 'react';
import Header from '../Headers/Header';
import BillingDetails from './BillingDetails';
import OrderSummary from './OrderSummary';
import Footer from '../Headers/Footer';

const CheckoutPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <div className="flex flex-col items-start self-center mt-20 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-3 items-center text-sm text-black">
          <span className="opacity-50">Account</span>
          <span className="opacity-50">My Account</span>
          <span className="opacity-50">Product</span>
          <span className="opacity-50">View Cart</span>
          <span>CheckOut</span>
        </div>
        <h1 className="mt-20 text-4xl font-medium tracking-widest leading-none text-black max-md:mt-10">
          Billing Details
        </h1>
        <div className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <BillingDetails />
            <OrderSummary />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;