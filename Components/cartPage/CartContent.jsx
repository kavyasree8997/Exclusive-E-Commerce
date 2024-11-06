'use client';
import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import CartItem from './CartItem';
import CouponForm from './CouponForm';
import CartTotal from './CartTotal';

const CartContent = () => {
  const cartItems = [
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ef510b12c0bdbd71683ed3f0134b4f59ce3d3b124d6b4f0f7a3cdb0e6f2c7cb?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" },
    { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ef510b12c0bdbd71683ed3f0134b4f59ce3d3b124d6b4f0f7a3cdb0e6f2c7cb?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm text-black mb-8">
        <Link href="/" className="opacity-50">Home</Link>
        <span className="mx-2">/</span>
        <span>Cart</span>
      </div>
      <div className="bg-white rounded shadow-sm p-6 mb-8">
        <div className="grid grid-cols-4 gap-4 text-base font-medium text-black mb-4">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex flex-wrap justify-between gap-4 mb-8 mr-40">
        <Link href="/" className="px-6 py-2 border border-black text-black rounded">
          Return To Shop
        </Link>
        <Link href='/wishlist'><button className="px-6 py-2 border border-black text-black rounded">
          Update Cart
        </button>
        </Link>
      </div>
      <div className="flex w-full h-52 flex-wrap justify-between gap-4 mb-8 mr-40">
        <div>
        <CouponForm className=" flex"/></div>
        <CartTotal cartItems={cartItems} />
      </div>
      
    </div>
  );
};

export default CartContent;