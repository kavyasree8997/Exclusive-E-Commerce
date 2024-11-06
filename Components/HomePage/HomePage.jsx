import React from 'react';
import Header from '../Headers/Header';
import FlashSales from './FlashSales';
import Categories from './Categories';
import BestSelling from './BestSelling';
import ExploreProducts from './ExploreProducts';
import NewArrival from './NewArrival';
import Services from './Services';
import Footer from '../Headers/Footer';

export default function HomePage() {
  return (
    <div className="flex overflow-hidden flex-col items-start pr-20 bg-white max-md:pr-5">
      <Header />
      <div className="flex flex-col ml-32 w-full max-w-[1308px] max-md:max-w-full">
        <FlashSales />
        <Categories />
        <BestSelling />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df6ac03ddfea8c230a9930e390a638ce1ab1abb6377bcd7761859019e109c730?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
          className="object-contain mt-36 w-full aspect-[2.34] max-md:mt-10 max-md:max-w-full"
        />
        <ExploreProducts />
        <NewArrival />
        <Services />
      </div>
      <Footer />
    </div>
  );
}