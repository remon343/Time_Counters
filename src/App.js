import React from 'react';
import Heading from './components/Heading';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col gap-8 justify-center items-center h-screen bg-[#000000] text-[#FB2576]'>
      <img className='w-28' src="https://www.freeiconspng.com/uploads/celebration-icon-png-1.png" alt="Celebration Save Icon Format" />
      <Heading />
      <Countdown />
      <Footer />
    </div>
  );
}

export default App;
