import React from 'react';
import heroImage from '../images/4.png'; 

function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-white text-dark-blue mt-4 md:mt-8 px-4"> 
      <div className="md:w-1/2 p-4 md:p-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'cursive', textAlign: 'center', marginBottom: '20px' }}>
          Hi, I am Adnan
        </h2>
        <p className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'cursive', color: '#2ECC71', textAlign: 'center', marginBottom: '20px' }}>
          Full Stack Developer
        </p>
        <p className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'cursive', color: '#34495E', textAlign: 'center' }}>
          Network Engineering
        </p>

        <p className="text-lg md:text-xl mb-4" style={{ textAlign: 'center' }}>Building efficient and scalable web applications.</p>
        <p className="text-lg md:text-xl mb-4" style={{ fontFamily: 'cursive', color: '#2ECC71', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
          I specialize in Node.js, React, Java, JavaScript and C#.
        </p>

        <div className="flex justify-center space-x-2 md:space-x-4 mt-4">
          <button className="bg-green text-white px-4 md:px-6 py-2 rounded-lg hover:bg-green-dark transition duration-300">
            Hire me
          </button>
          <button className="bg-dark-blue text-white px-4 md:px-6 py-2 rounded-lg hover:bg-dark-blue-light transition duration-300">
            Download CV
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src={heroImage} alt="Hero" className="w-3/4 md:w-full h-auto object-contain" style={{ marginTop: '20px', backgroundColor: 'transparent' }} /> 
      </div>
    </div>
  );
}

export default Home;
