import React from 'react'
import "../WeAre/css/HeroStyles.css"

export const Hero = () => {
  return (
    <div className='home'>
      <div className='grid-home'>
        <div className='text-container'>
          <p>CDT-ideas impulsando potencial creativo</p>
          <h1>Acerca de nosotros</h1>
          <p>Innovación en cada creación.</p>
        </div>

        <div>
          <img className='image-container' src="https://images.unsplash.com/photo-1617089976219-f4719dd4529f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80" alt="/" />
        </div>
      </div>
    </div>
  )
}
export default Hero;