
import React from 'react';
import Image from 'next/image';

const CartItem = ({ item }) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center border-t border-gray-200 py-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} width={80} height={80} className="rounded" />
        <span>{item.name}</span>
      </div>
      <div>${item.price.toFixed(2)}</div>
      <div>
        <input
          type="number"
          value={item.quantity}
          min="1"
          className="w-16 p-2 border border-gray-300 rounded"
          onChange={() => {}}
        />
      </div>
      <div>${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;