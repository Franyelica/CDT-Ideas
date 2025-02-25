import React from 'react'
import "../WeAre/css/AboutStyles.css"

export const About = () => {
    return (
        <div className='about'>
            <div className='about-container'>
                <div className='about-title'>
                    <h2>Patentes que transforman</h2>
                    <p className='about-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
                </div>

                <div className='about-grid'>
                    <div className='about-item' >
                        <p className='text-6xl font-bold text-purple-400'>100%</p>
                        <p className='text-gray-400'>Cumplimiento</p>
                    </div>
                    <div className='about-item' >
                        <p className='text-6xl font-bold text-purple-400'>24/7</p>
                        <p className='text-gray-400'>Atención</p>
                    </div>
                    <div className='about-item' >
                        <p className='text-6xl font-bold text-purple-400'>100K</p>
                        <p className='text-gray-400'>Transacciones</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;