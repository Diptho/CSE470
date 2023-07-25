import React, { useEffect, useState } from 'react';

const PopularClasses = () => {


    let [popularClasses, setClasses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/classes`)
            .then(res => res.json())
            .then(data => setClasses(data))

    }, [])

    console.log(popularClasses);

    return (
        <div>
            <h1 className='text-center my-10 text-3xl font-semibold'>Popular classes</h1>
            <div className='grid md:grid-cols-3 gap-7'>
                {
                    popularClasses.map(item => <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={item.iImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.cName}</h2>
                            <p>{item.iName}</p>
                            <p>Total Student : {item.student}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;