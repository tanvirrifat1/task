import React from 'react';

import car1 from '../asstesFile/car1.jpg'
import car2 from '../asstesFile/car2.webp'
import car3 from '../asstesFile/car3.webp'
import car4 from '../asstesFile/car4.webp'
import car5 from '../asstesFile/car5.webp'
import car6 from '../asstesFile/car6.webp'
import car7 from '../asstesFile/car7.webp'
import car8 from '../asstesFile/car8.webp'
import car9 from '../asstesFile/car9.webp'
import car10 from '../asstesFile/car10.webp'

import LetterOption from './LetterOption';

const ImageOption = () => {

    const cardData = [
        {
            id: 1,
            name: 'Lamborghini Sian Roadster',
            description: 'The indomitable V12 engine of the Sián Roadster incorporates titanium intake valves and is uprated to 785 CV (577 kW) at 8,500 rpm, thus becoming the most powerful Lamborghini engine ever made, delivering a total of 819 CV (602 kW) and reaching a top speed of over 350 km/h.',
            icon: car1,

        },
        {
            id: 2,
            name: 'Pagani Huayra BC Roadster',
            description: 'The Huayra has a top speed of about 383 km/h (238 mph) and it has a 0-97 km/h (60 mph) acceleration time of 2.8 seconds. Using Pirelli tyres, the Pagani Huayra is capable of 1.66 g of lateral acceleration. The Pagani Huayra uses a seven-speed sequential gearbox and a single disc clutch.',
            icon: car2,
        },
        {
            id: 3,
            name: 'McLaren Speedtail',
            description: 'The McLaren Speedtail is a limited-production hybrid sports car manufactured by McLaren Automotive, revealed on October 26, 2018. This car is the fourth edition in the McLaren Ultimate Series, after the Senna, the P1, and the F1. The car is also part of the 18 new cars or derivatives that McLaren will launch as part of its Track22 business plan',
            icon: car3,

        },
        {
            id: 4,
            name: 'Aston Martin Valkyrie',
            description: 'Aston Martin Lagonda Global Holdings PLC is an English manufacturer of luxury sports cars and grand tourers. Its predecessor was founded in 1913 by Lionel Martin and Robert Bamford. Steered from 1947 by David Brown, it became associated with expensive grand touring cars in the 1950s and 1960s, and with the fictional character James Bond following his use of a DB5 model in the 1964 film Goldfinger. ',
            icon: car4,

        },
        {
            id: 5,
            name: 'Hennessey Venom GT',
            description: 'Based on classic American V8 architecture, the Hennessey Venom F5 engine produces an astounding 1817 horsepower and 1193 lb-ft of torque. It uses a combination of high-tech, lightweight engine components (crankshaft, pistons, connecting rods & custom engine block) that combine for 6.6L of displacement.',
            icon: car5,

        },
        {
            id: 6,
            name: 'Koenigsegg Jesko Absolut',
            description: 'The Koenigsegg Jesko Absolut is one of the most recent examples of this level of automotive prowess. This hypercar packs a 5.0-liter V8. The engine has a flat-plane crankshaft and double overhead camshafts. Its maximum output is 1,600 horsepower at 7,800 rpm with the use of E85',
            icon: car6,

        },
        {
            id: 7,
            name: 'SSC Tuatara',
            description: 'The Tuatara runs a twin-turbo V8 producing 1,750bhp when run on E85 or Methanol, or 1,350bhp on 91 octane fuel. Its housed in a carbon fibre monocoque and matched to a sevenSpeed gearbox driving the rear wheels',
            icon: car7,

        },
        {
            id: 8,
            name: 'Bugatti Chiron',
            description: 'The CHIRON is the fastest, most powerful, and exclusive production super sports car in BUGATTIs history. Its sophisticated design, innovative technology, and iconic, performance-oriented form make it a unique masterpiece of art, form and technique, that pushes boundaries beyond imagination',
            icon: car8,

        },
        {
            id: 9,
            name: 'Bugatti Bolide',
            description: 'The Bugatti Bolide is a track-day-focused sportscar developed by Bugatti Engineering GmbH in Wolfsburg, Germany and manufactured in Molsheim, by French automobile manufacturer Bugatti Automobiles S.A.S., revealed online on October 28, 2020.',
            icon: car9,

        },
        {
            id: 10,
            name: 'Koenigsegg CCR',
            description: 'Debuting at the March 2004 Geneva Auto Show, the CCR[5] was the most powerful version of the Koenigsegg CC range cars at the time. Like the CC8S it features dihedral synchro-helix actuation doors. It has, however, various improvements. A larger front splitter for optimized downforce and tweaked headlight arrangement came standard with a rear wing. New larger tires and wheels equipped with larger brakes.',
            icon: car10,

        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
            <div>
                <h1 className='text-5xl font-bold mt-6'>Here is Cars Area</h1>
            </div>
            {
                cardData.map(car => <LetterOption
                    key={car.id}
                    car={car}
                ></LetterOption>)
            }
        </div>
    );
};

export default ImageOption;