import React from 'react';
import Lander from './components/Lander';
import About from './components/About';
import Resume from './components/Resume';
import Research from './components/Research';
import Initiatives from './components/Initiatives';

function App() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col md:flex-row max-w-[1600px] w-full h-full bg-white'>
        <Lander />
        <div className='flex flex-col justify-start items-start text-left p-16 w-full md:ml-[50%]'>
          <About />
          <Research />
          <Initiatives />
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;
