import React, { useContext } from 'react';
// import images
import WomanImg from '../img/about/woman.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='section'
        >
            <div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className='container relative mx-auto h-full'
            >
                {/* text & img wrapper */}
                <div className='flex h-full flex-col items-center justify-center gap-x-24 text-center lg:flex-row lg:pt-16 lg:text-left'>
                    {/* image */}
                    <div className='order-2 max-h-96 flex-1 overflow-hidden lg:order-none lg:max-h-max'>
                        <img src={WomanImg} alt='' />
                    </div>
                    {/* text */}
                    <motion.div
                        initial={{ opacity: 0, y: '-80%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-80%' }}
                        transition={transition1}
                        className='z-10 flex flex-1 flex-col items-center justify-center pt-36 pb-14 lg:w-auto lg:items-start lg:pt-0'
                    >
                        <h1 className='h1'>About me</h1>
                        <p className='mb-12 max-w-sm'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.
                            <b> Exercitationem, veritatis.</b> Veritatis illum
                            aut, reprehenderit sed dolorem dolore.
                            <br />
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Recusandae, iure! Ullam, dolore? Eligendi,
                            quam mollitia.
                        </p>
                        <Link to={'/portfolio'} className='btn'>
                            View my work
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
