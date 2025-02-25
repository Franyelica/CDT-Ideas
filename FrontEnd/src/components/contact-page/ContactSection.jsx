import React from 'react'
import { ContactInfoItem } from './ContactInfoItem'
import './CSS/StyleContacSection.css'
// import { HomeFooter } from '../../CDTIdeas/pages/Home/HomeFooter';
import PhoneIcon from '@/components/icons/PhoneIcon';
import MailIcon from '@/components/icons/MailIcon';
import LocationIcon from '@/components/icons/LocationIcon';


import CloseIcon from '@/components/icons/CloseIcon';

//<ContactInfoItem />

export const ContactSection = () => {
  return (

        <main className='DvMain'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className="contact-section">
                <div className="contact-info">
                
                    <p><i className="fas fa-map-marker-alt"></i><div className='IconC'><LocationIcon /></div> Campus Floresta, calle 47 A N°85-20</p>
                    <p><i className="fas fa-phone-alt"></i><div className='IconC'><PhoneIcon /></div> +57 454 55 55</p>
                    <p><i className="fas fa-envelope"></i><div className='IconC'><MailIcon /></div>businessstudio@info.com</p>
                    
                </div>

                <form action="mailto:businessstudio@info.com?subject=Consulta CDT Ideas" method="post" enctype="text/plain" className='formC'>
                    <label htmlFor="name">Nombre:</label><br />
                    <input type="text" id="name" name="name" required className='inputContact' placeholder="Enter your Name" /><br />

                    <label htmlFor="email">Email:</label><br />
                    <input type="text" id="email" name="email" required className='inputContact' placeholder="Enter a valid email address" /><br />

                    Mensaje:<br />
                     <textarea name="message" className='TextaContact' required rows={4} cols={25} placeholder="Enter your message" /><br />

                     <input type="submit" value="Enviar"  />
                </form >
            </div ><br/><br/><br/>
            {/* <HomeFooter /> */}
        </main>

  )
}
