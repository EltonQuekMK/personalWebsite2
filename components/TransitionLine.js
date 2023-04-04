import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

const transition = {
    duration: 2,
    ease: 'easeInOut',
};

export default function TransitionLine() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // This function will be called when the component mounts
        const animationTimer = setTimeout(() => {
            // After 2 seconds, hide the component
            setIsVisible(false);
        }, 2000);

        // Return a cleanup function to clear the timer when the component unmounts
        return () => clearTimeout(animationTimer);
    }, []);

    return (
        <>
            {isVisible ? (
                <div className={styles.transitionDiv}>
                    <svg
                        className={styles.transitionSvg}
                        width='100vw'
                        height='100vh'
                    >
                        <motion.svg
                            // width='626'
                            // height='659'
                            viewBox='0 10 626 659'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <motion.path
                                initial={{ pathLength: 1, opacity: 1 }}
                                animate={{ pathLength: 0, opacity: 0 }}
                                id='OrangeLine'
                                d='M499.852 609.268C815.852 317.268 550.914 140.955 506.852 121.268C459.852 100.268 324.852 80.2676 243.852 145.268C149.852 220.7 177.852 360.268 192.852 403.268C210.294 453.268 274.852 504.268 335.852 491.268C396.852 478.268 428.852 420.268 430.852 394.268C432.452 373.468 436.852 322.268 408.852 296.268'
                                stroke='#FF4D00'
                                strokeWidth='150'
                                strokeLinecap='round'
                                transition={transition}
                            />
                            <motion.path
                                initial={{ pathLength: 1, opacity: 1 }}
                                animate={{ pathLength: 0, opacity: 0 }}
                                id='BlueLine'
                                d='M228 75C-88 367 176.938 543.313 221 563C268 584 403 604 484 539C578 463.568 550 324 535 281C517.558 231 453 180 392 193C331 206 299 264 297 290C295.4 310.8 291 362 319 388'
                                stroke='#0066FF'
                                strokeWidth='150'
                                strokeLinecap='round'
                                transition={transition}
                            />
                        </motion.svg>
                    </svg>
                </div>
            ) : (
                ''
            )}
        </>
    );
}
