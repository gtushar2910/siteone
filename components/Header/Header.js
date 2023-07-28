import React from 'react'
import './header.css';
import SiteNavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <>
            <div className='header'>
                <div class="container">
                    <div class="logoleft">
                        <img src='/SCETLogo.jpg' width={85} />
                    </div>
                    <div class="headercontent">
                        <p className='heading-1'>Information Technology Department </p>
                        <p className='heading-2'>P.R. Khatiwala Charitable Trust </p>
                    </div>
                    <div class="logoright">
                        <img src='/SULogo.jpg' width={85} />
                    </div>

                </div>

            </div>
           
                <SiteNavBar />
        </>
    )
}

export default Header
