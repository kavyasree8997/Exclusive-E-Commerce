
import React from 'react';

export default function FlashSales() {
  return (
    <div className="flex flex-col mt-36 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-end self-start max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-end min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col h-[103px]">
            <div className="flex gap-4 items-center self-start">
              <div className="flex flex-col self-stretch my-auto w-5">
                <div className="flex shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <div className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
                Today's
              </div>
            </div>
            <div className="mt-6 text-4xl font-semibold tracking-widest leading-none text-black">
              Flash Sales
            </div>
          </div>
          <div className="flex gap-4 text-black whitespace-nowrap min-w-[240px] w-[302px]">
            <div className="flex flex-col min-h-[50px]">
              <div className="text-xs font-medium">Days</div>
              <div className="mt-1 text-3xl font-bold tracking-widest leading-none">
                03
              </div>
            </div>
            <div className="flex self-end mt-7 min-h-[16px]" />
            <div className="flex flex-col h-[50px]">
              <div className="text-xs font-medium">Hours</div>
              <div className="mt-1 text-3xl font-bold tracking-widest leading-none">
                23
              </div>
            </div>
            <div className="flex self-end mt-7 min-h-[16px]" />
            <div className="flex flex-col min-h-[50px]">
              <div className="text-xs font-medium">Minutes</div>
              <div className="mt-1 text-3xl font-bold tracking-widest leading-none">
                19
              </div>
            </div>
            <div className="flex self-end mt-7 min-h-[16px]" />
            <div className="flex flex-col h-[50px]">
              <div className="text-xs font-medium">Seconds</div>
              <div className="mt-1 text-3xl font-bold tracking-widest leading-none">
                56
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d46c131187bfff9eb633481579a064341b51d7196040ee40dd3f9577e445a5e?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
            className="object-contain shrink-0 aspect-square w-[46px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88e31fcac886e936832d43b7fb2b7a3e219274da66d8e9d07a08a6cc7094c1b?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
            className="object-contain shrink-0 aspect-square w-[46px]"
          />
        </div>
      </div>
      <div className="flex overflow-x-auto gap-8 items-start mt-10 w-full">
        <div className="flex flex-col min-w-[240px] w-[270px]">
          <div className="flex overflow-hidden gap-1 items-start px-3 pt-3 pb-12 max-w-full rounded bg-neutral-100 w-[270px]">
            <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
              <div className="gap-2.5 self-start px-3 py-1 bg-red-500 rounded">
                -40%
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e93ad05ae04f0b54f4159cbcf6911a27cb651cbe215adedef39517dbfe9650fd?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain self-end mt-3 max-w-full aspect-[1.13] w-[172px]"
              />
            </div>
            <div className="flex flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain aspect-square w-[34px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bd4aeaf0f75ee52eaf1a86b7dbd1677fcd7bf0df326c61447e0ca8c7cb5a12e?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain mt-2 aspect-square w-[34px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
            <div className="self-stretch text-black">HAVIT HV-G92 Gamepad</div>
            <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
              <div className="text-red-500">$120</div>
              <div className="text-black opacity-50">$160</div>
            </div>
            <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain shrink-0 aspect-[5] w-[100px]"
              />
              <div className="w-8 opacity-50">(88)</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[240px] w-[270px]">
          <div className="flex overflow-hidden flex-col pt-3 max-w-full rounded bg-neutral-100 w-[270px]">
            <div className="flex flex-col px-3 w-full">
              <div className="flex gap-5 justify-between w-full">
                <div className="gap-2.5 self-start px-3 py-1 text-xs whitespace-nowrap bg-red-500 rounded text-neutral-50">
                  -35%
                </div>
                <div className="flex flex-col">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                    className="object-contain aspect-square w-[34px]"
                  />
                </div>
              </div>
              <div className="flex shrink-0 self-end h-[102px] w-[219px]" />
            </div>
            <div className="px-7 py-2.5 mt-14 text-base font-medium text-white bg-black rounded-none max-md:px-5 max-md:mt-10">
              Add To Cart
            </div>
          </div>
          <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
            <div className="self-stretch text-black">AK-900 Wired Keyboard</div>
            <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
              <div className="text-red-500">$960</div>
              <div className="text-black opacity-50">$1160</div>
            </div>
            <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c35d903ef32712f74f1d691c7776b06b738b9c9c861a4482d47d9f9e4b9b6d4a?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain shrink-0 aspect-[5] w-[100px]"
              />
              <div className="w-8 opacity-50">(75)</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[240px] w-[270px]">
          <div className="flex overflow-hidden gap-1 items-start px-3 pt-3 pb-16 max-w-full rounded bg-neutral-100 w-[270px]">
            <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
              <div className="gap-2.5 self-start px-3 py-1 bg-red-500 rounded">
                -30%
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/38fb1b7c0b0c5bfee5f9ee5cae45ee04b50a3a5cfbcf29cc559cdeb284a2057a?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain self-end mt-6 max-w-full aspect-[1.32] w-[170px]"
              />
            </div>
            <div className="flex flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain aspect-square w-[34px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bd4aeaf0f75ee52eaf1a86b7dbd1677fcd7bf0df326c61447e0ca8c7cb5a12e?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain mt-2 aspect-square w-[34px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
            <div className="self-stretch text-black">IPS LCD Gaming Monitor</div>
            <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
              <div className="text-red-500">$370</div>
              <div className="text-black opacity-50">$400</div>
            </div>
            <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain shrink-0 aspect-[5] w-[100px]"
              />
              <div className="w-8 opacity-50">(99)</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[240px] w-[270px]">
          <div className="flex overflow-hidden gap-5 justify-between items-start px-3 pt-3 pb-9 w-full rounded bg-neutral-100 max-w-[270px]">
            <div className="flex gap-3.5 items-start text-xs whitespace-nowrap text-neutral-50">
              <div className="gap-2.5 self-start px-3 py-1 bg-red-500 rounded">
                -25%
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e3fa4e823535c56b66e939b98c8a904352198ab013849f3cad68fd370f6bcda?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain shrink-0 self-end mt-6 max-w-full aspect-[0.59] w-[107px]"
              />
            </div>
            <div className="flex flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain aspect-square w-[34px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bd4aeaf0f75ee52eaf1a86b7dbd1677fcd7bf0df326c61447e0ca8c7cb5a12e?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain mt-2 aspect-square w-[34px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
            <div className="self-stretch text-black">S-Series Comfort Chair </div>
            <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
              <div className="text-red-500">$375</div>
              <div className="text-black opacity-50">$400</div>
            </div>
            <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbd94c537fb01aba7986fa7a637ddfbd1ecca627a8a5158693ed9b446d50624d?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain shrink-0 aspect-[5] w-[100px]"
              />
              <div className="w-8 opacity-50">(99)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-2.5 self-center px-12 py-4 mt-16 ml-20 text-base font-medium bg-red-500 rounded text-neutral-50 max-md:px-5 max-md:mt-10">
        View All Products
      </div>
    </div>
  );
}