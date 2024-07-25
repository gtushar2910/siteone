
import React from 'react'
import SiteNavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <>
            <div className='header bg-gray-100 font-sans'>
                <div className="container">
                    <div className="logoleft">
                        <a href='/'><img src='/SCETLogo.jpg' width={85} /></a>
                    </div>
                    <div className="headercontent  font-sans font-bold uppercase text-center">
                        <p className='heading-1'>Information Technology Department </p>
                        <p className='heading-2'>P.R. Khatiwala Charitable Trust </p>
                    </div>
                    <div className="logoright">
                    <a href='/'><img src='/SULogo.jpg' width={85} /></a>
                    </div>
                </div>
            </div>
            <div className='w-full font-sans'>
                <SiteNavBar />
            </div>

        </>
    )
}

export default Header
