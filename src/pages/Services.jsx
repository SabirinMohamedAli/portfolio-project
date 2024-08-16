import React from 'react';
import { AiOutlineAppstore, AiOutlineCode, AiOutlineLayout, AiOutlineDatabase, AiOutlineCloud, AiOutlineSecurityScan } from 'react-icons/ai';

function Services() {
  return (
    <div className="p-10 bg-white text-dark-blue min-h-screen border-4 border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-center">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard icon={<AiOutlineAppstore />} title="App Design" description="Designing beautiful and functional mobile apps." />
        <ServiceCard icon={<AiOutlineCode />} title="Web Development" description="Building responsive and interactive websites." />
        <ServiceCard icon={<AiOutlineLayout />} title="UI/UX Design" description="Creating user-friendly and attractive interfaces." />
        <ServiceCard icon={<AiOutlineDatabase />} title="Database Management" description="Efficiently managing and maintaining databases." />
        <ServiceCard icon={<AiOutlineCloud />} title="Cloud Computing" description="Providing scalable and secure cloud solutions." />
        <ServiceCard icon={<AiOutlineSecurityScan />} title="Network Security" description="Ensuring the security and integrity of networks." />
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="h-48 flex flex-col justify-center items-center p-6 rounded-lg text-center border-2 border-gray-200 hover:border-green transition duration-300 shadow-md hover:shadow-lg">
      <div className="text-4xl text-dark-blue mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-dark-blue mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

export default Services;
