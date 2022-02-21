import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className='flex flex-row py-12 px-32 justify-start h-72 bg-[#191919]'>

            
            <div className='flex flex-col w-[50%] justify-between '>
                <img className='w-36' src={logo} alt="" />
                <p className='text-xs text-[#ffffff3f]'>Copyright 2020 Online food</p>
            </div>

            <div className='flex flex-col w-[50%] justify-between'>

                <div className='flex flex-row '>

                    <div className='text-[#ffffffd2] w-[50%] text-sm space-y-1'>
                        <p>About Online food</p>
                        <p>Read our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your resturent</p>
                    </div>

                    <div className='text-[#ffffffd2] w-[50%] text-sm space-y-1'>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Resturants near me</p>
                    </div>

                </div>
                <div className='text-[#ffffffd2] text-sm flex flex-row justify-evenly' >
                    <p>Privecy Policy.</p>
                    <p>Terms of Use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;