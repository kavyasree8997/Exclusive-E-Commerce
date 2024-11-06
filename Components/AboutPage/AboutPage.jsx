import React from 'react';
import OurStory from './OurStory';
import Statistics from './Statistics';
import TeamMembers from './TeamMembers';
import Services from './Services';
import Header from '../Headers/Header';
import Footer from '../Headers/Footer';

const AboutPage = () => {
  return (
    <div>
      <div className="flex overflow-hidden flex-col items-start pr-20 bg-white max-md:pr-5"><Header /></div>
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col self-center mt-20 w-full max-w-[1305px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-3 items-center self-start text-sm text-black whitespace-nowrap">
          <div className="self-stretch my-auto opacity-50">Home</div>
          <div className="self-stretch my-auto">/</div>
          <div className="self-stretch my-auto">About</div>
        </div>
        <OurStory />
        <Statistics />
        <TeamMembers />
        <Services />
      </div>
    </div>
    <div><Footer /></div>
    </div>
  );
};

export default AboutPage;