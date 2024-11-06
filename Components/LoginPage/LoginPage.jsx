
import React from 'react';
import LoginForm from './LoginForm';
import Header from '../Headers/Header';
import Footer from '../Headers/Footer';

const LoginPage = () => {
  return (
    <div>
    <div className="flex overflow-hidden flex-col items-start pr-20 bg-white max-md:pr-5">
      <Header />
    </div>
    <div className="">
      <div className="flex flex-wrap gap-10 items-center justify-center self-start mt-14 max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col self-stretch pt-20 my-auto rounded-none bg-slate-300 min-w-[240px] w-[805px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ff408ee612dbb33d2f787373e344b420b1316185128daa899473c17b86d4a35?placeholderIfAbsent=true&apiKey=aa9793d309dd42f48f0c0f5d0f3f50b0"
            alt="Side Image"
            className="object-contain w-full aspect-[1.14] max-md:max-w-full"
          />
        </div>
        <LoginForm />
      </div>
    </div>
    <div><Footer /></div>
    </div>
  );
};

export default LoginPage;