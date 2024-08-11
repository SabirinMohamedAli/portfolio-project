import React from 'react';
import heroImage from '../images/1.jpg'; // Hubi in dariiqa uu sax yahay

function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center h-screen bg-white text-dark-blue">
      <div className="md:w-1/2 p-10">
        <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'cursive' }}>
          Hi, I am Sabirin
        </h2>
        <p className="text-3xl mb-6" style={{ fontFamily: 'cursive', color: '#FF5733' }}>
          Full Stack Developer
        </p>
        <p className="text-xl">Building efficient and scalable web applications.</p>
        <div className="flex space-x-4 mt-4">
          <button className="bg-green text-white px-6 py-2 rounded-lg hover:bg-green-dark transition duration-300">
            Hire me
          </button>
          <button className="bg-dark-blue text-white px-6 py-2 rounded-lg hover:bg-dark-blue-light transition duration-300">
            Download CV
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src={heroImage} alt="Hero" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default Home;
