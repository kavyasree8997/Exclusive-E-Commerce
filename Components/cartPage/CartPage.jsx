
import React from 'react';
import CartContent from './CartContent';
import Header from '../Headers/Header';
import Footer from '../Headers/Footer';

const CartPage = () => {
  return (
    <div>
    <div className="flex overflow-hidden flex-col items-start pr-20 bg-white max-md:pr-5">
      <Header />
    </div>
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow ml-20">
        <CartContent />
      </main>
    </div>
    <div><Footer /></div>
    </div>
  );
};

export default CartPage;