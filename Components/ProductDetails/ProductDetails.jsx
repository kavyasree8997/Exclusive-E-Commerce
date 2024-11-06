
import React from 'react';
import Header from '../Headers/Header';
import Footer from '../Headers/Footer';
import ProductInfo from './ProductInfo';
import RelatedItems from './RelatedItems';

const ProductDetails = () => {
  return (
    <div>
    <div className="flex overflow-hidden flex-col items-start pr-20 bg-white max-md:pr-5"><Header /></div>
    <div data-layername="productDetailsPage" className="flex overflow-hidden flex-col pb-32 bg-white max-md:pb-24">
      <div className="flex flex-col self-center mt-20 w-full max-w-[1171px] max-md:mt-10 max-md:max-w-full">
        <div data-layername="roadmap" className="flex gap-3 items-center self-start text-sm text-black">
          <div data-layername="account" className="self-stretch my-auto opacity-50">Account</div>
          <div data-layername="nothing" className="self-stretch my-auto opacity-50">Gaming</div>
          <div data-layername="nothing" className="self-stretch my-auto">Havic HV G-92 Gamepad</div>
        </div>
        <ProductInfo />
        </div>
        <RelatedItems />
      
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;