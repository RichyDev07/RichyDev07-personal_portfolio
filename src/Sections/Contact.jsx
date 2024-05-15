import React from 'react'

const  Contact =()=> {
    const user={
     name:"Richmond Gyening",
    age:"null",
    gender:"Male",
    email:"richmondgyening007@gmail.com",
    mobile:"+233 59115007 ",
    country:"Ghana"

    }
  return (
    <div className='flex'>
    <div className='flex flex-col gap-5'>
    <div className='flex gap-10 sm:w-full mt-20'>
        <h1 className='text-3xl text-secondary'>Say Hello</h1>
        <div className='w-60 h-[1px] bg-tertiary my-5'></div>
      </div>
      {
        Object.keys(user).map((key, index)=>(
            
             <h1 className='text-2xl'>
                <span className='text-tertiary'>{key}</span>:{" "}
                <span className='text-tertiary'>{user[key]}</span>
             </h1>
        
      ))}
    </div>
    <div class="flex flex-col justify-center items-center h-[70vh] w-full md:order-1">
    <dotlottie-player
                            src="https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></dotlottie-player>
    </div>
    </div>
  )
}

export default Contact