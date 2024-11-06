
import React from 'react';

export default function ExploreProducts() {
  return (
    <div className="flex flex-col items-center mt-16 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-end max-md:max-w-full">
          <div className="flex flex-col min-w-[240px]">
            <div className="flex gap-4 items-center self-start">
              <div className="flex flex-col self-stretch my-auto w-5">
                <div className="flex shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <div className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
                Our Products
              </div>
            </div>
            <div className="mt-5 text-4xl font-semibold tracking-widest leading-none text-black">
              Explore Our Products
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
        <div className="flex flex-col mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
            <div className="flex flex-col min-w-[240px] w-[270px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7272b94495f02911cf86a24ba570da9ee6d8d8a559bdf8fbf5a2367b697e46f?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain max-w-full aspect-[1.08] w-[270px]"
              />
              <div className="flex flex-col self-start mt-4">
                <div className="text-base font-medium text-black">Breed Dry Dog Food</div>
                <div className="flex gap-2 items-center mt-2 whitespace-nowrap">
                  <div className="gap-3 self-stretch my-auto text-base font-medium text-red-500">
                    $100
                  </div>
                  <div className="flex gap-2 items-start self-stretch my-auto text-sm font-semibold text-black">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5959a135433b538e23679e77422b3d816e56dd82cae6866c502d00ccf1435149?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                      className="object-contain shrink-0 aspect-[5] w-[100px]"
                    />
                    <div className="w-8 opacity-50">(35)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[240px] w-[270px]">
              <div className="flex overflow-hidden flex-col pt-3 w-full rounded bg-neutral-100 max-w-[270px]">
                <div className="flex gap-5 items-start self-end max-md:mr-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9170071e3daa89b6799f0d14f0342b75a9776f989a852592d8f39e9178cf47ff?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                    className="object-contain shrink-0 mt-3 max-w-full aspect-[0.9] w-[146px]"
                  />
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
                <div className="px-7 py-2.5 mt-6 text-base font-medium text-white bg-black rounded-none max-md:px-5">
                  Add To Cart
                </div>
              </div>
              <div className="flex flex-col self-start mt-4">
                <div className="text-base font-medium text-black">CANON EOS DSLR Camera</div>
                <div className="flex gap-2 items-center self-start mt-2 whitespace-nowrap">
                  <div className="gap-3 self-stretch my-auto text-base font-medium text-red-500">
                    $360
                  </div>
                  <div className="flex gap-2 items-start self-stretch my-auto text-sm font-semibold text-black">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c35d903ef32712f74f1d691c7776b06b738b9c9c861a4482d47d9f9e4b9b6d4a?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                      className="object-contain shrink-0 aspect-[5] w-[100px]"
                    />
                    <div className="w-8 opacity-50">(95)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[240px] w-[270px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/270215a195fd694cff5823e939e8a62e6cc215a660333c83068e775e5a041fcb?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain max-w-full aspect-[1.08] w-[270px]"
              />
              <div className="flex flex-col self-start mt-4">
                <div className="text-base font-medium text-black">ASUS FHD Gaming Laptop</div>
                <div className="flex gap-2 items-center self-start mt-2 whitespace-nowrap">
                  <div className="gap-3 self-stretch my-auto text-base font-medium text-red-500">
                    $700
                  </div>
                  <div className="flex gap-2 items-start self-stretch my-auto text-sm font-semibold text-black">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                      className="object-contain shrink-0 aspect-[5] w-[100px]"
                    />
                    <div className="w-10 opacity-50">(325)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[240px] w-[270px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fa36d1bac14980ecf8c1d5a6ac31cedd0ad2aafab447e2bd9f75f9d628e46f1?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain max-w-full aspect-[1.08] w-[270px]"
              />
              <div className="flex flex-col self-start mt-4">
                <div className="text-base font-medium text-black">Curology Product Set </div>
                <div className="flex gap-2 items-center mt-2 whitespace-nowrap">
                  <div className="gap-3 self-stretch my-auto text-base font-medium text-red-500">
                    $500
                  </div>
                  <div className="flex gap-2 items-start self-stretch my-auto text-sm font-semibold text-black">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c35d903ef32712f74f1d691c7776b06b738b9c9c861a4482d47d9f9e4b9b6d4a?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                      className="object-contain shrink-0 aspect-[5] w-[100px]"
                    />
                    <div className="w-10 opacity-50">(145)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 items-start mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col min-w-[240px] w-[270px]">
              <div className="flex overflow-hidden items-start px-3 pt-3 pb-14 max-w-full rounded bg-neutral-100 w-[270px]">
                <div className="flex z-10 flex-col self-end text-xs whitespace-nowrap text-neutral-50">
                  <div className="gap-2.5 self-start px-3 py-1 bg-green-500 rounded">
                    NEW
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5e6cc9a0f6a757b909f87b051467ae64636588a440caa04e2a9baf058d1069c?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                    className="object-contain self-end mt-5 max-w-full aspect-[1.35] w-[180px]"
                  />
                </div>
                <div className="flex flex-col self-start">
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
              <div className="flex flex-col self-start mt-4">
                <div className="text-base font-medium text-black">Kids Electric Car</div>
                <div className="flex gap-2 items-center mt-2 whitespace-nowrap">
                  <div className="gap-3 self-stretch my-auto text-base font-medium text-red-500">
                    $960
                  </div>
                  <div className="flex gap-2 items-start self-stretch my-auto text-sm font-semibold text-black">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                      className="object-contain shrink-0 aspect-[5] w-[100px]"
                    />
                    <div className="w-8 opacity-50">(65)</div>
                  </div>
                </div>
                <div className="flex gap-2 items-start self-start mt-2">
                  <div className="flex flex-col w-5">
                    <div className="flex flex-col justify-center items-center px-0.5 w-5 h-5 rounded-full border-2 border-black border-solid">
                      <div className="flex shrink-0 w-3 h-3 bg-red-600 rounded-full" />
                    </div>
                  </div>
                  <div className="flex shrink-0 w-5 h-5 bg-red-500 rounded-full fill-red-500" />
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[240px] w-[270px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43e4c15f715355f226d0fa5a0a1a40cfe9847c5ce549741d28289042d5f893a9?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain max-w-full aspect-[1.08] w-[270px]"
              />
              <div className="flex flex-col self-start mt-4">
                <div className="text-base font-medium text-black">Jr. Zoom Soccer Cleats</div>
                <div className="flex gap-2 items-center mt-2 whitespace-nowrap">
                  <div className="gap-3 self-stretch my-auto text-base font-medium text-red-500">
                    $1160
                  </div>
                  <div className="flex gap-2 items-start self-stretch my-auto text-sm font-semibold text-black">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                      className="object-contain shrink-0 aspect-[5] w-[100px]"
                    />
                    <div className="w-8 opacity-50">(35)</div>
                  </div>
                </div>
                <div className="flex gap-2 items-start self-start mt-2">
                  <div className="flex flex-col w-5">
                    <div className="flex flex-col justify-center items-center px-0.5 w-5 h-5 rounded-full border-2 border-black border-solid">
                      <div className="flex shrink-0 w-3 h-3 bg-yellow-300 rounded-full" />
                    </div>
                  </div>
                  <div className="flex shrink-0 w-5 h-5 bg-red-500 rounded-full fill-red-500" />
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[240px] w-[270px]">
              <div className="flex overflow-hidden items-start px-3 pt-3 pb-12 max-w-full rounded bg-neutral-100 w-[270px]">
                <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
                  <div className="gap-2.5 self-start px-3 py-1 bg-green-500 rounded">
                    NEW
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa70e9baabbdd2932d65630db583f5e35497d82d8df49ce4b4b04c9ea246aba3?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                    className="object-contain self-end mt-3 max-w-full aspect-[1.19] w-[178px]"
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
              <div className="flex flex-col items-start self-start mt-4">
                <div className="self-stretch text-base font-medium text-black">
                  GP11 Shooter USB Gamepad
                </div>
                <div className="flex gap-2 items-center mt-2 whitespace-nowrap">
                  <div className="gap-3 self-stretch my-auto text-base font-medium text-red-500">
                    $660
                  </div>
                  <div className="flex gap-2 items-start self-stretch my-auto text-sm font-semibold text-black">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ebc3c5f59aa7a3a000d25d542f748106442c0f0b42334cef5e3e2f8812fcef2?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                      className="object-contain shrink-0 aspect-[5] w-[100px]"
                    />
                    <div className="w-8 opacity-50">(55)</div>
                  </div>
                </div>
                <div className="flex gap-2 items-start mt-2">
                  <div className="flex flex-col w-5">
                    <div className="flex flex-col justify-center items-center px-0.5 w-5 h-5 rounded-full border-2 border-black border-solid">
                      <div className="flex shrink-0 w-3 h-3 bg-black rounded-full" />
                    </div>
                  </div>
                  <div className="flex shrink-0 w-5 h-5 bg-red-500 rounded-full fill-red-500" />
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-[240px] w-[270px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c07fd667f1e9a7124d91c5fd4156a027bd0f675463df1b3e86590b280e2fcf9?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                className="object-contain max-w-full aspect-[1.08] w-[270px]"
              />
              <div className="flex flex-col self-start mt-4">
                <div className="text-base font-medium text-black">Quilted Satin Jacket</div>
                <div className="flex gap-2 items-center mt-2 whitespace-nowrap">
                  <div className="gap-3 self-stretch my-auto text-base font-medium text-red-500">
                    $660
                  </div>
                  <div className="flex gap-2 items-start self-stretch my-auto text-sm font-semibold text-black">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ebc3c5f59aa7a3a000d25d542f748106442c0f0b42334cef5e3e2f8812fcef2?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
                      className="object-contain shrink-0 aspect-[5] w-[100px]"
                    />
                    <div className="w-8 opacity-50">(55)</div>
                  </div>
                </div>
                <div className="flex gap-2 items-start self-start mt-2">
                  <div className="flex flex-col w-5">
                    <div className="flex flex-col justify-center items-center px-0.5 w-5 h-5 rounded-full border-2 border-black border-solid">
                      <div className="flex shrink-0 w-3 h-3 bg-teal-900 rounded-full" />
                    </div>
                  </div>
                  <div className="flex shrink-0 w-5 h-5 bg-red-500 rounded-full fill-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-2.5 self-stretch px-12 py-4 mt-16 text-base font-medium bg-red-500 rounded text-neutral-50 max-md:px-5 max-md:mt-10">
          View All Products
        </div>
      </div>
    </div>
  );
}