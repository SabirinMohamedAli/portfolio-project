import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import aboutImage from '../images/4.png'; // Replace with your image path
import 'animate.css';

function About() {
  return (
    <div className="bg-white text-dark-blue py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 animate__animated animate__fadeInDown">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Image */}
          <div className="flex justify-center animate__animated animate__fadeInLeft">
            <img 
              src={aboutImage} 
              alt="About Me" 
              className="rounded-lg shadow-lg object-cover w-96 h-auto border-4 border-green-dark"
            />
          </div>
          
          {/* Right Section - Content */}
          <div className="space-y-6 animate__animated animate__fadeInRight">
            <p className="text-lg leading-relaxed">
              Hi! I'm <span className="text-green font-bold">Adnan</span>, a passionate <span className="text-green font-bold">Full Stack Developer</span> and <span className="text-green font-bold">Network Engineer</span> with a strong focus on building scalable and efficient web applications. I specialize in using modern technologies like <span className="text-green font-bold">Node.js</span>, <span className="text-green font-bold">React</span>, and <span className="text-green font-bold">Java</span> to create dynamic and responsive user experiences.
            </p>
            <p className="text-lg leading-relaxed">
              My journey in tech started with a deep curiosity for how things work. Over the years, I've honed my skills in both front-end and back-end development, which allows me to bring a comprehensive approach to every project I undertake.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I'm always excited to take on new challenges and collaborate with others in the tech community.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-dark-blue hover:text-blue-500 transition duration-300 animate__animated animate__fadeInUp">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-dark-blue hover:text-green transition duration-300 animate__animated animate__fadeInUp">
                <FaGithub />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-dark-blue hover:text-blue-400 transition duration-300 animate__animated animate__fadeInUp">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
