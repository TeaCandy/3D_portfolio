import React from 'react'

import { skills } from '../constants'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='pink-gradient_text font-semibold drop-shadow'>Candace</span>
      
      </h1>

      <div className='mt-5 flex-col gap-3 text-slate-500'>
        <p>I was born and raised in Boston, Massachusetts, where I received all of my higher education. Seeking new career opportunities and a grand adventure, I moved to Houston, Texas, to embark on the next exciting chapter of my life.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
          <div className='block-container w-20 h-20'>
            <div className='btn-back rounded-xl'/>
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img 
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About