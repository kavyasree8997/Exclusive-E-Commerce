
import React from 'react';
import Link from 'next/link';

const CartTotal = ({ cartItems }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0; // Assuming free shipping
  const total = subtotal + shipping;

  return (
    <div className="w-full md:w-[470px] border-2 border-black rounded p-6">
      <h2 className="text-xl font-medium mb-4">Cart Total</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-200 my-2" />
      <div className="flex justify-between mb-2">
        <span>Shipping:</span>
        <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
      </div>
      <div className="border-t border-gray-200 my-2" />
      <div className="flex justify-between mb-4">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <Link
        href="/checkout"
        className="block w-full text-center px-6 py-3 bg-red-500 text-white rounded"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartTotal;