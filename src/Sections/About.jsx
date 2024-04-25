import React from 'react'

const About = () => {
    const skills = [
        "Javascript",
        "React",
        "Node",
        "Express",
        "MongoDB",
    ];

    return (
        <div >
            <div className='flex gap-10 sm:w-full'>
                <h1 className='text-3xl text-white'>About</h1>
                <div className='w-60 h-[1px] bg-tertiary my-5'></div>
            </div>

            <div class="text-center">
                <div class=" flex sm:flex-col w-full  gap-10">
                    {/* <!-- First Column --> */}
                    <div class="flex flex-col justify-center items-center h-[50vh] w-full md:order-1">
                        <dotlottie-player
                            src="https://lottie.host/c582925e-a049-4dce-9d2c-41da987bfc18/Pl2nCnYQ3Y.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></dotlottie-player>
                    </div>

                    {/* <!-- Second Column --> */}
                    <div class="text-center flex flex-col justify-center items-start gap-10 md:order-2 sm:w-full" >
                        <p class='text-white'>
                            Hi, MY name is Richmond Gyening. I enjoy creating things that live on the internet,
                            My interest in web development started back in 2022 when I decided to try editing custom.
                            Brightfield Tech Academy taught me a lot about web development, and I have been 
                            learning ever since.
                        </p>
                        <p class='text-white'>
                            Fast forward to today, I have built several projects and have gained a lot of experience.
                            I am currently looking for a job as a front-end developer. But now I am doing an internship at
                            Namibra, a leading digital agency dedicated to empowering businesses and individuals with innovative digital solutions.
                        </p>
                    </div>
                </div>
            </div>

            <div className='py-5 '>
                <h1 className='text-tertiary text-2xl text-center'>
                    I've recently been working with the following technologies:
                </h1>
                <div className='flex flex-wrap gap-10 mt-5 justify-center '>
                    {skills.map((skill, index) => (
                        <div className='border border-tertiary px-16 py-3'>
                            <h1 className='text-tertiary'>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About