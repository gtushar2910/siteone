import React from 'react'
import Link from 'next/link';

const SiteNavBar = () => {
    return (
        <div class='navbar flex justify-center items-center'>
            <nav className='flex items-center flex-wrap  p-3 '>
                <Link href='/' legacyBehavior>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-sm   uppercase tracking-wide'>
                            Home
                        </span>
                    </a>
                </Link>
            </nav>
            <nav className='flex items-center flex-wrap  p-3 '>
                <Link href='/' legacyBehavior>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-sm uppercase tracking-wide'>
                            About Us
                        </span>
                    </a>
                </Link>
            </nav>
            <nav className='flex items-center flex-wrap  p-3 '>
                <Link href='/' legacyBehavior>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-sm   uppercase tracking-wide'>
                            About Us
                        </span>
                    </a>
                </Link>
            </nav>
            <nav className='flex items-center flex-wrap  p-3 '>
                <Link href='/' legacyBehavior>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-sm  uppercase tracking-wide'>
                            About Us
                        </span>
                    </a>
                </Link>
            </nav>
            <nav className='flex items-center flex-wrap  p-3 '>
                <Link href='/' legacyBehavior>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-sm   uppercase tracking-wide'>
                            About Us
                        </span>
                    </a>
                </Link>
            </nav>
            <nav className='flex items-center flex-wrap  p-3 '>
                <Link href='/' legacyBehavior>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-sm   uppercase tracking-wide'>
                            About Us
                        </span>
                    </a>
                </Link>
            </nav>
            <nav className='flex items-center flex-wrap  p-3 '>
                <Link href='/' legacyBehavior>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-sm  uppercase tracking-wide'>
                            About Us
                        </span>
                    </a>
                </Link>
            </nav>
        </div>
    )
}

export default SiteNavBar
