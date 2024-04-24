import React from 'react'


const About =() =>{
  return (
<div className='flex flex gap-10 py-10'>
    <div className='flex gap-10 items-center py-10'>
        <h1 className='text-3xl text-white'>About</h1>
        <div className='w-60 h-[1px] bg-tertiary'></div>
    </div>

    <div className='h-[50vh]'>
        <div className="flex justify-center items-center">
            <dotlottie-player
                src="https://lottie.host/c582925e-a049-4dce-9d2c-41da987bfc18/Pl2nCnYQ3Y.json"
                background="transparent"
                speed="1"
                loop
                autoplay
            ></dotlottie-player>
        </div>
    </div>
    <dotlottie-player ></dotlottie-player>
</div>

       
   

  ) 
}

export default About