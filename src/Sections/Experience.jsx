
import React from 'react';
import { ExperienceData } from '../resources/Experiences'; 

const Experience = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0); 
  const experiences = ExperienceData; // Destructure the ExperienceData array into a variable

  return (
    <div>
      <div className='flex gap-10 sm:w-full mt-20'>
        <h1 className='text-3xl text-white'>Experience</h1>
        <div className='w-60 h-[1px] bg-tertiary my-5'></div>
      </div>
      <div className='flex py-20n gap-20 sm:flex-col '>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82]  w-1/3 sm:flex-x-row sm:overflow-scroll sm:w-full'>
          {experiences.map((experience, index) => (
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
        <div className='flex flex-col gap-4' >
        <h1 className='text-secondary text-2xl'>{experiences[selectedItemIndex].title}</h1>
        <h1 className='text-tertiary text-2xl'>{experiences[selectedItemIndex].company}</h1>
       <p className='text-white'>
       The standard chunk of Lorem Ipsum used since the
        1500s is reproduced below 
       for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" 
       by Cicero are also reproduced in their exact original
       </p>
      
      </div>
      </div> 
     
    </div>
  );
}

export default Experience;