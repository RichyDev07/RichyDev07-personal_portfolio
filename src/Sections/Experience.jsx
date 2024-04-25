import React from 'react';
import { Experience as ExperienceData } from '../resources/Experiences'; 

const Experience = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0); // Fixed typo in state variable name
  
  return (
    <div>
      <div className='flex gap-10 sm:w-full mt-20'>
        <h1 className='text-3xl text-white'>Experience</h1>
        <div className='w-60 h-[1px] bg-tertiary my-5'></div>
      </div>
      <div className='flex py-20'>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] '>
          {ExperienceData.map((experience, index) => (
            <div  key={index}
            onClick={()=>{
              setSelectedItemIndex(index);
            }}
            className='cursor-pointer'
            >
              <h1 className={`text-xl px-5  ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 ml-[1px] bg-[#1a7f5a31] py-3'  : 'text-white'}`}>
                {experience.period}</h1>
              {/* Add other details if necessary */}
            </div>
          ))}
        </div>
        <div >
          
          
     <h1 className='text-secondary text-2xl'>[experience, index [selectedItemIndex ].title]</h1>
      </div>
      </div>
     
    </div>
  );
}

export default Experience;
