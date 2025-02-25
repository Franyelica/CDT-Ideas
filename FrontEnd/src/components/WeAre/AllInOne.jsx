import React from 'react'
import "../WeAre/css/AllInOneStyles.css"

export const AllInOne = () => {
  return (
    <div className='platforms'>
      <div className='platforms-container'>
        <h2 className='platforms-title'>All-In-One Platform</h2>
        <p className='platforms-description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
          nostrum tempore.
        </p>

        <div className='platforms-grid'>

          <div className='platform-item'>
            <div className='platform-content'>
              <h3 className='platform-title'>Notifications</h3>
              <p className='platform-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='platform-item'>
            <div className='platform-content'>
              <h3 className='platform-title'>Notifications</h3>
              <p className='platform-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllInOne;
