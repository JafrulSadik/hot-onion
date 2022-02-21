import React from 'react';

const Card = (e) => {

    const alter = 'img of ' + e.value.name;
    

    return (
        <div className='flex flex-col shadow-md mb-10 justify-center text-center items-center w-72 h-auto transform hover:scale-105 duration-300 hover:drop-shadow-xl p-2 pb-10 rounded-lg bg-white ' key={e.value.id}>

            <img className='px-7 pt-4 w-60 rounded-full' src={e.value.image} alt={alter} />
            <div className='p-4'>
                <h1 className='font-bold pt-2'>{e.value.name}</h1>
                <p className='text-gray-500 py-2'>It's very delicious food.</p>
                <h1 className='font-semibold'>{'$ '+e.value.price}</h1>
            </div>
        </div>
    );
};

export default Card;