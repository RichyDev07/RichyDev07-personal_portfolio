import React from 'react'
import Header from '../Components/Header'
import About from './About'

const Home=()=> {
  return (
    <div>
      <div  className='bg bg-primary  px-40 '>
<Header />
<div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
  <h1 className='text-white'>Hey there, I'm</h1>
  <h1 className='text-secondary text-7xl font-semibold'>Richmond Gyening</h1> 
  <h1 className='text-white text-6xl font-semibold'>I craft digital experiences for the web.</h1> 
  <p className='text-white  w-2/5'> I'm a Front-end Web Developer with 1 year of experience in front-end.
     I have expertise in JavaScript, HTML, CSS, React+vite. 
     Currently a facilitator at Brightfield Tech Acadamy.
    </p>
<button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
  
</div> 
<About />

    </div> 
    </div>
  )
}

export default Home