import React, { useContext } from 'react';
// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
// import router
import { BrowserRouter as Router } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import cursor context
import { CursorContext } from './context/CursorContext';

const App = () => {
    const { cursorVariants, cursorBG } = useContext(CursorContext);
    return (
        <>
            <Router>
                <Header />
                <AnimRoutes />
            </Router>
            {/* cursor */}
            <motion.div
                variants={cursorVariants}
                animate={cursorBG}
                className='pointer-events-none fixed top-0 left-0 z-50 h-[32px] w-[32px] rounded-full bg-primary'
            ></motion.div>
        </>
    );
};

export default App;
