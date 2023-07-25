import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const PopularInstructor = () => {

    let [popularClasses, setClasses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/classes`)
            .then(res => res.json())
            .then(data => setClasses(data))

    }, [])

    let { iImage } = popularClasses



    return (
        <div>
            <h1 className='my-10 text-3xl font-semibold text-center' >Most Popular Instructors</h1>
            <Marquee>
                {
                    popularClasses.map(item =>

                        <div className="carousel carousel-end ">
                            <div className="carousel-item w-64 max-w-[256px]">
                                <img src={item.iImage} alt="Drink" />
                            </div>


                        </div>

                    )
                }
            </Marquee>
        </div>
    );
};

export default PopularInstructor;