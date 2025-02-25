import React from 'react'
import "../../CSS/HomeNewViewProject.css"

 
export const HomeNewsletter = () => {
    return (
        <>
          <div class="invitation">
            <h1>SUSCRÍBETE A NUESTRO NEWSLETTER</h1>
            <p>Recibe las últimas noticias, consejos y ofertas exclusivas en tu correo electrónico.</p>
            <form>
                <input type="text" name="name" placeholder="Nombre" required/>
                <input type="email" name="email" placeholder="Correo electrónico" required/>
                <button type="submit">Suscribirse</button>
            </form>
          </div>
        </>
    )
}