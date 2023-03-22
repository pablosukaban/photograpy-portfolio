import React, { useContext } from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
// import link
import { Link } from 'react-router-dom';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Header = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
        <header className='fixed z-30 flex h-[100px] w-full items-center px-[30px] lg:h-[140px] lg:px-[100px]'>
            <div className='flex w-full flex-col justify-between lg:flex-row lg:items-center'>
                {/* logo */}
                <Link
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    to={'/'}
                    className='max-w-[200px]'
                >
                    <img src={Logo} alt='' />
                </Link>
                {/* nav - initially hidden - show on desktop mode */}
                <nav
                    className='hidden gap-x-12 font-semibold xl:flex'
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    <Link
                        to={'/'}
                        className='text-[#696c6d] transition hover:text-primary'
                    >
                        Home
                    </Link>
                    <Link
                        to={'/about'}
                        className='text-[#696c6d] transition hover:text-primary'
                    >
                        About
                    </Link>
                    <Link
                        to={'/portfolio'}
                        className='text-[#696c6d] transition hover:text-primary'
                    >
                        Porftolio
                    </Link>
                    <Link
                        to={'/contact'}
                        className='text-[#696c6d] transition hover:text-primary'
                    >
                        Contact
                    </Link>
                </nav>
            </div>
            {/* socials */}
            <Socials />
            {/* mobile nav */}
            <MobileNav />
        </header>
    );
};

export default Header;
