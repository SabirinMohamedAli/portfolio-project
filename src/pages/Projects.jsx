import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Donuts House',
      description: 'Social media poster for Donuts house store.',
      githubLink: 'https://github.com/username/donuts-house'
    },
    {
      title: 'Business Dashboard',
      description: 'A dashboard for workers to measure productivity.',
      githubLink: 'https://github.com/username/business-dashboard'
    },
    {
      title: 'Helper Website',
      description: 'Landing page web design for an e-commerce app.',
      githubLink: 'https://github.com/username/helper-website'
    },
    {
      title: 'Network Monitoring Tool',
      description: 'A tool to monitor and manage network traffic.',
      githubLink: 'https://github.com/username/network-monitoring-tool'
    },
    {
      title: 'Cloud Deployment Automation',
      description: 'Scripts to automate cloud infrastructure deployment.',
      githubLink: 'https://github.com/username/cloud-deployment-automation'
    },
    {
      title: 'API Gateway',
      description: 'A secure API gateway for managing microservices.',
      githubLink: 'https://github.com/username/api-gateway'
    }
  ];

  return (
    <div className="p-10 bg-white text-dark-blue min-h-screen border-4 border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, githubLink }) {
  return (
    <div className="h-48 flex flex-col justify-center items-center p-6 rounded-lg text-center border-2 border-gray-200 hover:border-green transition duration-300 shadow-md hover:shadow-lg">
      <h3 className="text-xl font-bold text-dark-blue mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green text-white px-4 py-2 rounded-lg hover:bg-green-dark transition duration-300">
        View on GitHub
      </a>
    </div>
  );
}

export default Projects;
