"use client"
import React from 'react'

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { menu_Items } from './menu-Items';
import MyMenuComponent from './MyMenuComponent';

const SiteNavBar = () => {
    return (
        <>
            <div className='flex p-3 justify-center navbar space-x-14'>
                {menu_Items.map((menu, index) => {
                    return (<MyMenuComponent items={menu} key={index}/>);
                })}
            </div>
        </>
    )
}

export default SiteNavBar
