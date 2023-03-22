import React, { useContext } from 'react';
// import images
import WomanImg from '../img/contact/woman.png';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='section bg-white'
        >
            <div className='container mx-auto h-full'>
                <div className='flex h-full flex-col items-center justify-start gap-x-8 pt-36 text-center lg:flex-row lg:text-left'>
                    {/* bg */}
                    <motion.div
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={transition1}
                        className='absolute bottom-0 left-0 right-0 top-72 -z-10 hidden bg-[#eef7f9] lg:flex'
                    ></motion.div>
                    {/* text & form */}
                    <div
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className='px-4 lg:flex-1 lg:pt-32'
                    >
                        <h1 className='h1'>Contact me</h1>
                        <p className='mb-12'>
                            I would love to get suggestions from you.
                        </p>
                        {/* form */}
                        <form className='flex flex-col gap-y-4'>
                            <div className='flex gap-x-10'>
                                <input
                                    className='h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]'
                                    type='text'
                                    placeholder='Your name'
                                />
                                <input
                                    className='h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]'
                                    type='text'
                                    placeholder='Your email address'
                                />
                            </div>
                            <input
                                className='h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]'
                                type='text'
                                placeholder='Your message'
                            />
                            <button className='btn mx-auto mb-[30px] self-start lg:mx-0'>
                                Send it
                            </button>
                        </form>
                    </div>
                    {/* image */}
                    <motion.div
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ transition: transition1, duration: 1.5 }}
                        className='lg:flex-1'
                    >
                        <img src={WomanImg} alt='' />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
