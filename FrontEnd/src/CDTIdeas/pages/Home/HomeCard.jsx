import React from 'react';
import "../../CSS/HomeCard.css";

export const HomeCard = () => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#293377" fill-opacity="0.85" d="M0,32L34.3,48C68.6,64,137,96,206,96C274.3,96,343,64,411,90.7C480,117,549,203,617,224C685.7,245,754,203,823,202.7C891.4,203,960,245,1029,256C1097.1,267,1166,245,1234,218.7C1302.9,192,1371,160,1406,144L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
       {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#293377" fill-opacity="0.8.5" d="M0,288L1440,320L1440,320L0,320Z"></path></svg> */}
            <div className='GeneralCardI'>
                <div class="info-box">
                    <div class="info-box__front">
                        <img src="https://cdn.pixabay.com/photo/2012/12/03/18/43/head-68577_1280.jpg" alt="" />
                        {/* <h2>Box 1</h2> */}
                    </div>
                    <div class="info-box__back">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda deleniti perspiciatis 
                    quae labore minima aliquam? Laborum magni est debitis delectus ea quos consequuntur dolores 
                    aperiam voluptates, illum labore, enim aut.</p>
                    </div>
                </div>

                <div class="info-box">
                    <div class="info-box__front">
                        <img src="https://cdn.pixabay.com/photo/2016/06/25/12/55/art-1478831_1280.jpg" alt="" />
                        {/* <h2>Box 2</h2> */}
                    </div>
                    <div class="info-box__back">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda deleniti perspiciatis 
                    quae labore minima aliquam? Laborum magni est debitis delectus ea quos consequuntur dolores 
                    aperiam voluptates, illum labore, enim aut.</p>
                    </div>
                </div>

                <div class="info-box">
                    <div class="info-box__front">
                        <img src="https://cdn.pixabay.com/photo/2017/11/12/22/50/people-2944065_1280.jpg" alt="" />
                        {/* <h2>Box 3</h2> */}
                    </div>
                    <div class="info-box__back">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda deleniti perspiciatis 
                    quae labore minima aliquam? Laborum magni est debitis delectus ea quos consequuntur dolores 
                    aperiam voluptates, illum labore, enim aut.</p>
                    </div>
                </div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#293377" fill-opacity="0.8.5" d="M0,0L1440,64L1440,0L0,0Z"></path></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#293377" fill-opacity="0.85" d="M0,32L34.3,48C68.6,64,137,96,206,96C274.3,96,343,64,411,90.7C480,117,549,203,617,224C685.7,245,754,203,823,202.7C891.4,203,960,245,1029,256C1097.1,267,1166,245,1234,218.7C1302.9,192,1371,160,1406,144L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>

        </>
    )
}
