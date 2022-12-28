import React from 'react';
import car1 from '../asstesFile/car1.jpg'

const LetterOption = ({ car }) => {
    const { name, icon, description } = car;
    return (
        <div>
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={icon} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetterOption;