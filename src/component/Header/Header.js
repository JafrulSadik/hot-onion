import React from 'react';
import logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className='flex justify-between px-20 items-center '>
                <div className=''>
                    <img className='w-40 py-4 ml-10' src={logo} alt="" />
                </div>
                <div className='flex flex-row p-4  space-x-4'>
                    <div className='text-[#f83447]  rounded-full  px-5 pt-2  hover:ring-1 hover:ring-[#f83447] hover:delay-100 '>
                        <FontAwesomeIcon  icon={faCartShopping} size='sm'/>
                        <sub className='font-bold'>2</sub>
                    </div>
                    <div className='space-x-4'>
                        <button className='rounded-full  px-4 py-2 text-[#f83447]   hover:ring-1 ring-[#f83447] hover:delay-100' >Login</button>
                        <button className='rounded-full ring-1 ring-[#f83447] px-5 py-2 bg-[#f83447] text-white hover:delay-100 hover:bg-white hover:text-[#dc3545] '>Sign Up</button>
                    </div>
                </div>
        </div>
    );
};

export default Header;