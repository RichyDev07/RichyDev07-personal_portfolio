import React from 'react'
import { ProjectsData } from '../resources/Projects'; 

const Project  =()=> {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0); 
    const Projects = ProjectsData; 
  return (
    <div>
        <div className='flex gap-10 sm:w-full mt-20'>
        <h1 className='text-3xl text-white'>Projects</h1>
        <div className='w-60 h-[1px] bg-tertiary my-5'></div>
      </div>

         <div className='flex py-20n gap-20 sm:flex-col '>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82]  w-1/3 sm:flex-x-row sm:overflow-scroll sm:w-full'>
          {Projects.map((Project, index) => (
            <div  key={index}
            onClick={()=>{
              setSelectedItemIndex(index);
            }}
            className='cursor-pointer'
            >
              <h1 className={`text-xl px-5  ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 ml-[1px] bg-[#1a7f5a31] py-3'  : 'text-white'}`}>
                {Project.title}</h1>
    
              {/* Add other details if necessary */}
            </div>
          ))}
        </div>
     <div className='flex items-center justify-center gap-20 sm:flex-col'>
      <img src={Projects[selectedItemIndex].image} alt="" className='h-60 w-72  rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md ' />
     <div className='flex flex-col gap-4' >
        <h1 className='text-secondary text-2xl'>{Projects[selectedItemIndex].title}</h1>
        <p className='text-white '>{Projects[selectedItemIndex].discription}</p>
        
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
    </div>
  )
}

export default Project