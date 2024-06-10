import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Do you think I'd be a good fit for your team? <br className='sm:block hidden' />
            I'm always ready to try something new!
        </p>
        <Link to="/contact" className='btn'>Contact</Link>
    </section>
  )
}

export default CTA