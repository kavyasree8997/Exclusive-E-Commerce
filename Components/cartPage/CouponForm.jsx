
import React, { useState } from 'react';

const CouponForm = () => {
  const [coupon, setCoupon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Applying coupon:', coupon);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        placeholder="Coupon Code"
        className="px-4 py-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-red-500 text-white rounded"
      >
        Apply Coupon
      </button>
    </form>
  );
};

export default CouponForm;