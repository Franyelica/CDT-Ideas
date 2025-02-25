import React from 'react'
import "../WeAre/css/SupportStyles.css"

export const Support = () => {
    return (
        <div className='support'>
            <div className='background-overlay'>
                <img className='background-image' src="https://images.unsplash.com/photo-1581404501824-b69dfb89f64c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="/" />
            </div>

            <div className='container'>
                <div className='text-section'>
                    <h3>Nuestros valores</h3>
                    <p>En CDT artes, nos regimos por un conjunto de valores fundamentales que guían nuestras acciones y nos diferencian</p>
                </div>

                <div className='values-grid'>
                    <div className='value-item'>
                        <div className='value-item-content'>
                            <h3 className='value-title '>Innovación</h3>
                            <p className='value-description'> Estamos comprometidos con la búsqueda constante de soluciones creativas y disruptivas. Fomentamos la generación de ideas y la exploración de nuevas posibilidades para impulsar la innovación en cada proyecto.</p>
                        </div>
                    </div>

                    <div className='value-item'>
                        <div className='value-item-content'>
                            <h3 className='value-title '>Colaboración</h3>
                            <p className='value-description'>Valoramos el trabajo en equipo y la sinergia entre nuestros profesionales y clientes. Fomentamos la comunicación abierta, el intercambio de conocimientos y la colaboración estrecha para lograr los mejores resultados.</p>
                        </div>
                    </div>

                    <div className='value-item'>
                        <div className='value-item-content'>
                            <h3 className='value-title '>Integridad</h3>
                            <p className='value-description'>Actuamos con honestidad, ética y transparencia en todas nuestras interacciones. Mantenemos altos estándares de conducta profesional y respetamos la confidencialidad de la información de nuestros clientes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Support;