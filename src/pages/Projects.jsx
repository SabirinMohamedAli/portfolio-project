import React from 'react';

function Projects() {
  return (
    <div className="p-6 bg-purple-900 text-white">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard title="Donuts House" description="Social media poster for Donuts house store." />
        <ProjectCard title="Business Dashboard" description="A dashboard for workers to measure productivity." />
        <ProjectCard title="Helper Website" description="Landing page web design for an e-commerce app." />
      </div>
    </div>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="bg-purple-700 p-4 rounded-lg text-center hover:bg-purple-600 transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
      <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
        View Project
      </button>
    </div>
  );
}

export default Projects;
