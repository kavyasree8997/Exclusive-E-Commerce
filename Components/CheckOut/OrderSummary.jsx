
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OrderSummary = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start mt-8 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-end text-base max-md:max-w-full">
          <div className="flex gap-6 items-center max-md:max-w-full">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ef510b12c0bdbd71683ed3f0134b4f59ce3d3b124d6b4f0f7a3cdb0e6f2c7cb?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" alt="LCD Monitor" width={54} height={54} />
            <div className="flex gap-10 items-center self-stretch my-auto min-w-[240px]">
              <span className="self-stretch my-auto text-black">LCD Monitor</span>
              <span className="self-stretch my-auto text-black">$650</span>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-8 max-md:max-w-full">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ef510b12c0bdbd71683ed3f0134b4f59ce3d3b124d6b4f0f7a3cdb0e6f2c7cb?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0" alt="H1 Gamepad" width={54} height={54} />
            <div className="flex gap-10 items-center self-stretch my-auto min-w-[240px]">
              <span className="self-stretch my-auto text-black">H1 Gamepad</span>
              <span className="self-stretch my-auto text-black">$1100</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 max-w-full w-[422px]">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full max-w-[422px] max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex justify-between items-start text-base text-black whitespace-nowrap max-md:max-w-full">
                  <span>Subtotal:</span>
                  <span>$1750</span>
                </div>
                <div className="mt-4 h-px bg-black border-t border-black max-md:max-w-full" />
              </div>
              <div className="flex justify-between items-start mt-4 text-base text-black whitespace-nowrap max-md:max-w-full">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
            </div>
            <div className="mt-4 h-px bg-black border-t border-black max-md:max-w-full" />
          </div>
          <div className="flex justify-between items-start mt-4 text-base text-black whitespace-nowrap max-md:max-w-full">
            <span>Total:</span>
            <span>$1750</span>
          </div>
        </div>
        <div className="flex gap-10 items-center mt-8 max-md:max-w-full">
          <div className="flex gap-4 items-start self-stretch my-auto">
            <input type="radio" id="bank" name="paymentMethod" className="mt-1" />
            <label htmlFor="bank" className="text-base text-black">Bank</label>
          </div>
          <div className="flex gap-2 items-start self-stretch my-auto">
            {['visa', 'mastercard', 'maestro', 'discover'].map((card) => (
              <Image key={card} src={`/images/${card}.png`} alt={card} width={42} height={28} />
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-start mt-8">
          <input type="radio" id="cashOnDelivery" name="paymentMethod" className="mt-1" />
          <label htmlFor="cashOnDelivery" className="text-base text-black">Cash on delivery</label>
        </div>
        <div className="flex flex-wrap gap-4 items-end self-stretch mt-8 text-base max-md:max-w-full">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 text-black rounded border border-black border-solid min-w-[240px] w-[300px] max-md:px-5"
          />
          <Link href ='/checkout'><button className="gap-2.5 self-stretch px-12 py-4 font-medium bg-red-500 rounded text-neutral-50 max-md:px-5">
            Apply Coupon
          </button></Link>
        </div>
        <Link href = '/error'><button className="gap-2.5 self-stretch px-12 py-4 mt-8 text-base font-medium bg-red-500 rounded text-neutral-50 max-md:px-5 w-full">
          Place Order
        </button></Link>
      </div>
    </div>
  );
};

export default OrderSummary;