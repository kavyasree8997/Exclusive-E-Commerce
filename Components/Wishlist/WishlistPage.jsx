import React from 'react';
import WishlistContent from './WishlistContent';
import JustForYou from './JustForYou';
import Header from '../Headers/Header';
import Footer from '../Headers/Footer';

const WishlistPage = () => {
  return (
    <div>
    <div className="flex overflow-hidden flex-col items-start pr-20 bg-white max-md:pr-5">
      <Header />
    </div>
    <div className="flex overflow-hidden flex-col bg-white">
      <WishlistContent />
      <JustForYou />
    </div>
    <div><Footer /></div>
    </div>
  );
};

export default WishlistPage;