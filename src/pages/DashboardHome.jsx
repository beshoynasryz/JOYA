import React from 'react';
import HomePageSlider from '../component/HomePage/HomePageSlider';
import SecondSection from '../component/HomePage/SecondSection';
import Sidebar from '../component/HomePage/SideBar';
import Testimonials from '../component/HomePage/Testimonials';

const DashboardHome = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the Left */}
      <Sidebar />
      
      {/* Main Content on the Right */}
      <div className="flex-1">
        <HomePageSlider />
        <SecondSection />
        <Testimonials />
      </div>
    </div>
  );
};

export default DashboardHome;
