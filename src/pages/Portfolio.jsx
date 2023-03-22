import React, { useContext } from 'react';
// import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='section'
        >
            <div className='container relative mx-auto h-full'>
                <div className='flex h-full flex-col items-center justify-start gap-x-24 pt-24 pb-8 text-center lg:flex-row lg:pt-36 lg:text-left'>
                    {/* text */}
                    <motion.div
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        initial={{ opacity: 0, y: '-80%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-80%' }}
                        transition={transition1}
                        className='flex flex-col lg:items-start'
                    >
                        <h1 className='h1'>Portfolio</h1>
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
                        <Link
                            to={'/contact'}
                            className='btn mx-auto mb-[30px] lg:mx-0'
                        >
                            Hire me
                        </Link>
                    </motion.div>
                    {/* image grid */}
                    <div
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className='grid grid-cols-2 lg:gap-2'
                    >
                        {/* image */}
                        <div className='h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[320px]'>
                            <img
                                className='h-full object-cover transition-all duration-500 hover:scale-110 lg:h-[220px]'
                                src={Image1}
                                alt=''
                            />
                        </div>
                        <div className='h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[320px]'>
                            <img
                                className='h-full object-cover transition-all duration-500 hover:scale-110 lg:h-[220px]'
                                src={Image2}
                                alt=''
                            />
                        </div>
                        <div className='h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[320px]'>
                            <img
                                className='h-full object-cover transition-all duration-500 hover:scale-110 lg:h-[220px]'
                                src={Image3}
                                alt=''
                            />
                        </div>
                        <div className='h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[320px]'>
                            <img
                                className='h-full object-cover transition-all duration-500 hover:scale-110 lg:h-[220px]'
                                src={Image4}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Portfolio;
