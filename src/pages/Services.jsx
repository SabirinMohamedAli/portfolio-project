import React from 'react';
import { AiOutlineAppstore, AiOutlineCode, AiOutlineLayout } from 'react-icons/ai';

function Services() {
  return (
    <div className="p-6 bg-purple-900 text-white">
      <h2 className="text-3xl font-bold mb-4">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard icon={<AiOutlineAppstore />} title="App Design" description="Designing beautiful and functional mobile apps." />
        <ServiceCard icon={<AiOutlineCode />} title="Web Development" description="Building responsive and interactive websites." />
        <ServiceCard icon={<AiOutlineLayout />} title="UI/UX Design" description="Creating user-friendly and attractive interfaces." />
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-purple-700 p-4 rounded-lg text-center hover:bg-purple-600 transition">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Services;
