import React from 'react';

export const HomeNewViewProject = () => {
    return (
        <>
            {/*<div className='firstContainer'>
                <div class="partTwo">
                    <h1 class="project-Title">FINANCIA PROYECTOS ARTÍSTICOS</h1>
                    <p class="project-Desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Sed quis leo quis nisi aliquet tincidunt. Morbi euismod,
                        lorem at sagittis tincidunt, massa nisl sagittis leo, id ultrices augue arcu vitae justo.</p>
                    <a href='/projects'>
                        <button class="projects-buttom">Ver proyectos</button></a>
                </div>
    </div>*/}
            <div class="containerCard">
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="Chair" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Nombre</h3><br /><br />
                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p class="card-date">Fecha límite 23/5/25</p>
                        <button class="card-button">Más información</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2021/04/26/01/39/trees-6207925_1280.jpg" alt="Molecule" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Nombre</h3><br /><br />
                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p class="card-date">Fecha límite 21/5/25</p>
                        <button class="card-button">Más información</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2019/09/24/06/10/insect-4500348_1280.jpg" alt="Camera" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">Nombre</h3><br /><br />
                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p class="card-date">Fecha límite 23/5/25</p>
                        <button class="card-button">Más información</button>
                    </div>
                </div>
            </div>
        </>
    );
};
