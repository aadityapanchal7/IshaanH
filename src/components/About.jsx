import React from 'react';

function About() {
  const milliseconds = new Date().getTime() - new Date("10/10/2007").getTime();
  const age = Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 365);

  return (
    <div className='text-black lg:pb-20' id='About'>
      <div className='sticky top-0 w-full py-2 text-xl font-bold text-green-700 md:text-2xl lg:text-3xl bg-white/90'>
        //About
      </div>
      <div className='mt-5 space-y-5 text-lg font-thin leading-relaxed md:text-xl xl:text-2xl'>
        <p>
          Hey there! I'm a {age}-year-old currently in my senior year of high school. I'm all about blending the world of technology and business, especially when it comes to innovative solutions like blockchain. It's fascinating to see how these technologies can transform industries and redefine our future.
        </p>
        <p>
          When I'm not deep in undertaking new projects, you can find me on the sand playing volleyball, or crushing it in a game of spikeball. I'm always up for a challenge, whether it's on my computer or on the court!
        </p>
      </div>
    </div>
  );
}

export default About;