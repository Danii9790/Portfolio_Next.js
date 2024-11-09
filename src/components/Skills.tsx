import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-40 pb-40'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 className='text-4xl md:text-5xl'>Technolgies I work with</h2>
            <p className='text-grey-450 pt-2'>I have a solid foundation in front-end technologies like HTML, CSS, and JavaScript, along with expertise in TypeScript for stronger, scalable applications. My skill set extends to modern frameworks, including React and Next.js, allowing me to build dynamic, efficient web apps. Additionally, I’m experienced with Node.js for backend development, enabling me to create seamless full-stack solutions.</p>
        </div>
        <div data-aos="zoom-in-up">
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
